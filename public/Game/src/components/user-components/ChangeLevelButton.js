
// You can write more code here

/* START OF COMPILED CODE */

class ChangeLevelButton extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ChangeLevelButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ChangeLevelButton} */
	static getComponent(gameObject) {
		return gameObject["__ChangeLevelButton"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	changeAnimation = "yellow";
	/** @type {string} */
	levelName = "MainMenu";

	/* START-USER-CODE */

	start(){
		this.gameObject.setInteractive({draggable: true});
		this.gameObject.on('dragstart', function (pointer, dragX, dragY) {
			if (this.changeAnimation != ""){
				this.gameObject.play(this.changeAnimation);
			}
		}, this);

		this.gameObject.on('dragend', function (pointer, dragX, dragY, dropped) {
			this.scene.sound.play("button_press");
			//this.scene.nextLevel(this.levelName);
			this.scene.time.addEvent({
				delay: 500,
				callback: ()=>{
					this.scene.nextLevel(this.levelName);
				}
			})
		}, this);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
