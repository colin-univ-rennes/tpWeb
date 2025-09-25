var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    console.log(ctx);

    this.currEditingMode = editingMode.line; // 0 = rectangle, 1 = line
    this.currLineWidth = 5;
    this.currColour = "#000000";
    this.currentShape = new Rectangle(
        this.currColour,
        this.currLineWidth,
        0,
        0,
    );

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (evt) {
        const coord = getMousePosition(canvas, evt);
        this.currentShape =
            this.currEditingMode === 0
                ? new Rectangle(
                      this.currColour,
                      this.currLineWidth,
                      coord.x,
                      coord.y,
                  )
                : new Line(
                      this.currColour,
                      this.currLineWidth,
                      coord.x,
                      coord.y,
                  );

        this.currentShape.paint(ctx);
    };

    this.onInteractionUpdate = function ({ x, y }) {
        console.log("Interaction update", typeof this.currentShape);
        console.log("ctx ", ctx);

        this.currentShape.update({ x, y });
        this.currentShape.paint(ctx);
    };

    this.onInteractionEnd = function () {
        drawing.add(this.currentShape);
    };
}
