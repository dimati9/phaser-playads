window.onload = function () {
    $('canvas').css('margin', '0 auto');

    var game = new Phaser.Game(1390, 640, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
    var button;

    function preload() {
        game.load.image('background', 'images/background.png');
        game.load.image('old_stair', 'images/old_stair.png');
        game.load.image('button', 'images/button.png');
        game.load.image('logo', 'images/logo.png');
        game.load.image('Austin', 'images/Austin.png');
    }
    function create() {
        var x = game.width;
        var y = game.height;
        console.log(x);
        console.log(y);
        console.log(game.world.centerX)
        console.log(game.world.centerY)

        game.add.tileSprite(0, 0, 1390, 640, 'background');
        game.add.image(-100, -100, 'Austin');
        game.add.image(0, 0, 'old_stair');
        game.add.image(0, 0, 'old_stair');

        var logo = game.add.image(0, 0, 'logo');
        logo.alpha = 0.0;
        game.add.tween(logo).to( { alpha: 1 }, 2000, "Linear", true, 2000);

        this.button = game.add.sprite(0, 0, 'button');
        this.button.alpha = 0;

        game.add.tween(this.button).to( { alpha: 1 }, 100, "Linear", true, 2000);
        game.add.tween(this.button.scale).to({x: 1.0, y: 0.95}, 2400, Phaser.Easing.Bounce.Out, true, 0, 1000, true);
    }

    function update () {


    }

}

