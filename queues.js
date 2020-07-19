function Queue() {
    this.elements = [];
}

Queue.prototype.enqueue = function(data) {
    this.elements.push(data);
}

Queue.prototype.dequeue = function() {
    return this.elements.shift();
}

// create a queue
testQueue = new Queue();

// add some elements to the queue
testQueue.prototype.enqueue(9);
testQueue.prototype.enqueue(2);

// remove the first element from the queue
// in this case 9
testQueue.prototype.dequeue();

function Node(data) {
    this.data = data;
    this.next = null;
}
  
function Queue() {
    this.head = null;
    this.tail = null;
}

Queue.prototype.enqueue = function() {
    const node = new Node();
  
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  
}

Queue.prototype.dequeue = function() {

    let data;
  
    if(this.head !== null) {
      data = this.head.data;
      this.head = this.head.next;
    }
  
    return data;
  
}

// create queue
const testQueue = new Queue();

// adds some numbers to our queue
testQueue.prototype.enqueue(9);
testQueue.prototype.enqueue(2);
testQueue.prototype.enqueue(5);
testQueue.prototype.enqueue(3);

// removes the first element in our queue
testQueue.prototype.dequeue();