function Queue() {
    this.elements = [];
}

Queue.prototype.enqueue = function(data) {
    this.elements.push(data);
}

Queue.prototype.dequeue = function() {
    return this.elements.shift();
}