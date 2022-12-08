function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}, no such element exist"`);
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    // bind this to all function
    this.reset = this.reset.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    // event handlers
    this.resetBtn.addEventListener("click", this.reset);
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
  }
  // methode
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-container"), 100);
const secondCounter = new Counter(getElement(".second-container"), 50);
