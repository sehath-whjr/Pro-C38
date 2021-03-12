var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Pic, car2Pic, car3Pic, car4Pic, trackPic, track2Pic, groundPic;

function preload(){
  car1Pic = loadImage('../images/car1.png');
  car2Pic = loadImage('../images/car2.png');
  car3Pic = loadImage('../images/car3.png');
  car4Pic = loadImage('../images/car4.png');
  groundPic = loadImage('../images/ground.png');
  trackPic = loadImage('../images/track.jpg');
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
