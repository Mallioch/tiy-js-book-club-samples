//This is a basic example of a common way of adding support for something in browsers when they don't have it, while keeping their default implementation if they do.
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {};
    F.prototype = o;
    return F();
  }
}


Math.guid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
