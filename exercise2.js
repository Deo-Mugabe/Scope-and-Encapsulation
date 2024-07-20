// BubbleSort algorithm on the Array object
Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

// Test case
console.log([6, 4, 0, 3, -2, 1].bubbleSort());  // Output: [-2, 0, 1, 3, 4, 6]
