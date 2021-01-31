var canvas, edges;
var music;
var surface1, surface2, surface3, surface4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(85, 570, 200, 40);
    surface1.shapeColor = "red";
    surface2 = createSprite(295, 570, 200, 40);
    surface2.shapeColor = "green";
    surface3 = createSprite(505, 570, 200, 40);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(715, 570, 200, 40);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(random(20,750), 200, 40, 40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 6;
}

function draw() {
    
    background(rgb(169,169,169));
    

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1))
    {
        box.shapeColor = "red";
        music.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2))
    {
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3))
    {
        box.shapeColor = "yellow";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4))
    {
        box.shapeColor = "blue";
    }    
    
    drawSprites();
    //create edgeSprite
    edges = createEdgeSprites();
    box. bounceOff(edges);
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
}
