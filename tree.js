class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST {
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.root === null){
          this.root = newNode
        }
        
        let temp = this.root
        while(true){
            if(temp.value === newNode.value){
                return undefined
            }
            if(newNode.value < temp.value){
                if(temp.left === null){
                  temp.left = newNode
                  return this
                }  
                else{
                    temp = temp.left
                }   
            }
            else{
              if(temp.right === null){
                temp.right = newNode
                return this
                }  
              temp = temp.right                     
        }
        }
    }

    includes(value){
    if(!this.root){
        return false
    }
    let temp = this.root

    while(temp){
      if(value === temp){
        return true
    }
    if(value < temp.value){
      temp = temp.left
    }
    else if(value > temp.value){
      temp = temp.right
    }
    else if(value === temp.value){
        return true
    }   
    } 
    return false 
    }


    bfs(){
      let current = this.root
      let queue = []
      let data = []

      queue.push(current)

      while(queue.length){
        current = queue.shift()
        data.push(current.value)

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
      }
      return data
    }

    dfsPreOrder(node = this.root, data = []){
      if(node === null) return data
      data.push(node.value)

      if(node.left) this.dfsPreOrder(node.left, data)
      if(node.right) this.dfsPreOrder(node.right, data)

      return data   

    }

    dfsPostOrder(node = this.root, data = []){
      if(node === null) return data

      if(node.left) this.dfsPostOrder(node.left, data)
      if(node.right) this.dfsPostOrder(node.right, data)
 
      data.push(node.value)  

      return data   

    }
}


const myBst = new BST()
console.log(myBst)
myBst.insert(5)
myBst.insert(3)
myBst.insert(7)
myBst.insert(1)
myBst.insert(4)
myBst.insert(6)
myBst.insert(8)
console.log(myBst.includes(7))
console.log(myBst)
console.log(myBst.bfs())
console.log(myBst.dfsPreOrder())
console.log(myBst.dfsPostOrder())