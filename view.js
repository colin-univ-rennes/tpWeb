// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Shape.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.colour;
    ctx.lineWidth = this.thickness;
};

Rectangle.prototype.paint = function (ctx) {
    Shape.prototype.paint.call(this, ctx);
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.topLeft.x, this.topLeft.y, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    Shape.prototype.paint.call(this, ctx);
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = "#F0F0F0"; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const elem of this.getShapes()) {
        // now fill the canvas
        elem.paint(ctx);
    }
};
