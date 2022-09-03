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
            return this
        }
        return null
    }

    getByIndex(index){
        if(!this.length || +index < 0 || +index >= this.length) return undefined
        let node = this.head
        for(let i = 0; i < +index; i++){
            node = node.next;
        }
        return node;
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

    unshift(val){
        if(!this.head) return this.push(val);
        let newNode = new node(val)
        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this
    }

    pop(){
        //check if the list is empty
        if(!this.head){
            return null;
        }else if(this.length === 1){
            this.head = null;
            this.tail = null;
            return null;
        }else{
            let node = this.head;
            let prevNode = null;
            while(node.next){
                prevNode = node;
                node = node.next;
            }
            //the second to last node is to be the last now and the next prop on it should be null
            prevNode.next = null;
            this.tail = prevNode;
            node.data = null;
            node.next = null;
            this.length--;
            return this
        }
    }

    shift(){
        if(!this.head) return undefined
        if(this.head && this.length === 1 ) return this.pop();
        let newHead = this.head.next;
        this.head.next = null;
        this.head.data = null;
        this.head = newHead;
        this.length--;
        return this;
    }

    set(index, val){
        let node = this.getByIndex(index);
        if(node){
            node.data = val;
            return node;
        }
        return undefined
    }

    insert(index, val){
        let newNode = new node(val);
        let nodeAtIndex = this.getByIndex(+index);
        let prevNodeAtIndex = this.getByIndex(+index-1)
        if(prevNodeAtIndex){
            prevNodeAtIndex.next = newNode;
            newNode.next = nodeAtIndex;
            this.length++;
            return this
        }else{
            return this.unshift(val)
        }
    }

    remove(index){
        let nodeAtIndex = this.getByIndex(+index);
        let prevNodeAtIndex = this.getByIndex(+index-1)

        if(prevNodeAtIndex){
            prevNodeAtIndex.next = nodeAtIndex.next;
            nodeAtIndex.val = null;
            nodeAtIndex.next = null;
            this.length--;
            return this
        }else{
            return this.shift();
        }
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
    
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev
            prev = node
            node = next
        }
        return this;
    }
}

let list = new linkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
// list.pop();
// list.unshift(0)
// console.log(list.getByIndex(4))
// console.log(list.getAllItems())
// console.log(list.shift())
// console.log(list.set(0,0))
// console.log(list.insert(1,1))
// console.log(list.remove(2))
console.log(list.reverse())
