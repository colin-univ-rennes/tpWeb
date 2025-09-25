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

function updateShapeList(drawing) {
    const shapeList = document.getElementById("shapeList");
    shapeList.innerHTML = "";
    const shapes = drawing.getShapes();
    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];

        const deleteButtonContent = document.createElement("span");
        deleteButtonContent.className = "glyphicon glyphicon-remove-sign";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "btn btn-default";
        deleteButton.appendChild(deleteButtonContent);
        deleteButton.addEventListener("click", () => {
            shapeList.removeChild(li);
            drawing.remove(i);
            drawing.paint(ctx);
        });

        const li = document.createElement("li");
        li.appendChild(deleteButton);
        shape.display().forEach((element) => {
            li.appendChild(element);
        });
        li.style.display = "flex";
        li.style.flexDirection = "row";
        li.style.alignItems = "center";
        li.style.justifyContent = "start";
        li.style.gap = "1rem";

        shapeList.appendChild(li);
    }
}
