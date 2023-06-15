const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var backgroundImg
var ground, platform
var bg_music
var logoImg, pigLaughingImg
var slingshotSound,birdSound
var score = 0
var gameState = "play"
var count = 5

function preload() {
  backgroundImg = loadImage("./assets/bg1.jpg");
  bg_music = loadSound("./assets/bg_music.mp3")
  logoImg = loadImage("./assets/logo.png")
  //slingshotSound = loadSound("./assets/")
  pigLaughingImg = loadImage("./assets/KingPigLaughing.png")
  slingshotSound = loadSound("./assets/slingshotpull.mp3")
  birdSound = loadSound("./assets/slingshot.mp3")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //bg_music.loop()

  ground = new Ground(width / 2, height - 60, width, 100)
  platform = new Ground(200, height - 230, 400, 300)


  bird = new Bird(250, height - 400, 70, 70)
  wood_box1 = new WoodBox(width / 2 + 30, height - 95, 70, 70)
  pig1 = new Pig(width / 2 + 200, height - 95, 70, 70)
  wood_box2 = new WoodBox(width / 2 + 370, height - 95, 70, 70)
  wood1 = new Wood(width / 2 + 200, height - 130, 450, 30)
  wood_box3 = new WoodBox(width / 2 + 30, height - 165, 70, 70)
  kingpig = new PigKing(width / 2 + 200, height - 165, 70, 70)
  wood_box4 = new WoodBox(width / 2 + 370, height - 165, 70, 70)
  wood2 = new Wood(width / 2 + 200, height - 200, 450, 30)
  wood_box5 = new WoodBox(width / 2 + 30, height - 235, 70, 70)
  wood3 = new Wood(width / 2 + 200, height - 270, 450, 30)
  pig3 = new Pig(width / 2 + 200, height - 235, 70, 70)
  wood_box6 = new WoodBox(width / 2 + 370, height - 235, 70, 70)
  pig2 = new Pig(width / 2 + 200, height - 305, 70, 70)

  slingshot = new Slingshot(bird.body, { x: 300, y: height - 500 })


}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  image(logoImg, width / 2 - 250, 0, 500, 150)
  textSize(30)
  text("Score: " + score, width - 200, 70)
  fill("red")
  text("Lives: " + count, width - 200, 120)

  if (!bg_music.isPlaying()) {
    bg_music.play()
    bg_music.setVolume(0.4)
  }


  Engine.update(engine);

  if (score == 1000) {
    gameState = "end"
    bird = null
    gameOver("You beat the pigs!","Thanks for playing!","https://m-cdn.phonearena.com/images/article/139383-wide-two_940/Original-Angry-Birds-game-is-back-in-the-App-Store-and-Google-Play-Store")
  }
  else if (count == 0) {
    gameState = "end"
    gameOver("You lose!","You lost all of your lives!","https://img.itch.zone/aW1nLzcwNjU5MzgucG5n/315x250%23c/DsOXnH.png")
  }

  if (gameState == "play") {
    bird.display()
    pig1.score()
    pig2.score()
    pig3.score()
    kingpig.score()
  }

  platform.display()
  pig1.display()
  wood1.display()
  wood_box1.display()
  wood_box2.display()
  pig2.display()
  wood2.display()
  wood_box3.display()
  wood_box4.display()
  pig3.display()
  wood3.display()
  wood_box5.display()
  wood_box6.display()
  slingshot.display()
  kingpig.display()

}

function mouseDragged() {
  Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
  //slingshotSound.play()
  //slingshotSound.setVolume(0.4)
}

function mouseReleased() {
  count = count - 1
  slingshot.break()
  birdSound.play()
}

function keyPressed() {
  if (keyCode == 32) {
    Matter.Body.setPosition(bird.body, { x: 250, y: height - 400 })
    slingshot.attach(bird)
  }

}

function gameOver(title,text,image) {
  swal({
    title: title,
    text: text,
    imageUrl:image ,
    imageSize: "300x300",
    confrimButtonText: "Play Again?"
  },
    function (isConfirm) {
      if (isConfirm) {
        location.reload()
      }
    }
  )
}
