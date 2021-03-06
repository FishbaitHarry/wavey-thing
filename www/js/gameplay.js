define([
    'require-promise!game',
    'mediator',
    'scenes/start'
  ], function(
    Q,
    mediator
  ) {
    function startGame() {

      mediator.on('spell:cast', function(spell) {
        Q('Player').first().castSpell(spell);
      });

      Q.stageScene('start');
    }

    return {
      startGame: startGame
    };
  })
