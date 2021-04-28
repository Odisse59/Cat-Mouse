var garden, gardenIMG;

var cat, catIMG1, catIMG2, mouse, mouseIMG1, mouseIMG2;

function preload() {
    //load the images here

    gardenIMG = loadImage("images/garden.png");
    catIMG1 = loadImage("images/cat1.png");
    catIMG2 = loadImage("images/cat2.png");
    catIMG3 = loadImage("images/cat4.png");
    mouseIMG1 = loadImage("images/mouse1.png");
    mouseIMG2 = loadImage("images/mouse2.png");
    mouseIMG3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  mouse = createSprite(200,600);
mouse.addImage("mouse",mouseIMG1);
mouse.scale = 0.15

 cat = createSprite(870,600);
 cat.addImage("cat",catIMG1);
 cat.scale = 0.2
}

function draw() {

    background(gardenIMG);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0
    cat.addAnimation("cat4",catIMG3);
    cat.x = 300
    cat.scale = 0.2
    cat.changeAnimation("cat4")
    mouse.addAnimation("mouse4",mouseIMG3)
    mouse.scale = 0.15
    mouse.changeAnimation("mouse4")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("cat",catIMG2);
    cat.changeAnimation("cat");
    mouse.addAnimation("mouse",mouseIMG2);
    mouse.changeAnimation("mouse");
}

}
