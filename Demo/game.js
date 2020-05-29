const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 400;

const UfoWidth = 50;
const UfoHeight = 50;

const topLeft = 20;
const topRight = 20;

class Game {
  constructor() {
    this.canvas = document.createElement("CANVAS");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;

    this.canvas.style.background = "#f0f0f0";

    this.ufo = new Ufo(this);
    document.body.appendChild(this.canvas);

    console.log(this);
  }
}

class Ufo {
  constructor() {
    this.canvas = document.createElement("CANVAS");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = UfoWidth;
    this.canvas.height = UfoHeight;
    this.ctx.fillRect(210, 20, 150, 100);

    this.canvas.style.background = "red";

    document.body.appendChild(this.canvas);
  }
}

var g = new Game();
