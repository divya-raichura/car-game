class Car {
  // where and how big the car should be
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  update() {
    this.#move();
  }

  #move() {
    // decreasing y means a point moves upward in screen and increasing a y point means move down
    // so the car is drawn many times per second with different coordinates
    // if (this.controls.forward) {
    //   this.y -= 2;
    // }
    // if (this.controls.reverse) {
    //   this.y += 2;
    // }

    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed) {
      this.speed = -this.maxSpeed / 2;
    }
    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    this.#updateLandR();

    this.y -= Math.cos(this.angle) * this.speed;
  }

  #updateLandR() {
    if (this.controls.left) {
      // this.x -= 2;
      this.angle += 0.03;
    }

    if (this.controls.right) {
      // this.x += 2;
      this.angle -= 0.03;
    }
    // this.x -= this.speed; // don't do this cause it adds speed to x as well hence it's going slant
    this.x -= Math.sin(this.angle) * this.speed;
  }

  draw(ctx) {
    ctx.save();
    // we move the entire canvas to the center of the specific component, using the translate method
    // so the centre that we achieved using x - width/2 is now achieved via translate
    ctx.translate(this.x, this.y);
    // rotate() will rotate clockwise, hence we add '-' so it moves opposite
    ctx.rotate(-this.angle);
    ctx.beginPath();
    // rect has x,y,wid,hei...
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}
