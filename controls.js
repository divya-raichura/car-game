class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    // so everytime obj is made, below function will run which is made by us
    this.#addKeyBoardListeners();
  }

  #addKeyBoardListeners() {
    // if we use doc... = function(event) {...} then this.forward etc stuff will refer to function ie
    // this will be replaced by function but since arrow functions don't have "this", this.forward refers to our main constructor wala this, ie object's this
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowLeft":
          this.left = true;
          break;
      }
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowLeft":
          this.left = false;
          break;
      }
    };
  }
}
