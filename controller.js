var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line; // 0 = rectangle, 1 = line
    this.currLineWidth = 5;
    this.currColour = "#000000";
    this.currentShape = new Rectangle(
        this.currColour,
        this.currLineWidth,
        0,
        0,
    );

    this.updateShape = function () {
        const selectedId = document.querySelector(
            'input[name="mx"]:checked',
        ).id;

        this.currEditingMode =
            selectedId === "butRect" ? editingMode.rect : editingMode.line;
    }.bind(this);
    this.updateShape();
    document.querySelectorAll("input[name='mx']").forEach((elem) => {
        elem.addEventListener("change", this.updateShape);
    });

    this.updateColour = function () {
        this.currColour = document.getElementById("colour").value;
    }.bind(this);
    this.updateColour();
    document
        .getElementById("colour")
        .addEventListener("change", this.updateColour);

    this.updateThickness = function () {
        this.currLineWidth = document.getElementById("spinnerWidth").value;
    }.bind(this);
    this.updateThickness();
    document
        .getElementById("spinnerWidth")
        .addEventListener("change", this.updateThickness);

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
        drawing.paint(ctx);

        this.currentShape.update({ x, y });
        this.currentShape.paint(ctx);
    };

    this.onInteractionEnd = function () {
        drawing.add(this.currentShape);
    };
}
