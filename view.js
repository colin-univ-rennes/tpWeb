// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Shape.prototype.paint = function (ctx) {
    console.log(this.color);
    ctx.strokeStyle = this.colour;
    ctx.lineWidth = this.thickness;
};

Rectangle.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(
        this.getInitX(),
        this.getInitY(),
        this.getFinalX(),
        this.getFinalY(),
    );
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = "#F0F0F0"; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const elem in this.getShapes()) {
        // now fill the canvas
        elem.paint(ctx);
    }
};
