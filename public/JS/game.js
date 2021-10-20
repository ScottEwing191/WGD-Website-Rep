let config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaserGame',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        width: 960,
        height: 720
    },
    //width: 800,
    //height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

let game = new Phaser.Game(config);

function preload() {

    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create() {
    this.add.image(400, 300, 'sky');

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
        speed: 100,
        scale: {start: 1, end: 0},
        blendMode: 'Add'    // Try normal if doesnt work
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    /*const key = this.physics.add.image(50,50,'p-key');

    key.setVelocity(100,200);
    key.setBounce(0.1,0.1);
    key.setCollideWorldBounds(true);*/

    const circle = new Phaser.Geom.Triangle(500, 500, 100,500, 300,50);
    const graphics = this.add.graphics({
        fillStyle: {color: 0xff0000}        // red
    });
    graphics.fillTriangleShape(circle);





}


