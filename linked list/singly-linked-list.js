class node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    getAllItems(){
        if(this.head){

            //the current node in the iteration
            let node = this.head;

            //loop the list
            let result = [];
            for(let i = 0; i < this.length; i++){
                result.push(node.data)
                node = node.next;
            }

            return result;
        }
    }

    push(val){

        //create a new node
        let newNode = new node(val);

        //check if the list is empty
        // if(!this.head){
        //     this.head = newNode;
        //     this.tail = newNode;
        // }else{
        //     this.tail.next = newNode; //this.tail here gives us access to the head's next property on the first iteration since after the first iteration, head and tail are pointing to thesame object
        //     this.tail = newNode
        // }

        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else if(this.length === 1){
            this.head.next = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    // remove(){

    // }
}

let list = new linkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list.push(6))
console.log(list.getAllItems())