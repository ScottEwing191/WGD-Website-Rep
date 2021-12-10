
// You can write more code here

/* START OF COMPILED CODE */

class Player extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Player"] = this;

		/* START-USER-CTR-CODE */
		this.gravZoneCount = 0;
		/* END-USER-CTR-CODE */
	}

	/** @returns {Player} */
	static getComponent(gameObject) {
		return gameObject["__Player"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {number} */
	xVelocity = 0;
	/** @type {number} */
	yVelocity = 0;

	/* START-USER-CODE */



	start(){
		this.startPosition = this.gameObject.getCenter();
		this.startAngle = this.gameObject.angle;
		this.editModeEntered();
		this.gameObject.on(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'ball-pop', () =>{
			this.playerDeathAnimComplete();
		});
	}

	update(){

		//let matterPhysics = new Phaser.Physics.Matter.MatterPhysics(this.scene);
		//let bodiesArray = [this.gameObject.body];
		//matterPhysics.setAngularVelocity(bodiesArray, 0)

	}

	playModeEntered(){
		this.gravZoneCount = 0;				// reset the grave zone count. If player is in gravity zone when Play Mode start then that gravity zone will be ignored
		this.gameObject.setStatic(false);
		//this.gameObject.body.setVelocity(this.xVelocity, this.yVelocity);
		this.gameObject.setVelocity(this.xVelocity, -this.yVelocity);
	}

	editModeEntered(){
		this.gameObject.setVelocity(0,0);
		if (this.gameObject.body.isStatic === false){
			this.gameObject.setStatic(true);
		}


		this.gameObject.setIgnoreGravity(false);    // make sure gravity is on after being turned off in player death method. Ball still won't move just now since isStatic = true
		this.gameObject.x = this.startPosition.x;
		this.gameObject.y = this.startPosition.y;
		this.gameObject.angle = this.startAngle;
		this.gameObject.setFrictionAir(0.01);
	}

	playerDeath(){
		this.gameObject.setStatic(true);			// stop ball from moving when colliding with spikes
		this.gameObject.setIgnoreGravity(true);    	// isStatic is about to be set to true to fix a bug. So this will make is so the ball will not start falling if the spikes are on a wall
		this.scene.sound.play("paper_rip");
		this.gameObject.play('ball-pop');
		this.gameObject.setStatic(false);			// this line seams to fix the bug where the ball disappears when colliding with a wal after being killed by a spike
	}
	playerDeathAnimComplete(){
		GameManager.getComponent(this.scene.gameManager).levelFailed();
		this.gameObject.play('ball-reform');
	}

	levelWon(xValue, yValue){
		this.gameObject.setVelocity(0, 0);
		this.gameObject.setIgnoreGravity(true);
		this.gameObject.play('ball-shrink');

		this.scene.tweens.add({
			targets: this.gameObject,
			x: xValue,
			y: yValue,
			duration: 666
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
