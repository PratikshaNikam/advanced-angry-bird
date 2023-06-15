class PigKing {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height)
        this.image = loadImage("./assets/Scaredkingpig.webp")
        World.add(world, this.body)
        this.width = width
        this.height = height
        this.visibility = 255
    }

    display() {
        if(this.body.speed<3){
            push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop()
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility = this.visibility-5
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,70,70)
            pop()
        }
        // console.log(this.body.speed)
       
    }

    score(){
        if(this.visibility<0&&this.visibility>-2005){
            score++
        }
        
    }
}