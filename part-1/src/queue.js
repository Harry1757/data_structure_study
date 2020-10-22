class Queue {
  constructor() {
    this.storage = {};
    this.rear = 0;
    this.first = 0;
    
  }

  size() { 
    return Object.keys(this.storage).length}

  enqueue(element) {
   this.rear ++
   this.storage[this.rear] = element
   return element
  }

  dequeue() {
    if(this.rear <1){
      return;
    }
    this.first++
    let result = this.storage[this.first]
    delete this.storage[this.first]
    return result
  }
}

module.exports = Queue;
