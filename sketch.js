var n1 = [
  "Mono",
  "Sorrow",
  "Drear",
  "Bor",
  "Som",
  "Cont",
  "Pres",
  "Ted",
  "Rep",
  "Sad",
  "Taint",
  "Pois",
  "Fowl",
  "Blight",
  "Dead",
  "Happy",
  "Curlo",
  "Snart",
  "Marli",
  "Grant",
  "Fall",
  "Hora",
  "Frank",
  "Lingo",
  "Gairn",
  "Bill",
  "Rom",
];

var sizeOG = 200;
var textsize = 200;
var sizeSpeed = 5;
var textAlph = 0;
var textAlphOG = 0;

var n2 = [" City", "opolis", "ville", " Town", "sburgh", "land", " Place"];

var nran;
var n2ran;

var timer = 15;
var timerSet = 15;
var timerToggle = true;

var whoosh;
var impact;

var rectAlph = 0;

var particles = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  soundFormats("wav");
  whoosh = loadSound("whoosh");
  impact = loadSound("impact");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  whoosh.play();
  nran = random(n1);
  n2ran = random(n2);
  textFont("Cormorant");
}

function draw() {
  background(200);
  textsize -= sizeSpeed;
  sizeSpeed++;
  rectAlph -= 2;
  if (textsize <= 50) {
    sizeSpeed = 0;
  }

  if (timerToggle && timer > 0) {
    textAlph += 20;
    timer--;
  }

  if (timer <= 0) {
    impact.play(0, random(1, 1.1));
    rectAlph = 255;
    for (i = 0; i < 50; i++) {
      particles.push(new particle());
    }
    timer = timerSet;
    timerToggle = false;
  }

  // text(timer, 100, 100);

  fill(20, 20, 40, textAlph);
  textAlign(CENTER);
  textSize(textsize);
  text(nran + n2ran, width / 2, height / 2);
  textSize(45);
  fill(20, 20, 40);
  text("Random City\nName Generator", width / 2, 60);

  // show and move particles

  for (i = particles.length - 1; i >= 0; i--) {
    particles[i].show();
    particles[i].move();

    //detect if dead

    if (particles[i].dead()) {
      particles.splice(i, 1);
    }
  }

  // flash

  fill(255, rectAlph);
  rectMode(CORNER);
  rect(0, 0, width, height);
}

function mouseClicked() {
  whoosh.play(0, random(0.9, 1.1));
  textAlph = textAlphOG;
  timerToggle = true;
  timer = timerSet;
  nran = random(n1);
  n2ran = random(n2);
  textsize = sizeOG;
  sizeSpeed = 5;
}
