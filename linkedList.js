//Estructura de datos lineal sus elementos son llamados nodos
//Cada nodo tiene data y una referencia al siguiente nodo
//Primer elemento head, ultimo tail

class Node {

  constructor(value, next){
    this.value = value
    this.next = null
  }

}

class LinkedList {

   constructor(value){
     this.head = new Node(value)
     this.tail = this.head
     this.length = 1
   } 

   push(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length ++
    
   }

   pop(){

    if(!this.head) {
      return undefined
    }

    let temp = this.head
    let prev = this.head
    while(temp.next){
      prev = temp
      temp = prev.next
      
    }
    this.tail = prev
    this.tail.next = null
    this.length--

    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return temp
   }
   
   unshift(value){
    let newNode = new Node(value)

    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }

    newNode.next = this.head
 
    this.head = newNode
    this.length++

    return this
   
   }


   shift(){

    if(!this.head){
      return undefined
    }

    let temp = this.head

    this.head = this.head.next
    temp.next = null
    this.length--

    if(this.length === 0){
      this.tail = null
    }
    return temp
   }
  
   getFirst() {
    return this.head
   }
   
   getLast(){

     if(!this.head){
      return null
     }

     let temp = this.head
     while(temp.next){
      temp = temp.next
     }
     return temp

   }

   get(index){

    let counter = 0
    let temp = this.head
    while(temp){
      if(counter === index){
        return temp
     
      }
      counter++
      temp = temp.next
      
    }

   }

   set(index,value){
    let temp = this.get(index)
    if(temp){
      temp.value = value   
      return true
    }
   return false
   }

  
   insert(index, value){
 
    if(index === 0){
     return this.unshift(value) 
    }

    if(index === this.length){
     return this.push(value)
    }

    let newNode = new Node(value)
    let prev = this.get(index -1)
    newNode.next = prev.next
    prev.next = newNode
    this.length++
    return true
    
   }

   size(){
    //tambien se puede recorrer la lista y user un counter
    return this.length
   }

   clear(){
    this.head = null
 
   }

}


const myLinkedList = new LinkedList(1)
console.log(myLinkedList)
myLinkedList.push(4)
myLinkedList.push(7)
console.log("Despues del push:",myLinkedList)
myLinkedList.pop()
console.log("Despues del pop:", myLinkedList)
myLinkedList.unshift(28)
console.log("Despues del unshift:", myLinkedList)
myLinkedList.shift()
console.log("Despues del shift:", myLinkedList)
console.log("Get first:", myLinkedList.getFirst())
console.log("Get last:", myLinkedList.getLast())
myLinkedList.push(72)
myLinkedList.push(17)
console.log("Lista actual:", myLinkedList)
console.log("Get posicion 2:", myLinkedList.get(2))
console.log("Get posicion 3:", myLinkedList.get(3))
myLinkedList.set(1, 13)
console.log("Despues del set", myLinkedList)
myLinkedList.insert(1,44)
console.log("Despues del insert:", myLinkedList)
console.log("Size:", myLinkedList.size())
myLinkedList.clear()
console.log("Clear:", myLinkedList)

