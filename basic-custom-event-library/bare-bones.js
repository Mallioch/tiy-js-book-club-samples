var emitter = new Emitter();

var eventCallback = () => {
  console.log('The event fired!');
};

console.log('-- firing before event subscription, so nothing happens.')
emitter.emit('fire-it');

//This is how you "subscribe" to an event.
console.log('-- subscribing');
emitter.on('fire-it', eventCallback);

//This is how you "publish" an event
console.log('-- firing event');
emitter.emit('fire-it');

//If you ever want to stop listening, this is how you would do that.
console.log('-- unsubscribing')
emitter.off('fire-it', eventCallback);

//Now now one is listening to the event, so this won't do anything!
console.log('-- firing after unsubscribing, so the event callback will not fire')
emitter.emit('fire-it');
