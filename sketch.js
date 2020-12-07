var thief,thiefImage,thiefImage2,thiefImage3,thiefImage4;
var back;
var ropeImage,rope;
var ground;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13;
var line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,line26;
var line27,line28,line29,line30,line31,line32,line33,line34,line35,line36,line37,line38,line39;
var line40,line42,line43,line44,line45,line46,line47,line48,line49,line50,line51,line52,line53;
var line54,line55,line56,line57,line58,line59,line60;
var diamond,diamondImage;
var win,winImage;
var coin1,coin2,coin3,coin4,coinImage;

function preload(){
thiefImage=loadImage("images/thief 2.png");
thiefImage2=loadImage("images/thief 1.png");
thiefImage3=loadImage("images/thief 3.png");
thiefImage4=loadImage("images/thief 4.png");
back=loadImage("images/j.png");
ropeImage=loadImage("images/rop.png");
diamondImage=loadImage("images/diamond.png");
winImage=loadImage("images/win.png");
coinImage=loadImage("images/coin.png");
}


function setup() {
  createCanvas(500,500);
  rope=createSprite(18,19);
  rope.addImage(ropeImage);

  thief=createSprite(15,-99);
  thief.addImage(thiefImage4); 
  thief.scale=0.5;
  thief.velocityY=+3;
  
  diamond=createSprite(210,34);
  diamond.addImage(diamondImage);
  diamond.scale=0.1;
  
  coin1=createSprite(415,385);
  coin1.addImage(coinImage);
  coin1.scale=0.15;

line1=createSprite(120, 50, 134, 5);
line2=createSprite(190, 82, 5, 70);
line3=createSprite(112, 90, 70, 5);
line4=createSprite(150, 127, 5, 80);
line5=createSprite(50, 87, 5, 80);
line6=createSprite(65, 130, 35, 5);
line7=createSprite(83, 150, 5, 45);
line8=createSprite(174, 169, 110, 5);
line9=createSprite(231, 67, 5, 30);
line10=createSprite(228, 185, 5, 123);
line11=createSprite(270,109, 5, 120);
line12=createSprite(102, 210, 110, 5);
line13=createSprite(211, 247, 120, 5);
line14=createSprite(119, 251, 5, 80);
line15=createSprite(119, 330, 80, 5);
line16=createSprite(76, 300, 5, 66);
line17=createSprite(159, 310, 5, 45);
line18=createSprite(194, 290, 70,5);
line19=createSprite(268, 287, 5, 85);
line20=createSprite(232, 326, 70,5);
line21=createSprite(200, 360,5, 90);
line22=createSprite(50, 207, 5, 325);
line23=createSprite(75, 357, 50,5);
line24=createSprite(172, 367, 50,5);
line25=createSprite(120, 410, 80,5);
line26=createSprite(80, 429,5, 43);
line27=createSprite(219, 403, 40,5);
line28=createSprite(448,308,5,45);
line29=createSprite(309, 290, 76,5);
line30=createSprite(348, 253, 5, 80);
line31=createSprite(328, 210, 100,5);
line32=createSprite(338, 210, 158, 5);
line33=createSprite(304, 237,5, 50);
line34=createSprite(275, 367,70,5);
line35=createSprite(275, 405, 5, 80);
line36=createSprite(307, 356,5,50);
line37=createSprite(382, 327, 70,5);
line38=createSprite(348, 349, 5, 50);
line39=createSprite(310, 427,5, 40);
line40=createSprite(335, 405,50,5);
line41=createSprite(392, 390,5,40);
line42=createSprite(419, 367,59,5);
line43=createSprite(410, 407, 40,5);
line44=createSprite(421, 289, 55,5);
line45=createSprite(358, 167, 45,5);
line46=createSprite(292,166,50,5);
line47=createSprite(391, 286,5, 90);
line48=createSprite(420, 232,5, 50);
line49=createSprite(385, 170,5, 90);
line50=createSprite(433, 170, 30,5);
line51=createSprite(310, 105,5, 50);
line52=createSprite(350, 70, 5, 50);
line53=createSprite(347, 130, 80,5);
line54=createSprite(398, 90, 40,5);
line55=createSprite(420, 146, 5, 50);
line56=createSprite(135,247, 20, 5);
line57=createSprite(450, 169, 5, 244);
line58=createSprite(448, 389, 5, 120);
line59=createSprite(251, 449, 400,5);
line60=createSprite(340, 50, 224,5);  
ground=createSprite(28,450,190,10);

win=createSprite(223,223);
win.visible=false;

}

function draw() {
  background(back);  
  console.log(mouseX,mouseY);
 
  ground.shapeColor="orange";
  line1.shapeColor="green";  
  line2.shapeColor="green";
  line3.shapeColor="green";
  line4.shapeColor="green"; 
  line5.shapeColor="green"; 
  line6.shapeColor="green"; 
  line7.shapeColor="green"; 
  line8.shapeColor="green"; 
  line9.shapeColor="green";
  line10.shapeColor="green"; 
  line11.shapeColor="green"; 
  line12.shapeColor="green";  
  line13.shapeColor="green"; 
  line14.shapeColor="green"; 
  line15.shapeColor="green";  
  line16.shapeColor="green"; 
  line17.shapeColor="green";
  line18.shapeColor="green";
  line19.shapeColor="green"; 
  line20.shapeColor="green";
  line21.shapeColor="green"; 
  line22.shapeColor="green";
  line23.shapeColor="green";  
  line24.shapeColor="green";  
  line25.shapeColor="green";  
  line26.shapeColor="green";  
  line27.shapeColor="green";  
  line28.shapeColor="green";  
  line29.shapeColor="green";  
  line30.shapeColor="green";  
  line31.shapeColor="green";  
  line32.shapeColor="green";  
  line33.shapeColor="green";  
  line34.shapeColor="green";  
  line35.shapeColor="green";  
  line36.shapeColor="green";  
  line37.shapeColor="green";  
  line38.shapeColor="green";  
  line39.shapeColor="green";  
  line40.shapeColor="green";  
  line41.shapeColor="green";  
  line42.shapeColor="green";  
  line43.shapeColor="green";  
  line44.shapeColor="green";  
  line45.shapeColor="green";  
  line46.shapeColor="green";  
  line47.shapeColor="green";  
  line48.shapeColor="green";  
  line49.shapeColor="green";  
  line50.shapeColor="green";  
  line51.shapeColor="green";  
  line52.shapeColor="green";  
  line53.shapeColor="green";  
  line54.shapeColor="green";  
  line55.shapeColor="green";  
  line56.shapeColor="green";  
  line57.shapeColor="green";  
  line58.shapeColor="green";  
  line59.shapeColor="green";  
  line60.shapeColor="green";  
  
  thief.collide(ground);
  thief.collide(line1);
  thief.collide(line2);
  thief.collide(line3);
  thief.collide(line4);
  thief.collide(line5);
  thief.collide(line6);
  thief.collide(line7);
  thief.collide(line8);
  thief.collide(line9);
  thief.collide(line10);
  thief.collide(line11);
  thief.collide(line12);
  thief.collide(line13);
  thief.collide(line14);
  thief.collide(line15);
  thief.collide(line16);
  thief.collide(line17);
  thief.collide(line18);
  thief.collide(line19);
  thief.collide(line20);
  thief.collide(line21);
  thief.collide(line22);
  thief.collide(line23);
  thief.collide(line24);
  thief.collide(line25);
  thief.collide(line26);
  thief.collide(line27);
  thief.collide(line28);
  thief.collide(line29);
  thief.collide(line30);
  thief.collide(line31);
  thief.collide(line32);
  thief.collide(line33);
  thief.collide(line34);
  thief.collide(line35);
  thief.collide(line36);
  thief.collide(line37);
  thief.collide(line38);
  thief.collide(line39);
  thief.collide(line40);
  thief.collide(line41);
  thief.collide(line42);
  thief.collide(line43);
  thief.collide(line44);
  thief.collide(line45);
  thief.collide(line46);
  thief.collide(line47);
  thief.collide(line48);
  thief.collide(line49);
  thief.collide(line50);
  thief.collide(line51);
  thief.collide(line52);
  thief.collide(line53);
  thief.collide(line54);
  thief.collide(line55);
  thief.collide(line56);
  thief.collide(line57);
  thief.collide(line58);
  thief.collide(line59);
  thief.collide(line60);

  if(keyDown("up_arrow")){
    thief.y=thief.y-2;
    thief.addImage(thiefImage3); 
    thief.scale=0.2;
    }

  if(keyDown("down_arrow")){
    thief.y=thief.y+2;
    thief.addImage(thiefImage4); 
    thief.scale=0.2;
    }

  if(keyDown("left_arrow")){
    thief.x=thief.x-2;
    thief.addImage(thiefImage); 
    thief.scale=0.3;
    }

  if(keyDown("right_arrow")){
   thief.x=thief.x+2; 
   thief.addImage(thiefImage2); 
   thief.scale=0.3;
   }
  
  // thief.debug=true;
  thief.setCollider("rectangle",0,0,90,100);

  if(thief.isTouching(diamond)){
  win.addImage(winImage);
  win.visible=true;
  thief.scale=0.5;
  }

  drawSprites();
}