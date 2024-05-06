let img;

function setup() {
  createCanvas(1400, 701);
  img = loadImage("background.jpg");
  imgS = loadImage("spaik.png");
  imgP = loadImage("paiper.png");
}

function draw() {
  background(img);
 image(img, 0, 0);
  image(imgS, 20, mouseY, 200, 200);
  
}