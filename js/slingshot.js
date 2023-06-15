class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }

        this.sling = Constraint.create(options)
        World.add(world, this.sling)
        this.image = loadImage("./assets/slingshot.webp")
    }

    display() {
        push()
        translate(300, height - 475)
        imageMode(CENTER)
        image(this.image, 0, 0, 50, 200)
        pop()
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position
            var pointB = this.sling.pointB
            push()
            stroke("brown")
            strokeWeight(4)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()
        }



    }

    break(){
        this.sling.bodyA = null
        
    }

    attach(bird){
        this.sling.bodyA = bird.body
    }
}