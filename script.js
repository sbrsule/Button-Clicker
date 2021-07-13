const counterDisplay = document.querySelector('.counter');
const counterButton = document.querySelector('.button_add');
const resetButton = document.querySelector('.button_clear');


class Counter {
    constructor(counterDisplay) {
        this.count = 0;
        this.counterDisplay = counterDisplay;
        this.counterDisplay.innerText =  this.count.toString();
    }

    addCount() {
        this.count += 1;
    }

    reset() {
        this.count = 0;
    }

    updateDisplay() {
        this.counterDisplay.innerText = this.count.toString();
    }
}

const counter = new Counter(counterDisplay);

counterButton.addEventListener('click', button => {
    counter.addCount();
    counter.updateDisplay();
})

resetButton.addEventListener('click', button => {
    counter.reset(); 
    counter.updateDisplay();
})