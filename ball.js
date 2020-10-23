class crumbledball{

    constructor(x,y,width){
    
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
     this.body = Bodies.circle(x,y,width,options);
     this.width = width;
     World.add(world,this.body);
    }
     
    display(){
        push();
        var pos = this.body.positio;
    
    fill("red");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.width,20);
    pop();
    }
    
    }