class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    unshift(item) {
        const firstItem = this.data[0];
        this.data[this.length] = this.data[this.length - 1];
        this.shiftItemsBackward(item);
        return firstItem;
    }
    shiftItemsBackward(item) {
        for (let i = this.length - 1; i > 1; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
    }
}

const newArray = new MyArray();
newArray.push('you');
newArray.push('there');
newArray.push('!');
newArray.unshift('hello');
console.log(newArray);