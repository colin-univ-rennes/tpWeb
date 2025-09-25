// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];

    this.add = function (shape) {
        this.shapes.push(shape);
    }.bind(this);

    this.getShapes = function () {
        return this.shapes;
    }.bind(this);
}

function Shape(colour, thickness) {
    this.colour = colour;
    this.thickness = thickness; // in px
}

function Rectangle(colour, thickness, x, y) {
    Shape.call(this, colour, thickness);
    this.topLeft = { x: x, y: y };
    this.width = 0;
    this.height = 0;

    this.getInitX = function () {
        return this.topLeft.x;
    }.bind(this);

    this.getInitY = function () {
        return this.topLeft.y;
    }.bind(this);

    this.getFinalX = function () {
        return this.topLeft.x + this.width;
    }.bind(this);

    this.getFinalY = function () {
        return this.topLeft.y + this.height;
    }.bind(this);

    this.update = function ({ x, y }) {
        this.width = x - this.topLeft.x;
        this.height = y - this.topLeft.y;
        console.log("update rectangle", this.width, this.height);
    }.bind(this);
}

function Line(colour, thickness, x, y) {
    Shape.call(this, colour, thickness);
    this.start = { x, y };
    this.end = { x, y };

    this.getInitX = function () {
        return this.start.x;
    }.bind(this);

    this.getInitY = function () {
        return this.start.y;
    }.bind(this);

    this.getFinalX = function () {
        return this.end.x;
    }.bind(this);

    this.getFinalY = function () {
        return this.end.y;
    }.bind(this);

    this.update = function ({ x, y }) {
        this.end.x = x;
        this.end.y = y;
        console.log("update line", this.start, this.end);
    }.bind(this);
}
