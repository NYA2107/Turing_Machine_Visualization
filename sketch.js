var canvas;
var sizePoint = 20;
var sup = new Support();


let Tx = 1
let Ty = 7

let arrow = new Point(false)
let q0 = new Point(false)
let q1 = new Point(false)
let q2 = new Point(false)
let q3 = new Point(false)

// q1.q = true

let q0c = {
	x:100*Tx,
	y:50*Ty
}
let q1c = {
	x:300*Tx,
	y:50*Ty
}
let q2c = {
	x:500*Tx,
	y:50*Ty
}
let q3c = {
	x:700*Tx,
	y:50*Ty
}

function setup() {
  // put setup code here
  canvas = createCanvas(1200, 1000);
  canvas.parent('app');
  frameRate(60)
  
}

function draw() {
  // put drawing code here
	background(32, 50, 66);
	sup.showGrid(10,10,false);
	sup.showGrid(100,100,true);
	

  	fill(153, 255, 241);
	textSize(16);
	noStroke();
	//height is always subtracted by Y just for captioning reason
	text(`State : 1` ,50 ,50);
	text(`Input : 1` ,50 ,80);
	text(`Tape : 1` ,50 ,110);
	text(`Tape Replacement : 1` ,50 ,140);

	if(operation == '+'){
		stroke(255)
		line(q0c.x, q0c.y,q1c.x, q1c.y);
		line(q1c.x, q1c.y,q2c.x, q2c.y);
		line(q2c.x, q2c.y,q3c.x, q3c.y);
		q0.drawPoint(q0c.x, q0c.y, 50, 'q0')
		q1.drawPoint(q1c.x, q1c.y, 50, 'q1')
		q2.drawPoint(q2c.x, q2c.y, 50, 'q2')
		q2.drawPoint(q3c.x, q3c.y, 50, 'q3')
		arrow.drawPoint(q1c.x-30,q1c.y, 10, '')
		arrow.drawPoint(q2c.x-30,q2c.y, 10, '')
	}else if(operation == '-'){

	}
	
  sup.showCursor();
}
