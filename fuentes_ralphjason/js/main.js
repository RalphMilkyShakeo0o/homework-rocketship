//the getting started guide can be found here: https://github.com/photonstorm/phaser/tree/master/resources/tutorials

//get window size using jquery
//var winh = $(window).height()-100;
//var winw = $(window).width()-300;

//call the main function when the browser starts
window.onload = function() {
    //initialize game
    var game = new Phaser.Game(1000, 650, Phaser.AUTO, '', { preload: preload, create: create, update: update});

   
    //pre-define game assets and settings
    function preload () {
        game.load.image('rocket', 'assets/rocket2.png');
        //game.stage.backgroundColor = '#fff';
        game.load.image('bg', 'assets/space.jpg');
    }
     var rocketsprite;

    //call game assets and set its properties
    function create () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.tileSprite(0, 0, 1000, 650, 'bg');
        rocketsprite = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocketsprite.anchor.setTo(0.5, 0.5);
        rocketsprite.scale.setTo(0.5,0.5);

        game.physics.enable(rocketsprite, Phaser.Physics.ARCADE);
        //rocketsprite.body.allowRotation = false;
        
        rocketsprite.body.collideWorldBounds = true;
        rocketsprite.body.bounce.y = 0.8;
        rocketsprite.body.allowGravity = false;
        
    }

    function update() {
//         rocketsprite.rotation = game.physics.arcade.moveToPointer(rocketsprite, 60, game.input.activePointer, 500);
    
    rocketsprite.body.velocity.x = 40;
    rocketsprite.body.velocity.y = 40;
    rocketsprite.body.angularVelocity = 0;

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        rocketsprite.body.angularVelocity = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        rocketsprite.body.angularVelocity = 200;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        game.physics.arcade.velocityFromAngle(rocketsprite.angle, 300, rocketsprite.body.velocity);
    }
    }

};
