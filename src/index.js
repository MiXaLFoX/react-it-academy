class Counter {
  constructor ({initial = 0, decr = 1, incr = 1, maxInRange = 100, minInRange = -100} = {}) {
    this.initial = initial;
    this.decr = decr;
    this.incr = incr;
    this.maxInRange = maxInRange;
    this.minInRange = minInRange;
  }

  increment () {
    this.initial += this.incr;
    if (this.initial + this.incr >= this.maxInRange) {
      this.initial = this.maxInRange;
    }
    return this.initial;
  }

  decrement () {
    this.initial -= this.decr;
    if (this.initial - this.decr <= this.minInRange) {
      this.initial = this.minInRange;
    }
    return this.initial;
  }

  createElemnt (tag, className, innerHtml, type, innerText) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHtml;
    if (type === 'button') {
      elem.type = type;
     elem.value = innerText;
      elem.value === '+' ?
        elem.addEventListener('click', () => this.increment()) : elem.addEventListener('click', () => this.decrement());
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

const counterOne = new Counter().init();
const counterTwo = new Counter().init();
const counterThree = new Counter().init();