class Node {
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    get(index: number): number {
        // check if there's no element or length equal to zero
        if (index >= this.length || index < 0) return undefined;
        
        // make the current pointer equal to head
        // while theres next, loop throw
        let current = this.head;
        let i = 0;
        while (current) {
            if (i === index) return current;
            current = current.next;
            i++;
        }
        return undefined;
    }

    addAtHead(val: number): void {
        // create the node
        // make the next value point to the current head
        // change the current head to be the newly created node
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;    
        }

        this.length++;
    }

    addAtTail(val: number): void {
        // create the node
        // make the next value point to null
        // change the current tail to point at the newly created node
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;  
            this.tail = node;
        }
        
        this.length++;
    }

    addAtIndex(index: number, val: number): void {
        // get the previous node to the index
        // make the newly created node next = prev.next
        // make the prev.next = node
        if(index < 0 || index > this.length) return false;
        if (index === this.length) this.addAtTail(val);
        if (index === 0) this.addAtHead(val);
    
        const prev = this.get(index - 1);
        const node = new Node(val);
        node.next = prev.next;
        prev.next = node;

        this.length++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index > this.length) return false;
        if (this.length === 0) return false;
        
        const prev = this.get(index - 1);
        const current = prev.next;
        prev.next = current.next;
        current.next = null;

        this.length--;
    }
}
