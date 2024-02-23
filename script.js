class LinkedList {
    constructor() {
        this.head = {
            nextNode: null,
        };
    }

    append(value) {
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = new Node(value);
    }

    prepend(value) {
        if (this.head.nextNode === null) {
            return this.append(value);
        }

        let current = this.head.nextNode;
        this.head.nextNode = new Node(value, current);

    }

    size() {
        if (this.head.nextNode === null) {
            return 'No children';
        }

        let size = 0;
        let current = this.head.nextNode;

        while (current !== null) {
            size++;
            current = current.nextNode;
        }

        return size;
    }

    headVar() {
        return this.head.nextNode;
    }
    
    tailVar() {
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        
        return current;
    }

    at(index) {
        let current = this.head;

        for (let i = 1; i <= index; i++ ) {
            current = current.nextNode;
        }

        return current;
    }
    
    pop() {
        let current = this.head;
        
        let size = this.size();

        if (current.nextNode === null) return 'List is empty';

        for (let i = 2; i <= size; i++) {
            current = current.nextNode;
        }

        current.nextNode = null;
    }

    contains(value) {
        let size = this.size();
        if (size === 0) return 'Can\'t search in empty list';

        let current = this.head.nextNode;
        
        for (let i = 1; i <= size; i++) {
            if (current.value === value) return true;

            current = current.nextNode;
        }

        return false;
    }

    find(value) {
        let size = this.size();
        if (size === 0) return 'Can\'t search in empty list';

        let current = this.head.nextNode;
        
        for (let i = 1; i <= size; i++) {
            if (current.value === value) return i;

            current = current.nextNode;
        }

        return null;
    }

    toString() {
        let string = '';
        let current = this.head.nextNode;
        while (current !== null) {
            string += `( ${current.value} ) -> ` 
            current = current.nextNode;
        }

        string += 'null'

        return string;
    }

    insertAt(index, value) {
        if (index === 1) return this.prepend(value);
        if (index === this.size() + 1) return this.append(value);
        
        let prev = this.at(index - 1);
        let current = this.at(index);

        prev.nextNode = new Node (value, current);
    }

    removeAt(index) {
        let prev = this.at(index - 1);
        let next = this.at(index + 1);

        prev.nextNode = next;
    }

    show() {
        return this.head;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}