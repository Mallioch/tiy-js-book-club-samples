if (window.Lister === undefined) { window.Lister = {}; }

(function() {

  Lister.emitter = new Emitter();

  var items = [];

  var changed = () => {
    Lister.emitter.emit('data changed', items);
  }

  Lister.emitter.on('add', (item) => {
    items.push(item);
    changed();
  });

  Lister.emitter.on('remove', (index) => {
    items.splice(index, 1);
    changed();
  })

})();
