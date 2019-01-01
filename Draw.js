class Draw{
  
  constructor(){
    this.list = new SingleLinkedList();
  }
  makePoint(x, y, size, name){
    this.list.addLast(new Point(x,y,size,name + (this.list.size()+1)));
  } 
  
  setPoint(){
    for(let i = 0; i < this.list.size(); i++){
      this.list.get(i).drawPoint();
    }
  } 
  
  setLine(){
    if(this.list.size()<=1){    
    }
    else{
      //CONNECT FIRST POINT TO NEXT POINT UNTIL THE LATEST POINT
      for(let i = 0; i < this.list.size()-1; i++){
        stroke(255);
        line(this.list.get(i).x,this.list.get(i).y,this.list.get(i+1).x,this.list.get(i+1).y);
      }
      
      //CONNECT THE LAST POINT WITH FIRST POINT
      line(this.list.get(this.list.size()-1).x,this.list.get(this.list.size()-1).y,this.list.get(0).x,this.list.get(0).y);
    }

  }
  
  setPolygon(){
    if(this.list.size()<=1){

    }
    else{
      //MAKE A POLYGON BASED ON THE POINTS
      fill(178, 96, 107);
      beginShape();
      for(let i = 0; i < this.list.size()-1; i++){
        vertex(this.list.get(i).x,this.list.get(i).y);
        vertex(this.list.get(i+1).x,this.list.get(i+1).y);
      }
      endShape();
    }
  }
 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
 
}


  