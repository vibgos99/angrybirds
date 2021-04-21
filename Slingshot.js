class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.Slingshot.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.Slingshot.bodyA){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            line(pointA.x+10, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+10,pointA.y,pointB.x+30,pointB.y);
            image(this.sling3,pointA.x+15,pointA.y-10,15,30);

        }
        }

    }
    
}