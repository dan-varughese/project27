class Rope {
    constructor(bodyA, bodyB, XOffset, YOffset) {
        this.XOffset = XOffset;
        this.YOffset = YOffset;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: { x: this.XOffset, y: this.YOffset }
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);

    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);

        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;

        var anchor2X = pointB.x + this.XOffset;
        var anchor2Y = pointB.y + this.YOffset;

        line(anchor1X, anchor1Y, anchor2X, anchor2Y);
    }
}