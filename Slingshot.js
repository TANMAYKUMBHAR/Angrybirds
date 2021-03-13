class Slingshot{
    constructor (bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            //elasticity.
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.sling=constraint.Create(options);
        //add to world
        world.add(world,this.chain)
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}