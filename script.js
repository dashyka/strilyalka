let img;
var lifes = 10;
class Bullet {
  constructor(x, y, damage, speed, img) {
    this.x = x;
    this.y = y;
    this.damage = damage;
    this.speed = speed;
    this.img = img;
  }

  draw() {
    this.x += this.speed;
    text(this.img, this.x, this.y);
  }
}

var bullets = [];
var myY = 0;

function setup() {
  createCanvas(1400, 701);
  img = loadImage("background.jpg");
  imgS = loadImage("spaik.png");
  imgP = loadImage("paiperp.png");
  pX = 900;
  pY = 150;
}

var pX, pY;

function draw() {
  background(img);
  image(img, 0, 0);
  myY = mouseY; 
  image(imgS, 20, myY, 200, 200);
  image(imgP, pX, pY, 200, 300);

  }

  if (lifes == 0) {
    text('Game over', 500, 500);
  } else {
  textSize(30);
    text('👾', x, y );
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].draw();
      // перевірка зіткнення кулі із суперником або з собою
      // зарахування балів / віднімання життів
  
      if (bullets[i].x > pX) {
        if (abs(pY + 150 - bullets[i].y) < 150) {
          lifes -= 1;
          // remove bullet from array
        } 

        bullets.splice(i, 1);
      }
    }
  }
   text('❤️' + lifes, 10, 40);


function keyPressed() {
  if (key == ' ') {
    bullets.push(new Bullet(10, myY, 100, 10, '🌵'));
  }
}