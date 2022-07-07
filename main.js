const canvas = document.getElementById("myCanvas");

// innerheight gives height of window which we want to set canvas ka height

canvas.width = 400;

// The getContext() is a built-in HTML object, with properties and methods for drawing
const ctx = canvas.getContext("2d");

const car = new Car(200, 200, 30, 50);
// car.draw(ctx);

animate();

function animate() {
  car.update();
  //   this acts like clear(), it refreshes and removes trails of where it was in last frame
  canvas.height = window.innerHeight;
  car.draw(ctx);

  // can be added by ourselves using setInterval() method
  requestAnimationFrame(animate);
  //   requestAnimationFrame method calls the method sent in argument(here we sent animate) again and again many times per second which gives illusion of movement
}
