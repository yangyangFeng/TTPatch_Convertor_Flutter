let global = this;
//2020年04月21日10:27:57

var ObjCLexer = require('./parser/ObjCLexer').ObjCLexer
var ObjCParser = require('./parser/ObjCParser').ObjCParser
var JPObjCListener = require('./JPObjCListener').JPObjCListener
var JPErrorListener = require('./JPErrorListener').JPErrorListener
var JPScriptProcessor = require('./JPScriptProcessor').JPScriptProcessor
var antlr4 = require('./parser/antlr4/index');
var beautify = require('./lib/beautify').js_beautify

var convertor = function(script, cb) {
    var ignoreClass = 0, ignoreMethod = 0;
    script = script.replace(/(^\s*)/g,'');
    if (script.indexOf('@implementation') == -1) {
        ignoreClass = 1;
        if (script[0] != '-' && script[0] != '+') {
            script = '@implementation tmp \n -(void)tmp{' + script + '\n}\n@end'
            ignoreMethod = 1;
        } else {
            script = '@implementation tmp \n' + script + '\n@end'
        }
    }

    var chars = new antlr4.InputStream(script);
    var lexer = new ObjCLexer(chars);
    lexer.addErrorListener(new JPErrorListener(function(e) {
        if (cb) cb(null, e);
    }));
    var tokens  = new antlr4.CommonTokenStream(lexer);

    var parser = new ObjCParser(tokens);
    parser.addErrorListener(new JPErrorListener(function(e) {
        if (cb) cb(null, e);
    }));
    var tree = parser.translation_unit();
    var listener = new JPObjCListener(function(result){
        var processor = new JPScriptProcessor(result)
        var script = processor.finalScript();
        if (cb) cb(beautify(script));
    });
    listener.ignoreClass = ignoreClass;
    listener.ignoreMethod = ignoreMethod;

    try {
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    } catch(e) {
        cb(null, e);
    }
}
 global.convertor=convertor;
 exports.convertor = convertor;
// INFO Exporting require to global scope



