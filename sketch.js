let redButton;
let blueButton;
let yellowButton;
let greenButton;
let purpleButton;
let orangeButton;
let slider;
let rSlider, gSlider, bSlider;

  

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(12);
  stroke("black");
  background("white")
  
  // background color sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(120, 95);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(120, 110);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(120, 125);
  
  
  
  
  

  
  noFill();
  //   stroke slider
  slider = createSlider(1, 10, 2);
  slider.position(80, 66);
  
  
  redButton = createButton("Red");
  redButton.position(10, 30);
  redButton.mousePressed(redBackground);
  
  blueButton = createButton("blue");
  blueButton.position(60, 30);
  blueButton.mousePressed(blueBackground);
  
  yellowButton = createButton("yellow");
  yellowButton.position(110, 30);
  yellowButton.mousePressed(yellowBackground);
  
  greenButton = createButton("green");
  greenButton.position(170, 30);
  greenButton.mousePressed(greenBackground);
  
  purpleButton = createButton("purple");
  purpleButton.position(230, 30);
  purpleButton.mousePressed(purpleBackground);
  
  orangeButton = createButton("orange");
  orangeButton.position(290, 30);
  orangeButton.mousePressed(orangeBackground); 
  
  saveButton = createButton("save your drawing");
  saveButton.position(10, 220);
  saveButton.mousePressed(saveImage);
  
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15);
  strokeWeight(0);
  fill("black")
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);

  noFill();
  stroke("black");
  strokeWeight(2);
  rect(10,260,windowWidth - 20, windowHeight - 270);
}



function draw() {
  
  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();
  fill(r, g, b);
  square(270, 100, 45);
  stroke(r, g, b)
  
  // fill(51);
  // text('Stoke Size', 10, 80);
  // text('Stroke Color', 10, 110);
  // text('To erase drawing press the C key', 10, 40);
  

  
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  let val = slider.value();
  strokeWeight(val);
  
  

}

function redBackground() {
  background("red");
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15); 
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);
  print("Change stroke to red");
}

function blueBackground() {
  background("blue");
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15);
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);
  print("Change stroke to blue");
}

function yellowBackground() {
  background("yellow");
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15);
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);
  print("Change stroke to yellow");
}

function greenBackground() {
  background("green");
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15);
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);
  print("Change stroke to green");
}

function purpleBackground() {
  background("purple");
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15);
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);
  print("Change stroke to purple");
}

function orangeBackground() {
  background("orange");
  strokeWeight(0);
  textSize(12);
  fill("black")
  text('Stoke Size', 10, 80);
  text('Stroke Color', 10, 110);
  textSize(15);
  text('To erase drawing press the C key', 10, 190);
  text('Choose a background color before you start drawing:', 10, 20);
  print("Change stroke to orange");
}

function saveImage(){
    //save out to a file
    let img = get(10,260,windowWidth - 20, windowHeight - 270);
    img.save('amazing-Drawing.png');
}

function keyPressed() {
  
  if (key == "c"){
    strokeWeight(0);
    textSize(12);
    background("white");
    fill("black")
    text('Stoke Size', 10, 80);
    text('Stroke Color', 10, 110);
    textSize(15);
    fill("black")
    text('To erase drawing press the C key', 10, 190);
    text('Choose a background color before you start drawing:', 10, 20);
  }
  
}


