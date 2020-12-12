class Bob {

    constructor(x, y, r) {

        var options = {
            isStatic: false,
            restitution: 1,
            friction: 1,
            density: 1.2
        }

        this.r = r;
        this.body = Bodies.circle(x, y, r / 2, options);


        World.add(world, this.body);
    }

    display() {

        fill("blue");
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
    }

}