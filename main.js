function preload() {
	world_start = loadSound("world_start.wav");
	mariogameover = loadSound("gameover.wav");
	kick = loadSound("kick.wav");
	coincollect = loadSound("coin.wav");
	jump2 = loadSound("jump.wav");
	die_1 = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
}
  
  function gotPoses(results)
 {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log("noseX = " + noseX +", noseY = " + noseY);
	  console.log(results);
	}
}

function draw() {
	game()
}






