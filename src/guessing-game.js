class GuessingGame {
    constructor() {
}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.res = Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        if (this.min < this.max) {
            this.max = this.res;
        }
    }

    greater() {
        if (this.min < this.max) {
            this.min = this.res;
        }
    }
}

module.exports = GuessingGame;
