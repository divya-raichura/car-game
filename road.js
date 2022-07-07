class Road {
  constructor(x, width, laneCount = 5) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 100000;
    this.top = -infinity;
    this.bottom = infinity;
  }

  getLaneCenter(laneIndex) {
    const laneWidth = this.width / this.laneCount; // this gives width of every lane
    // return (this.left) + (laneWidth / 2) + (laneIndex * laneWidth);
    // return this.left + laneWidth / 2 + laneIndex * laneWidth;
    // but car can load outside street if we put a higher lane numebr
    // hence we do this...
    return (
      this.left +
      laneWidth / 2 +
      Math.min(laneIndex, this.laneCount - 1) * laneWidth
    );
  }

  draw(ctx) {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "white";

    for (let i = 0; i <= this.laneCount; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);
      if (i > 0 && i < this.laneCount) {
        ctx.setLineDash([50, 50]);
      } else {
        ctx.setLineDash([]);
      }
      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }

    // don't need these as integrated these road borders with lanes
    // ctx.beginPath();
    // ctx.moveTo(this.left, this.top);
    // ctx.lineTo(this.left, this.bottom);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(this.right, this.top);
    // ctx.lineTo(this.right, this.bottom);
    // ctx.stroke();
  }
}
