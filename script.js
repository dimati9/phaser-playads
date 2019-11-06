window.onload = function () {
    $('canvas').css('margin', '0 auto');

    var game = new Phaser.Game(1390, 640, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
    var button;
    var old_stair;
    var new_stair_01;
    var new_stair_02;
    var new_stair_03;
    var hammer;
    var final;
    var choosed1;
    var choosed2;
    var choosed3;

    function preload() {

        // Подгружаем все изображения
        game.load.image('background', 'images/background.png');
        game.load.image('old_stair', 'images/old_stair.png');
        game.load.image('button', 'images/button.png');
        game.load.image('logo', 'images/logo.png');
        game.load.image('Austin', 'images/Austin.png');
        game.load.image('book_stand', 'images/book_stand.png');
        game.load.image('dec_1', 'images/dec_1.png');
        game.load.image('globe', 'images/globe.png');
        game.load.image('table', 'images/table.png');
        game.load.image('sofa', 'images/sofa.png');
        game.load.image('plant', 'images/plant.png');
        game.load.image('icon_hammer', 'images/icon_hammer.png');
        game.load.image('new_stair_01', 'images/new_stair_01.png');
        game.load.image('new_stair_02', 'images/new_stair_02.png');
        game.load.image('new_stair_03', 'images/new_stair_03.png');
        game.load.image('new_stair_03', 'images/new_stair_03.png');
        game.load.image('select', 'images/select.png');
        game.load.image('choosed', 'images/choosed.png');
        game.load.image('final', 'images/final.png');
        game.load.image('01', 'images/01.png');
        game.load.image('02', 'images/02.png');
        game.load.image('03', 'images/03.png');
        game.load.image('ok', 'images/ok.png');
    }

    function create() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var x = game.width;
        var y = game.height;

        // пол
        background = game.add.tileSprite(0, 0, x, y, 'background');

        // элементы декора
        book_stand = game.add.image(x / 1.5, 0, 'book_stand');
        game.add.image(-100, -100, 'Austin');

        globe = game.add.image(0, 0, 'globe');
        globe.y = 0 + globe.texture.height;

        game.add.image(x / 3, 0, 'plant');

        plant = game.add.image(-100, -100, 'plant');
        plant.x = x - plant.texture.width * 2.4;
        plant.y = y - y + plant.texture.height * 1.1;

        sofa = game.add.image(0, 0, 'sofa');
        sofa.y = y - sofa.texture.height;

        table = game.add.image(-100, -100, 'table');
        table.x = 0 + table.texture.width;
        table.y = y / 2;

        old_stair = game.add.image(0, 0, 'old_stair');


        // new stairs
        new_stair1 = game.add.image(0, 0, 'new_stair_01');
        new_stair1.alpha = 0
        new_stair2 = game.add.image(0, 0, 'new_stair_02');
        new_stair2.alpha = 0
        new_stair3 = game.add.image(0, 0, 'new_stair_03');
        new_stair3.alpha = 0

        // куст
        dec_1 = game.add.image(-100, -100, 'dec_1');
        dec_1.x = x - dec_1.texture.width / 1.5;
        dec_1.y = y - dec_1.texture.height;


        // hammer
        hammer = game.add.sprite(x - 300, 200, 'icon_hammer');
        hammer.alpha = 0.0;
        game.add.tween(hammer).to({alpha: 1}, 500, "Linear", true, 1700);
        game.add.tween(hammer.scale).to({x: 1.1, y: 1.1}, 500, "Linear", true, 0, 500, true);
        hammer.inputEnabled = true
        hammer.events.onInputDown.add(select, game);

        //final screen
        final = game.add.image(0, 0, 'final');
        final.alpha = 0;

        // logo + click + anim scale
        var logo = game.add.image(0, 0, 'logo');
        logo.scale.setTo(0.1);
        logo.alpha = 0.0;
        game.add.tween(logo.scale).to({x: 0.104, y: 0.104}, 2000, "Linear", true, 0, 500, true);
        logo.inputEnabled = true
        logo.events.onInputDown.add(function () {
            console.log('Logo')
        });
        game.add.tween(logo).to({alpha: 1}, 1000, "Linear", true, 1000);

        // button continue + anim + click
        button = game.add.sprite(0, 0, 'button');
        button.x = (x / 2) - (button.texture.width / 2);
        button.y = y - button.texture.height - 10;
        button.alpha = 0;
        button.inputEnabled = true
        button.events.onInputDown.add(function () {
            console.log('Click button continue')
        });
        game.add.tween(button).to({alpha: 1}, 500, "Linear", true, 500);
        game.add.tween(button.scale).to({x: 1.0, y: 1.05}, 500, "Linear", true, 0, 500, true);
        game.add.tween(button.position).to({y: button.position.y - 5}, 500, "Linear", true, 0, 1000, true);
    }

    // При нажатии на молоток
    function select() {
        x = hammer.x;
        // old_stair.alpha = 0.0;

        // элементы выбора
        var select1 = game.add.sprite(x - 140, 150, 'select');
        choosed1 = game.add.sprite(select1.position.x + 5, select1.position.y, 'choosed');
        choosed1.alpha = 0
        select1Image = game.add.sprite(select1.position.x + 30, select1.position.y - 30, '01');
        select1.inputEnabled = true
        select1.alpha = 0
        select1Image.alpha = 0
        select1.events.onInputDown.add(function () {
            sel(1, select1);
        });
        game.add.tween(select1).to({alpha: 1}, 500, "Linear", true, 500);
        game.add.tween(select1Image).to({alpha: 1}, 500, "Linear", true, 500);

        var select2 = game.add.sprite(x - 20, 100, 'select');
        choosed2 = game.add.sprite(select2.position.x + 5, select2.position.y, 'choosed');
        choosed2.alpha = 0
        select2Image = game.add.sprite(select2.position.x + 30, select2.position.y - 70, '02');
        select2.inputEnabled = true
        select2.alpha = 0
        select2Image.alpha = 0
        select2.events.onInputDown.add(function () {
            sel(2, select2);
        });
        game.add.tween(select2).to({alpha: 1}, 500, "Linear", true, 500);
        game.add.tween(select2Image).to({alpha: 1}, 500, "Linear", true, 500);

        var select3 = game.add.sprite(x + 100, 150, 'select');
        choosed3 = game.add.sprite(select3.position.x + 5, select3.position.y, 'choosed');
        choosed3.alpha = 0
        select3Image = game.add.sprite(select3.position.x + 30, select3.position.y - 45, '03');
        select3.inputEnabled = true
        select3.alpha = 0
        select3Image.alpha = 0
        select3.events.onInputDown.add(function () {
            sel(3, select3);
        });
        game.add.tween(select3).to({alpha: 1}, 500, "Linear", true, 500);
        game.add.tween(select3Image).to({alpha: 1}, 500, "Linear", true, 500);

        // прячем молоток
        hammer.alpha = 0;

        ButtonOK = game.add.button(0, 0, 'ok');
        ButtonOK.events.onInputDown.add(finish);
        ButtonOK.alpha = 0;

        // при нажатии на 1 из вариантов
        function sel(number, object) {
            // скрываем все варианты
            choosed1.alpha = 0;
            choosed2.alpha = 0;
            choosed3.alpha = 0;
            new_stair1.alpha = 0;
            new_stair2.alpha = 0;
            new_stair3.alpha = 0;

            // и показываем нужный
            if (number == 1) {
                choosed1.alpha = 1;
                game.add.tween(new_stair1).to({alpha: 1}, 700, "Linear", true, 0);
            } else if (number == 2) {
                choosed2.alpha = 2;
                game.add.tween(new_stair2).to({alpha: 1}, 700, "Linear", true, 0);
            } else if (number == 3) {
                game.add.tween(new_stair3).to({alpha: 1}, 700, "Linear", true, 0);
                choosed3.alpha = 3;
            }

            // показываем кнопку ОК
            ButtonOK.alpha = 1;
            ButtonOK.position.x = object.position.x - 20;
            ButtonOK.position.y = object.position.y + 100;
        }

        // если финиш, скрываем всё кроме кнопки, логотипа и финального баннера
        function finish() {
            select1.alpha = 0;
            select2.alpha = 0;
            select3.alpha = 0;
            choosed1.alpha = 0;
            choosed2.alpha = 0;
            choosed3.alpha = 0;
            select3Image.alpha = 0;
            select2Image.alpha = 0;
            select1Image.alpha = 0;
            ButtonOK.alpha = 0;
            hammer.alpha = 0;
            final.alpha = 1;
            console.clear();
            console.log('------------------------------------------');
            console.log('%c  Creating by Dmitriy M. for fun... \(^-^)/', 'background: #222; color: #bada55');
            console.log('------------------------------------------');
        }

    }

    // при каждом обновлении
    function update() {


    }

}

