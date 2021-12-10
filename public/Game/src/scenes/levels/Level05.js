
// You can write more code here

/* START OF COMPILED CODE */

class Level05 extends Phaser.Scene {

	constructor() {
		super("Level05");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level05
		const level05 = this.add.tilemap("Level05");
		level05.addTilesetImage("Crayon_Tileset", "Crayon_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 16, 1032, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// gameManager
		const gameManager = this.add.rectangle(1104, 80, 128, 128);
		gameManager.isFilled = true;

		// antiGrav_Layer
		const antiGrav_Layer = this.add.layer();

		// antiGravZonePrefab_1
		const antiGravZonePrefab_1 = new AntiGravZonePrefab(this, 96, 224);
		antiGrav_Layer.add(antiGravZonePrefab_1);

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 96, 672);
		antiGrav_Layer.add(antiGravZone1x2Prefab);

		// antiGravZone1x2Prefab_1
		const antiGravZone1x2Prefab_1 = new AntiGravZone1x2Prefab(this, 96, 416);
		antiGrav_Layer.add(antiGravZone1x2Prefab_1);

		// ground_1
		const ground_1 = level05.createLayer("Ground", ["Crayon_Tileset"], 0, 0);
		ground_1.scaleX = 0.25;
		ground_1.scaleY = 0.25;

		// platform_Layer
		const platform_Layer = this.add.layer();

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 96, 416, "Pencil_ice_2_crop");
		platform_Layer.add(platformGrassSmall);

		// platformGrassSmall_1
		const platformGrassSmall_1 = new PlatformGrassSmall(this, 224, 96, "Pencil_ice_2_crop");
		platform_Layer.add(platformGrassSmall_1);

		// platformGrassSmall_2
		const platformGrassSmall_2 = new PlatformGrassSmall(this, 96, 256, "Pencil_ice_2_crop");
		platform_Layer.add(platformGrassSmall_2);

		// platformGrassBig
		const platformGrassBig = new PlatformGrassBig(this, 256, 192, "Pencil_ice_3_crop");
		platform_Layer.add(platformGrassBig);

		// circle_Layer
		const circle_Layer = this.add.layer();

		// circleNoBounce_5
		const circleNoBounce_5 = new CircleNoBounce(this, 96, 480);
		circle_Layer.add(circleNoBounce_5);

		// circleNoBounce_3
		const circleNoBounce_3 = new CircleNoBounce(this, 96, 608);
		circle_Layer.add(circleNoBounce_3);

		// circleNoBounce
		const circleNoBounce = new CircleNoBounce(this, 96, 736);
		circle_Layer.add(circleNoBounce);

		// circleNoBounce_1
		const circleNoBounce_1 = new CircleNoBounce(this, 96, 672);
		circle_Layer.add(circleNoBounce_1);

		// spikes_Layer
		const spikes_Layer = this.add.layer();

		// spike1Left
		const spike1Left = new Spike1Left(this, 32, 480, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left);

		// spike1Left_1
		const spike1Left_1 = new Spike1Left(this, 32, 544, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left_1);

		// spike1Left_2
		const spike1Left_2 = new Spike1Left(this, 32, 608, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left_2);

		// spike1Right
		const spike1Right = new Spike1Right(this, 160, 480, "Spikes_Crayon", 9);
		spikes_Layer.add(spike1Right);

		// spike1Right_2
		const spike1Right_2 = new Spike1Right(this, 160, 608, "Spikes_Crayon", 9);
		spikes_Layer.add(spike1Right_2);

		// spike1Right_1
		const spike1Right_1 = new Spike1Right(this, 160, 544, "Spikes_Crayon", 9);
		spikes_Layer.add(spike1Right_1);

		// spikePrefab
		const spikePrefab = new SpikePrefab(this, 928, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab);

		// spikePrefab_1
		const spikePrefab_1 = new SpikePrefab(this, 864, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab_1);

		// spikePrefab_2
		const spikePrefab_2 = new SpikePrefab(this, 800, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab_2);

		// spikePrefab_3
		const spikePrefab_3 = new SpikePrefab(this, 736, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab_3);

		// spikePrefab_4
		const spikePrefab_4 = new SpikePrefab(this, 672, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab_4);

		// spikePrefab_5
		const spikePrefab_5 = new SpikePrefab(this, 608, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab_5);

		// spikePrefab_6
		const spikePrefab_6 = new SpikePrefab(this, 544, 800, "Spikes_Crayon", 10);
		spikes_Layer.add(spikePrefab_6);

		// spike1Left_3
		const spike1Left_3 = new Spike1Left(this, 800, 608, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left_3);

		// spike1Right_1_1
		const spike1Right_1_1 = new Spike1Right(this, 928, 608, "Spikes_Crayon", 9);
		spikes_Layer.add(spike1Right_1_1);

		// spike1Left_3_1
		const spike1Left_3_1 = new Spike1Left(this, 416, 480, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left_3_1);

		// spike1Left_3_2
		const spike1Left_3_2 = new Spike1Left(this, 416, 544, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left_3_2);

		// spike1Left_3_3
		const spike1Left_3_3 = new Spike1Left(this, 416, 608, "Spikes_Crayon", 11);
		spikes_Layer.add(spike1Left_3_3);

		// spike1Up
		const spike1Up = new Spike1Up(this, 736, 672, "Spikes_Crayon", 8);
		spikes_Layer.add(spike1Up);

		// spike1Up_1
		const spike1Up_1 = new Spike1Up(this, 672, 672, "Spikes_Crayon", 8);
		spikes_Layer.add(spike1Up_1);

		// jumpPads_Layer
		const jumpPads_Layer = this.add.layer();

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 320, 128);
		jumpPads_Layer.add(jump_Pad);

		// jump_Pad_1
		const jump_Pad_1 = new Jump_Pad(this, 192, 128);
		jumpPads_Layer.add(jump_Pad_1);

		// jump_Pad_2
		const jump_Pad_2 = new Jump_Pad(this, 192, 32);
		jumpPads_Layer.add(jump_Pad_2);

		// jump_Pad_3
		const jump_Pad_3 = new Jump_Pad(this, 256, 128);
		jumpPads_Layer.add(jump_Pad_3);

		// player
		const player = new PlayerPrefab(this, 816, 144);
		this.add.existing(player);

		// levelEnd_P
		const levelEnd_P = new LevelEnd_P(this, 192, 736);
		this.add.existing(levelEnd_P);

		// levelCompletePanel_P
		const levelCompletePanel_P = new LevelCompletePanel_P(this, 0, 0);
		this.add.existing(levelCompletePanel_P);

		// attemptsPanel_P
		const attemptsPanel_P = new AttemptsPanel_P(this, 352, 800);
		this.add.existing(attemptsPanel_P);

		// coin_empty_place
		const coin_empty_place = this.add.image(352, 736, "coin empty place");
		coin_empty_place.scaleX = 0.2;
		coin_empty_place.scaleY = 0.2;

		// coin_P
		const coin_P = new Coin_P(this, 544, 96);
		this.add.existing(coin_P);

		// MainMenuButton
		const mainMenuButton = this.add.sprite(32, 32, "btn_icon_home_1");

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// levelCompletePanel_P.replayButton (components)
		const levelCompletePanel_P_replayButtonChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.replayButton);
		levelCompletePanel_P_replayButtonChangeLevelButton.levelName = "Level05";

		// levelCompletePanel_P.nextLevel (components)
		const levelCompletePanel_P_nextLevelChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.nextLevel);
		levelCompletePanel_P_nextLevelChangeLevelButton.levelName = "MainMenu";

		// coin_P (components)
		const coin_PCoinCollectable = CoinCollectable.getComponent(coin_P);
		coin_PCoinCollectable.moveToX = 352;
		coin_PCoinCollectable.moveToY = 736;

		// mainMenuButton (components)
		const mainMenuButtonChangeLevelButton = new ChangeLevelButton(mainMenuButton);
		mainMenuButtonChangeLevelButton.changeAnimation = "";

		this.gameManager = gameManager;
		this.ground_1 = ground_1;
		this.player = player;
		this.levelCompletePanel_P = levelCompletePanel_P;
		this.attemptsPanel_P = attemptsPanel_P;
		this.coin_P = coin_P;
		this.level05 = level05;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	ground_1;
	/** @type {PlayerPrefab} */
	player;
	/** @type {LevelCompletePanel_P} */
	levelCompletePanel_P;
	/** @type {AttemptsPanel_P} */
	attemptsPanel_P;
	/** @type {Coin_P} */
	coin_P;
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

		//--Add collision to the Tile Layer
		this.level05.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.ground_1);

		this.sound.play("book_Page_Turn");					// play paper sound on scene start
	}

	nextLevel(levelName){
		if (levelName == undefined){
			levelName = 'MainMenu';
		}
		this.scene.start(levelName);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
