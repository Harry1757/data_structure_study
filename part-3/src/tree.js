class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    let tree = new TreeNode(value)

    this.children.push(tree)
  }

  contains(value) {
    if(this.value === value){
      return true
    }else{
      for(let el of this.children){
        if(el.contains(value)){
          return true;
        }
      }
      return false;
    }
 }
}

module.exports = TreeNode;
