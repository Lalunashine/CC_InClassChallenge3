//Shiffman https://www.youtube.com/watch?v=cXgA1d_E-jY
var bird;
var bars = [];
var score = 30;
var hitFlag = false;
var count;
var startTime;
var bullets = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  bars.push(new Block());
  startTime = second();
  console.log(startTime);
}

function draw() {
  background(0);
  
  textSize(32);
  fill(255);
  text(score, 200, 100);
  
  if (score <= 0) {
    fill(255, 0, 0);
    text("you lose", 200, 300);
    noLoop();
  }
  
  var s = second();
  console.log(s);
  if (s - startTime >= 5){
    console.log("5 sec has passed");
    BossComing();
  }
  
  if (hitFlag) {
    count ++;
  } 
  if ((hitFlag) && (count >= 30)){
    hitFlag = false;
    count = 0;
  }
  

  for (var i = bars.length - 1; i >= 0; i--) {
    bars[i].show();
    bars[i].update();

    if (bars[i].hits(bird)) {
      console.log("hit");
      if (!hitFlag) {
        score -= 1;
        hitFlag = true;
        count = 0;
      }
    }

    if (bars[i].offscreen()) {
      bars.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 === 0) {
    bars.push(new Block());
  }

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}



function BossComing() {
  
  fill(0, 255, 0);
  rect(350, 300, 50, 50);
  if (frameCount % 60 == 0) {
    var b = new Boss();
    bullets.push(b);
  }
  
  for (var i=0; i<bullets.length;i++) {
    bullets[i].move();
    if (bullets[i].hits(bird)) {
      score -= 1;
    }
  }
  
}