class Counter {
  constructor ({incr, decr, minRange, maxRange, initital}) {
    this.initial = initital || 0;
    this.decr = decr || -1;
    this.incr = incr || 1;
    this.maxInRange = maxRange || 100;
    this.minInRange = minRange || -100;
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
      this.increment();
    } else {
      this.decrement();
    }
    document.querySelector('.num').innerText = this.initial;
  }

  createElemnt (tag, className, innerHtml, type, innerText) {
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
    const container = document.getElementById('count').appendChild(this.createElemnt ('div', 'counter', null));
    container.appendChild(this.createElemnt ('input', 'btn-plus', null, 'button', '+'));
    container.appendChild(this.createElemnt ('span', 'num', this.initial));
    container.appendChild(this.createElemnt ('input', 'btn-minus', null, 'button', '-'));
  }

  init () {
    this.render();
  }
}

const counterOne = new Counter({initial: 0, incr: 1, decr: -1, minRange: -10, maxRange: 10}).init();
const counterTwo = new Counter({}).init();
const counterThree = new Counter({}).init();