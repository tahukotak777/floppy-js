class Player {
    constructor() {
        this.width = 30
        this.height = 30
        this.x = boardWidth/8
        this.y = boardHeight/2
        this.color = "red"
        this.velocity = {
            x: 0,
            y: 0
        }
        this.gravity = 0.5
        this.jump = 60
    }

    movement(key) {
        switch (key) {
            case " ":
                this.velocity.y = -Math.sqrt(2 * this.gravity * this.jump)
                break;
        }

        this.velocity.y += this.gravity
        this.y += this.velocity.y
    }

    create() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}