window.addEventListener('load', function () {

    const game = new Phaser.Game({
        width: 1024,
        height: 832,
        type: Phaser.AUTO,
        backgroundColor: "#242424",
        scale: {
            parent: 'phaserGame',
            mode: Phaser.Scale.FIT,
            //autoCenter: Phaser.Scale.CENTER_BOTH
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        },
        physics: {
             default: 'matter',
            matter: {
                //debug: true,
                gravity: {y: 0.5},
            }
        },
    });

    game.scene.add("Preload", Preload);
    game.scene.add("MainMenu", MainMenu);
    game.scene.add("LevelSelect", LevelSelect);
    game.scene.add("Level01", Level01);
    game.scene.add("Level02", Level02);
    game.scene.add("Level03", Level03);
    game.scene.add("Level04", Level04);
    game.scene.add("Level05", Level05);
    game.scene.add("Level06", Level06);
    //game.scene.add("Level", Level);
    //game.scene.add("Level1", Level1);
    //game.scene.add("LevelTest", LevelTest);
    game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");

        this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
    }
}