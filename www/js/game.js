define([
    'quintus-all'
  ], function(
  ) {
    var Q = Quintus()
      .include("Sprites, Scenes, Input, 2D, Touch, UI")
      .setup({
        maximize: true
      })
      .controls()
      .touch();

      Q.load("peace.jpg",
        function() {
          console.log('loaded some assets!');
          Q.sheet("peace","peace.jpg", { tilew: 32, tileh: 32 });
          // Q.compileSheets("sprites.png","sprites.json");
          Q.stageScene("main");
        });

    return Q;
  })
