define([
    'require-promise!game'
  ], function(
    Q
  ){

    Q.animations('introVideo', {
      necromant: {
        frames: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 24, 24, 24, 24, 24, 25, 26, 27, 28, 29,
          30, 31, 32, 33, 34, 35, 36, 37, 37, 37, 37, 38, 38, 38, 38
        ], trigger: 'introDone', rate: 0.1, loop: false
      }
    });

    Q.Sprite.extend("IntroVideo", {
      init: function(p) {
        this._super(p, {
          sprite: 'introVideo',
          sheet: 'intro'
        });
        this.add('animation');
        this.play('necromant');

        this.on('introDone');
      },

      introDone: function() {
        Q.stageScene('start');
      }
    });

    return Q.IntroVideo;
});
