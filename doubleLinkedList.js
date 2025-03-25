class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null

    }
}


class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }



    printList() {
        let temp = this.head;
        while (temp) {
            console.log(`Value: ${temp.value}, Next: ${temp.next ? temp.next.value : null}, Prev: ${temp.prev ? temp.prev.value : null}`);
            temp = temp.next;
        }
    }



push(value){

    const newNode = new Node(value)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
    return this

}

  pop(){

    if(this.length === 0) {
        return undefined
      }

    let temp = this.tail
    
    if(this.length === 1){
        this.head = null
        this.tail = null
    }

    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
    this.length--

    return temp
  }


  unshift(value){

    const newNode = new Node(value)

    if(this.length === 0){
        this.head = newNode
        this.tail = newNode
      }

    newNode.next = this.head  
    this.head.prev = newNode
    this.head = newNode
    this.length++

    return this

  }

  shift(){
   
   let temp = this.head

   if(this.length === 0){
      return undefined
    }

   if(this.length === 1){
        this.head = null
        this.tail = null
    } 

    this.head = this.head.next
    this.head.prev = null
    temp.next = null
    this.length--

    return temp
  }

  
 

}



const myDoublyLinkedList = new DoubleLinkedList(1)
console.log(myDoublyLinkedList)
myDoublyLinkedList.push(4)
myDoublyLinkedList.push(16)
myDoublyLinkedList.push(43)
console.log("Despues del push:",myDoublyLinkedList)
myDoublyLinkedList.pop()
myDoublyLinkedList.unshift(7)
myDoublyLinkedList.shift()


myDoublyLinkedList.printList()