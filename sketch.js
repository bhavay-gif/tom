var bgImg
var cat
var mouse
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg4 = loadAnimation ("images/cat4.png")
    mouseimg4 = loadAnimation ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,400,20,20)
    cat.addAnimation("cat1",catimg)
    cat.scale=0.2
mouse=createSprite(300,400,20,20)   
mouse.addAnimation("mouse1",mouseimg1) 
mouse.scale=0.2


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.x=400
        cat.addAnimation("catstop",catimg4)

        cat.changeAnimation("catstop")

        cat.scale=0.15

        mouse.addAnimation("mousestop",mouseimg4)

        mouse.changeAnimation("mousestop")

        mouse.scale=0.18
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode==LEFT_ARROW){
        cat.velocityX=-5
        cat.addAnimation("catwalk",catimg2)

        cat.changeAnimation("catwalk")

        mouse.addAnimation("mouse2",mouseimg2)

        mouse.changeAnimation("mouse2")

    }
  //For moving and changing animation write code here


}
