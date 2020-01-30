class Counter {
  constructor ({incr, decr, minRange, maxRange, initial} = {}) {
    this.initial = initial || 0;
    this.decr = decr || -1;
    this.incr = incr || 1;
    this.maxInRange = maxRange || 100;
    this.minInRange = minRange || -100;
    this.counterElement = null;
  }

  increment () {
    this.initial += this.incr;
    if (this.initial >= this.maxInRange) {
      this.initial = this.maxInRange;
    }
  }

  decrement () {
    this.initial += this.decr;
    if (this.initial <= this.minInRange) {
      this.initial = this.minInRange;
    }
  }

  changeCounter(val) {
    if (val === '+') {
      this.increment()
    } else {
      this.decrement()
    }

    if (!!this.counterElement) {
      this.counterElement.innerText = this.initial;
    }
  }

  createElement (tag, className, innerHtml, type, innerText) {
    const elem = document.createElement(tag);
    const self = this;
    elem.className = className;
    elem.innerHTML = innerHtml;

    if (type === 'button') {
      elem.type = type;
      elem.value = innerText;
      elem.addEventListener('click', () => self.changeCounter(elem.value));
    }
    return elem;
  }

  render () {
    const container = document.getElementById('count').appendChild(this.createElement ('div', 'counter', null));
    container.appendChild(this.createElement ('input', 'btn-plus', null, 'button', '+'));
    this.counterElement = this.createElement ('span', 'num', this.initial);
    container.appendChild(this.counterElement);
    container.appendChild(this.createElement ('input', 'btn-minus', null, 'button', '-'));
  }

  init () {
    this.render();
  }
}


const counterOne = new Counter({incr: 100, decr: -100, minRange: -10000, maxRange: 10000}).init();
const counterTwo = new Counter({incr: 10, decr: -10, minRange: -100, maxRange: 100}).init();
const counterThree = new Counter().init();