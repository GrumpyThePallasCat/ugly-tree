import MainScene from "./MainScene.js";

const config = {
    width: 800, 
    height: 600,
    backgroundColor: '#333333',
    type: Phaser.WEBGL,
    parent: 'ugly-tree',
    scene: [MainScene],
    scale: {
        zoom: 2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y:0},
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }

}

new Phaser.Game(config);