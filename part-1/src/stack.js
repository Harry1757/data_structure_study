class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return Object.keys(this.storage).length 
  }

  push(element) {
    this.storage[this.top] = element
    this.top++
    return element
  }

  pop() {
    if(this.top < 1){
      return;
    }
    let result = this.storage[this.top -1]
    delete this.storage[this.top -1]
    this.top--
    return result
  }
}

module.exports = Stack;
