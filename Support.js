class Support{
  //GRID IF REQUIRED
  showGrid(w, h, l){
    let widthCounter = 0;
    let heightCounter = 0;
    
    if(l) {
      stroke(0);  
    }else{
      stroke(80, 80, 90);
    }
    
    strokeWeight(1);
    while(widthCounter <= width){
      line(widthCounter,0,widthCounter,height);
      widthCounter+=w;
    }
      
    while(heightCounter <= width){
       heightCounter+=h;
       line(0,heightCounter,width,heightCounter);
    }
  }
  
  //CURSOR COORDINATE
  showCursor(){
    fill(153, 255, 241);
    textSize(14);
    text("X : "+parseInt(mouseX)+"  Y : "+parseInt(mouseY),10,20);
  }

  showXY(){
    stroke(232, 255, 102);
    strokeWeight(2);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);
  }
}  
   