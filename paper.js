class paper {
    constructor(x,y, radius){
        var options= {
            isStatic :false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius, options)
        World.add(world,this.body)
        this.radius=radius
    }
    display(){
       push() 
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("orange")
        ellipse(0,0, this.radius)
        pop()
    
    }
}