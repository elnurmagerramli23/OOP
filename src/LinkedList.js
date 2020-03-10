
function LinkedNode(value) {
    this.value = value;
    this.next = null;
}

function LinkedList () {
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.addElmAtStart = function (value) {
    let tempNode = new LinkedNode(value);

    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;

    return this.size;
};

LinkedList.prototype.init = function (array) {
    if (!Array.isArray(array)) {
        return 'Please check your input!'
    }
    for (let i = array.length - 1; i >= 0; i--) {
        this.addElmAtStart(array[i]);
    }
};

LinkedList.prototype.tooArray = function(value) {
    let arr = [];
    let tempNode = this.root;

    while(tempNode) {
        arr.push(tempNode.value)
        tempNode = tempNode.next
    };

    return arr;
};

LinkedList.prototype.clear = function() { 
    this.root = null;
    this.size = 0;
};

LinkedList.prototype.toString = function() {
    let arrToString = '"';
    let tempNode = this.root;

    while(tempNode) {
        arrToString += tempNode.value + ', ';
        tempNode = tempNode.next
    }
    arrToString += '"';

    return arrToString;
};

LinkedList.prototype.getSizeOfList = function() {
    return this.size;
};

LinkedList.prototype.delFirstElm = function() {
    let firstElm = this.root.value;
    let tempNode = this.root.next;

    this.root = tempNode;
    this.size -= 1;

    return firstElm;
};

LinkedList.prototype.delLastElm = function() {
    let result = null; 
    let previous = null;
    let tempNode = this.root;
    
    while(tempNode) { 
        previous = tempNode; 
        tempNode = tempNode.next;

        if(!tempNode.next) {
            result = tempNode.value;
            previous.next = null;
            this.size -= 1;

            return result;
        };
    };
};

LinkedList.prototype.addElmToEnd = function(value) {
    let tempNode = this.root;
    let newNode = new LinkedNode(value);

    while(tempNode){
        tempNode = tempNode.next;
        if(!tempNode.next) {
            tempNode.next = newNode;
            this.size += 1;

            return this.size;
        };
    };
};

const a  = new LinkedList();



