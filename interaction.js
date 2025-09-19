// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.initX = 0;
    this.initY = 0;
    this.endX = 0;
    this.endY = 0;
    this.isDragging = false;

    // Developper les 3 fonctions gérant les événements
    this.mouseDown = function (evt) {
        interactor.onInteractionStart(this);
        var mousePosition = getMousePosition(canvas, evt);
        this.initX = mousePosition.x;
        this.initY = mousePosition.y;
        this.isDragging = true;
        console.log("Mouse down", { x: this.initX, y: this.initY });
    }.bind(this);

    this.mouseMove = function (evt) {
        var mousePosition = getMousePosition(canvas, evt);
        if (this.isDragging) {
            this.endX = mousePosition.x;
            this.endY = mousePosition.y;
            console.log("Mouse move", { x: this.endX, y: this.endY });
            interactor.onInteractionUpdate(this);
        }
    }.bind(this);

    this.mouseUp = function (evt) {
        var mousePosition = getMousePosition(canvas, evt);
        if (this.isDragging) {
            this.endX = mousePosition.x;
            this.endY = mousePosition.y;
            console.log("Mouse up", { x: this.endX, y: this.endY });
            interactor.onInteractionEnd(this);
        }
        this.isDragging = false;
    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener("mousedown", this.mouseDown);
    canvas.addEventListener("mousemove", this.mouseMove);
    canvas.addEventListener("mouseup", this.mouseUp);
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    console.log("getMousePosition", canvas);
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
    };
}
