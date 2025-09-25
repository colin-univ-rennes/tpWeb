// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];

    this.add = function (shape) {
        this.shapes.push(shape);
        updateShapeList(this);
    }.bind(this);

    this.getShapes = function () {
        return this.shapes;
    }.bind(this);

    this.remove = function (index) {
        if (index !== -1) {
            this.shapes.splice(index, 1);
            updateShapeList(this);
        }
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

    this.update = function ({ x, y }) {
        this.width = x - this.topLeft.x;
        this.height = y - this.topLeft.y;
    }.bind(this);

    this.display = function () {
        const title = document.createElement("span");
        title.textContent = `Rectangle`;

        const colour = document.createElement("span");
        colour.textContent = this.colour;
        colour.style.mixBlendMode = "difference";
        colour.style.color = "white";

        const container = document.createElement("span");
        container.style.display = "inline-block";
        container.style.width = "fit-content";
        container.style.height = "fit-content";
        container.style.backgroundColor = this.colour;
        container.appendChild(colour);

        const rest = document.createElement("span");
        rest.textContent = `(${this.thickness}, ${this.topLeft.x}, ${this.topLeft.y}, ${this.width}, ${this.height})`;

        return [title, container, rest];
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
    }.bind(this);

    this.display = function () {
        const title = document.createElement("span");
        title.textContent = `Line`;

        const colour = document.createElement("span");
        colour.textContent = this.colour;
        colour.style.mixBlendMode = "difference";
        colour.style.color = "white";

        const container = document.createElement("span");
        container.style.display = "inline-block";
        container.style.width = "fit-content";
        container.style.height = "fit-content";
        container.style.backgroundColor = this.colour;
        container.appendChild(colour);

        const rest = document.createElement("span");
        rest.textContent = `(${this.thickness}, ${this.start.x}, ${this.start.y}, ${this.end.x}, ${this.end.y})`;

        return [title, container, rest];
    }.bind(this);
}
