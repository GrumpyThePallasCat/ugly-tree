export default class MainScene extends Phaser.Scene {
    constructor(){
         super("MainScene");
    }

    preload(){
        console.log("preload");
        this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('sky', 'assets/skies/spooky.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/leaf1.png');
    }

    create(){
        console.log("create");
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);
        this.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })

        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 50,
            scale: { start: .1, end: .12 },
            blendMode: 'add'            
        });     

        emitter.startFollow(this.player);
        emitter.length = 1000;
    }

    update(){
        console.log("update");
        const speed = 4.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown) {
            playerVelocity.x = -1;
        } 
        if (this.inputKeys.right.isDown) {
            playerVelocity.x = 1;
        }
        if(this.inputKeys.up.isDown) {
            playerVelocity.y = -1;
        }
        if (this.inputKeys.down.isDown) {
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.player.setVelocity(playerVelocity.x, playerVelocity.y);

    }
}