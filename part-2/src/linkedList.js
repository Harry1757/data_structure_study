class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this._size ++
  } 

  remove(value) {
    let find = this.head
    while(find) {
      if(find.value === value){
        find.value = find.next.value
        find.next = find.next.next
        this._size --
      }
      find = find.next
    }
  }

  getNodeAt(index) {
    let count = 0;
    let find = this.head
    while(find){
      if(count === index){
        return find
      }
      find = find.next
      count++
    }
    return undefined
  }

  contains(value) {
    let find = this.head
    while (find){
      if(find.value === value){
        return true;
      }
      find = find.next
    }
    return false;
  }

  indexOf(value) {
    let count = 0;
    let find = this.head
    while(find){
      if(find.value === value ){
        return count 
      }
      find = find.next
      count++
    }
    return -1
  }

  size() {
    if(this._size < 1){
      return 
    }
    return this._size
    
  }
}

module.exports = LinkedList;
