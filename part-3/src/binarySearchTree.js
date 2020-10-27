class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let newnode = new BinarySearchTreeNode(value);
      if(this.value > value){
        if(this.left === null){
          this.left = newnode
        }else{
          return this.left.insert(value)
        }
      }
      else if(this.value < value){
        if(this.right === null){
          this.right = newnode
        }else{
          return this.right.insert(value)
        }
    }
  }

  contains(value) {
    if(this.value === value){
      return true;
    }else if(this.value < value){
      if(this.right === null){
        return false;
      }else if(this.right.contains(value)){
        return true;
      }
    }else if(this.value > value){
      if(this.left === null){
        return false;
      }else if(this.left.contains(value)){
        return true;
      }
    }
    return false;
  }

  inorder(callback) {//중위순회 왼 루트 오른쪽 
   if(this.left !== null){
     this.left.inorder(callback)
   }
   callback(this.value)
   if(this.right !== null){
     this.right.inorder(callback)
   }
  }
}
module.exports = BinarySearchTreeNode;
