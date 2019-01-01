class Point{

  constructor(q){
    this.q = q
  }

  drawPoint(x, y, size, texta){
     //MAKE THE POINT DRAGGABLE
     if(this.q){
       fill(255, 235, 12);
     }
     else{
       fill(101, 188, 119);
     }
     
     //DRAW A CIRCLE
     stroke(255);
     ellipse(x, y, size, size);
     
     //CAPTION
     fill(153, 255, 241);
     textSize(16);
     noStroke();
     //height is always subtracted by Y just for captioning reason
     text(texta ,x ,y);
  }
}