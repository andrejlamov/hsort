function Events () {
  this.events = {}
}

Events.prototype.on = function(event, callback) {
  if(!this.events[event]) {
    this.events[event] = [];
  }
  if(callback) {
    this.events[event].push(callback);
  }
}

Events.prototype.trigger = function(event, d) {
  var callbacks = this.events[event];
  if(callbacks) {
    callbacks.forEach(function(f) { f(d) });
  }
}
