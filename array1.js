class MyArray {
  
    constructor(){
        this.length = 0
        this.data = {}
    }
    //Metodo push
    push(item){
    this.data[this.length] = item
    this.length++
    return this.length
    }
    //Metodo get
    get(index){
     return this.data[index]
    }
    //Metodo pop
    pop(){
        const lastItem = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--
        return lastItem
    }
    //Metodo shift
    shift(){
        const firstItem = this.data[0]
 
        for(let i = 0; i < this.length; i++){
          this.data[i] = this.data[i+1]
          
        }

        delete this.data[this.length -1]    
        this.length--   
        return firstItem
    }

    deleteByIndex(index) {
       
        if (index < 0 || index >= this.length) {
            return undefined; 
        }

        const item = this.data[index];
    
        // Mover todos los elementos posteriores una posición hacia la izquierda
        //De esta forma eliminamos el elemento y reorganizamos los indices
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    
        // Eliminar el último elemento (que ahora está duplicado)
        delete this.data[this.length - 1];      
        this.length--;    
        return item;
    }

}

const myNewArray = new MyArray

console.log(myNewArray)

myNewArray.push(5)

myNewArray.push("cadena")

myNewArray.push(7)

myNewArray.push(9)

myNewArray.push(4)

myNewArray.push("mango")

myNewArray.push("27")


console.log(myNewArray)

console.log(myNewArray.get(1))

myNewArray.pop()

console.log("Metodo pop", myNewArray)

myNewArray.shift()

console.log("Metodo shift", myNewArray)

myNewArray.deleteByIndex(2)

console.log("Metodo delete by index", myNewArray)