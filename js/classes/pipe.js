class PipeTop {
    constructor() {
        this.width = 50
        this.height = boardHeight
        this.color = "green"
        this.x = board.width
        this.y;
    }

    create() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

class PipeBottom {
    constructor() {
        this.width = 50
        this.height = boardHeight
        this.color = "green"
        this.x = board.width
        this.y;
    }

    create() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}