// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];
}

function Shape(colour, thickness) {
    this.colour = colour;
    this.thickness = thickness; // in px
}

function Rectangle(colour, thickness, x, y, width, height) {
    Shape.call(this, colour, thickness);
    this.topLeft = { x: x, y: y };
    this.width = width;
    this.height = height;

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
}

function Line(colour, thickness, x1, y1, x2, y2) {
    Shape.call(this, colour, thickness);
    this.start = { x: x1, y: y1 };
    this.end = { x: x2, y: y2 };

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
}
