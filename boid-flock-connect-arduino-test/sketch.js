let port;
let connectAr;
let data =[];
let potX;
let potY;

function setup() {
  createCanvas(400, 400);

  port = createSerial();
  connectAr = createButton('Connect to Arduino');
  connectAr.mousePressed(connectArClick);
}

function draw() {
  background(220);

let val = port.readUntil("\n"); //read each line
data = int(split(val,","));
if (data.length > 0) {
console.log("All: "+data);
console.log("X: "+ data[0]);
console.log("Y: "+data[1]);
potX = data[0];
potY = data[1];
  }
}

function connectArClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}