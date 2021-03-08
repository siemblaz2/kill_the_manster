class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //stiffness: 0.04,
            length: 300
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }


    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
        if(this.throw.bodyA){
            var pointA = this.throw.bodyA.position;
            var pointB = this.pointB;
            push();
            
            
            
        line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            
            pop();
        }
    }
    }
    
