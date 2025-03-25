class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Queue {
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }


    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
            this.length++
     }
        this.last.next = newNode
        this.last = newNode
        this.length++
        return this
    }
    dequeue(){
        if(this.length === 0){
            return undefined
        }
        if(this.length === 1){
            this.first = null
            this.last = null
        }
        let temp = this.first
        this.first = this.first.next 
        temp.next = null          
        this.length --
        if (this.length === 0) {
            this.last = null;  // Si la cola queda vacía, last tambien debe ser null
        }
        return this
    }

    min(){
        if(this.length === 0){
            return undefined
        }
        let temp = this.first
        let min = temp.value
        while(temp.next){
            temp = temp.next //se cambia el valor ya que se recorre desde el segundo nodo
            if(temp.value < min){
                min = temp.value
            }
        }
        return min
    }
}



let queue = new Queue(1)
console.log(queue)
queue.enqueue(6)
queue.enqueue(21)
queue.enqueue(3)
console.log("Despues del enqueue:", queue)
queue.dequeue()
console.log("Despues del dequeue:", queue)
console.log("Metodo min:", queue.min())