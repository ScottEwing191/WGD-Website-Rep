
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level_1
		const level_1 = this.add.tilemap("Level_1");
		level_1.addTilesetImage("Pencil_64");
		level_1.addTilesetImage("PencilTileset_256", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 960, 720, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// ground
		const ground = level_1.createLayer("Ground", ["PencilTileset_256"], -64, -64);
		ground.scaleX = 0.25;
		ground.scaleY = 0.25;

		// border_1
		const border_1 = level_1.createLayer("Border", ["PencilTileset_256"], -64, -64);
		border_1.scaleX = 0.25;
		border_1.scaleY = 0.25;

		// gameManager
		const gameManager = this.add.rectangle(1056, 64, 128, 128);
		gameManager.isFilled = true;

		// jumpPadUnmovable
		const jumpPadUnmovable = new JumpPadUnmovable(this, 480, 192);
		this.add.existing(jumpPadUnmovable);

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 384, 96);
		this.add.existing(jump_Pad);

		// spikePrefab
		const spikePrefab = new SpikePrefab(this, 32, 160);
		this.add.existing(spikePrefab);

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 640, 192, "platform_pencil_grass_2");
		this.add.existing(platformGrassSmall);

		// platformGrassSmall_1
		const platformGrassSmall_1 = new PlatformGrassSmall(this, 640, 96);
		this.add.existing(platformGrassSmall_1);

		// antiGravZonePrefab
		const antiGravZonePrefab = new AntiGravZonePrefab(this, 480, 448);
		this.add.existing(antiGravZonePrefab);

		// platformGrassBig_1
		const platformGrassBig_1 = new PlatformGrassBig(this, 352, 224);
		this.add.existing(platformGrassBig_1);

		// antiGravZonePrefab_1
		const antiGravZonePrefab_1 = new AntiGravZonePrefab(this, 352, 448);
		this.add.existing(antiGravZonePrefab_1);

		// antiGravZonePrefab_1_1
		const antiGravZonePrefab_1_1 = new AntiGravZonePrefab(this, 96, 448);
		this.add.existing(antiGravZonePrefab_1_1);

		// antiGravZonePrefab_1_3
		const antiGravZonePrefab_1_3 = new AntiGravZonePrefab(this, 224, 448);
		this.add.existing(antiGravZonePrefab_1_3);

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 768, 384);
		this.add.existing(antiGravZone1x2Prefab);

		// antiGravZone1x2Prefab_1
		const antiGravZone1x2Prefab_1 = new AntiGravZone1x2Prefab(this, 608, 384);
		this.add.existing(antiGravZone1x2Prefab_1);

		// circleNoBounceStatic
		const circleNoBounceStatic = new CircleNoBounceStatic(this, 160, 320);
		this.add.existing(circleNoBounceStatic);

		// circleBounceStatic
		const circleBounceStatic = new CircleBounceStatic(this, 224, 320);
		this.add.existing(circleBounceStatic);

		// circleNoBounce
		const circleNoBounce = new CircleNoBounce(this, 160, 256);
		this.add.existing(circleNoBounce);

		// circleBounce
		const circleBounce = new CircleBounce(this, 224, 256);
		this.add.existing(circleBounce);

		// levelEnd
		const levelEnd = new LevelEnd_P(this, 288, 135);
		this.add.existing(levelEnd);

		// player
		const player = new PlayerPrefab(this, 160, 96);
		this.add.existing(player);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// levelEnd (components)
		new CircleCollider(levelEnd);
		new LevelEnd(levelEnd);

		this.gameManager = gameManager;
		this.player = player;
		this.level_1 = level_1;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {PlayerPrefab} */
	player;
	/** @type {Array<any>} */
	movableObjects;
	/** @type {Array<any>} */
	jumpPads;
	/** @type {Array<any>} */
	spikes;

	/* START-USER-CODE */

	// Write your code here


	create() {
		this.editorCreate();
		this.matter.world.setBounds(16,16, 848, 762, 64,true, true, true, false);

		//this.collisionTest2_map.setCollisionByProperty({collider :true});
		//this.matter.world.convertTilemapLayer(this.collision_1_1);

		//this.scene.start("LevelTest");


	}

	nextLevel(){
		this.scene.start("LevelTest");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
