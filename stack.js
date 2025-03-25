class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}



class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode
        }
        newNode.next = this.first
        this.first = newNode
        this.length++
        return this
    }

    pop(){
        
        if(this.length === 0){
            return undefined
        }
        let temp = this.first
        this.first = this.first.next
        temp.next = null
        this.length--
        return temp
        
    }

    


}


let stack = new Stack(1)
console.log(stack)
stack.push(3)
stack.push(7)
console.log("Despues del push:", stack)
stack.pop()
console.log("Despues del pop:", stack)