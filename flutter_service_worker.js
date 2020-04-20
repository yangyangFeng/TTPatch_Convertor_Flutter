'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ed97f48ebb784574f8de65e2b66b9e7e",
"/": "ed97f48ebb784574f8de65e2b66b9e7e",
"js/JPContext.js": "34b2d7c7c6614674035aa323acb8ead9",
"js/JPObjCListener.js": "b4bfd6df5abe4d89aaf85ced6cc43992",
"js/JPErrorListener.js": "56d0d70521e207878742871a42dcb172",
"js/parser/ObjCParser.js": "bc34b54c404715b3f2e3d1d026938a3f",
"js/parser/ObjCListener.js": "5437cbb5270e32e17a962922c37a8686",
"js/parser/ObjC.g4": "edda3b9bedada21c1a038088727ec961",
"js/parser/ObjCLexer.tokens": "143b7adbb72dbea66f83a591144a9ced",
"js/parser/ObjCLexer.js": "a1a721f66414ae3ca99ffb5f4647bbd7",
"js/parser/antlr4/Recognizer.js": "9bf05d44495451975fc6e8ca9792d927",
"js/parser/antlr4/tree/Tree.js": "e5a2333903fb2bcbf272d4c2a60ab2f2",
"js/parser/antlr4/tree/index.js": "1b48782734a66c806d5d0841625c3dfe",
"js/parser/antlr4/tree/Trees.js": "06fc4b11b48d9e5da54d904db1eaaf7d",
"js/parser/antlr4/BufferedTokenStream.js": "e64bb29fa37392cf2efd340b165d8e51",
"js/parser/antlr4/dfa/DFASerializer.js": "465dda223ad843a8e97c520ec669f6b1",
"js/parser/antlr4/dfa/index.js": "999824fb03ae9164e0adea90f12ffed1",
"js/parser/antlr4/dfa/DFAState.js": "f7c7132b49aea3e18f61787c7853d0f2",
"js/parser/antlr4/dfa/DFA.js": "dea713e93c835622820d534a6013c5e6",
"js/parser/antlr4/CommonTokenFactory.js": "ddd79ad42c05021c1edccbd66bc31c27",
"js/parser/antlr4/index.js": "b1a9709638c6d8fc3a9099cc7c8381ce",
"js/parser/antlr4/FileStream.js": "562631a91446b509324401b9ce52dc1b",
"js/parser/antlr4/InputStream.js": "652cad54088ce7fc2f3734f61a27c7cc",
"js/parser/antlr4/Token.js": "fbac277fe4d85e7da0a706847e84d8fa",
"js/parser/antlr4/README.md": "bc3bccb47009422c45345cf1f18b1314",
"js/parser/antlr4/IntervalSet.js": "9afa8e0503cada2470b7baa7e983b7b5",
"js/parser/antlr4/package.json": "39f67eaf43296e62a564d9d2c34291a0",
"js/parser/antlr4/CommonTokenStream.js": "d013f77b7de7fb43c5bc18f54338af54",
"js/parser/antlr4/RuleContext.js": "b8c93c2474b62f89d643671cb00d792d",
"js/parser/antlr4/Utils.js": "2dbbbcdfe6a1c2efce43b4dbd5626948",
"js/parser/antlr4/atn/Transition.js": "024bc16a1634d29b78582c53b109c2bf",
"js/parser/antlr4/atn/ATNSimulator.js": "1ae32dc1a9755acad7ac574c929bbac5",
"js/parser/antlr4/atn/ATN.js": "37be87394e75d23fbebb52c5dc445296",
"js/parser/antlr4/atn/ATNType.js": "d8626326dfe7e991262fe84554b97422",
"js/parser/antlr4/atn/ATNDeserializationOptions.js": "785cce0c878fd443398455a3a7b57aa9",
"js/parser/antlr4/atn/ATNConfigSet.js": "83e71c64e79e2ec28e323e7873ecc386",
"js/parser/antlr4/atn/index.js": "eda82aee8ae4589c5861c8ed6197f4a1",
"js/parser/antlr4/atn/SemanticContext.js": "032a72846ff86bb3a6c9eb830215c82e",
"js/parser/antlr4/atn/ATNDeserializer.js": "58f26862ea90a550506502a83f790b6b",
"js/parser/antlr4/atn/ATNConfig.js": "7571f33dd261717b1a762e0ed158e272",
"js/parser/antlr4/atn/PredictionMode.js": "d5c33eabf4edc918e8395d1cd1bcc81c",
"js/parser/antlr4/atn/LexerActionExecutor.js": "d6780c42b8440eb5b0a393b3b7d0588c",
"js/parser/antlr4/atn/ATNState.js": "c7562e7c347207565fc52043ba0a6e27",
"js/parser/antlr4/atn/ParserATNSimulator.js": "8b24b226d167f8b7aa60c901bc3c7111",
"js/parser/antlr4/atn/LexerATNSimulator.js": "b710555aa89213a38893b99695627efe",
"js/parser/antlr4/atn/LexerAction.js": "3f2c864c778e02e27451634f7a355ff7",
"js/parser/antlr4/LL1Analyzer.js": "6d21a7320ef0a70072bc42f6328f8185",
"js/parser/antlr4/PredictionContext.js": "c60e79bd759c452659970196e76580ab",
"js/parser/antlr4/ParserRuleContext.js": "30d65e10134223f5a33fdbfc1a0cd996",
"js/parser/antlr4/Parser.js": "530a12a2dfda1ee670df8dbfad12f5b2",
"js/parser/antlr4/error/ErrorListener.js": "659609b0e82f026830fe39b4cf63bfbd",
"js/parser/antlr4/error/index.js": "49f2adc8f91644d208df3d02153f1d8f",
"js/parser/antlr4/error/Errors.js": "37bb387ecc076ead7119d3aba7ded305",
"js/parser/antlr4/error/DiagnosticErrorListener.js": "1dec0187d5199af6857effe584d54f74",
"js/parser/antlr4/error/ErrorStrategy.js": "f05ddd498eb27f6de8162436883a57f1",
"js/parser/antlr4/Lexer.js": "2724d1f478907441bce495a9b3e03459",
"js/parser/ObjC.tokens": "143b7adbb72dbea66f83a591144a9ced",
"js/TTPatchRuleConvert.js": "ddf6da0309fc11a7c70cb5bff39e5d9d",
"js/lib/require.js": "1b0967467cb1aec34e6296e25822aee1",
"js/lib/beautify.js": "69f0bced522dceef79c8a8e85cf4eb74",
"js/JPScriptProcessor.js": "b66643b239f259567b37ff3c732c4d6e",
"js/JPConvertor.js": "1a0a3c50b67d3fbb37dc5a382fc61699",
"main.dart.js": "0b71ad9f001f2331b97b76731a816dfb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "73974f27b05f20b4cb13d13177ec9f50",
"assets/LICENSE": "6890810fb972c9314f1c9b977f7ddb17",
"assets/js/JPContext.js": "34b2d7c7c6614674035aa323acb8ead9",
"assets/js/JPObjCListener.js": "b4bfd6df5abe4d89aaf85ced6cc43992",
"assets/js/JPErrorListener.js": "56d0d70521e207878742871a42dcb172",
"assets/js/TTPatchRuleConvert.js": "ddf6da0309fc11a7c70cb5bff39e5d9d",
"assets/js/lib/require.js": "1b0967467cb1aec34e6296e25822aee1",
"assets/js/lib/beautify.js": "5e4fc7174610cfc1252120ec91625693",
"assets/js/JPScriptProcessor.js": "b66643b239f259567b37ff3c732c4d6e",
"assets/js/JPConvertor.js": "1a0a3c50b67d3fbb37dc5a382fc61699",
"assets/AssetManifest.json": "acc408f5ae3d98c3ecc28ae572af5c2d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
