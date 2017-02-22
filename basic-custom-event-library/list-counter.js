if (window.Lister === undefined) { window.Lister = {}; }

(function() {

  var counterDiv = document.querySelector('#counter');

  counterDiv.textContent = 'Count: 0';

  Lister.emitter.on('data changed', (list) => {
    counterDiv.textContent = 'Count: ' + list.length;
  });

})();
