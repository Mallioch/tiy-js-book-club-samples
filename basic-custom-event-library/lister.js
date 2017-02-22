if (window.Lister === undefined) { window.Lister = {}; }

(function() {

  var theInput = document.querySelector('#the-input');
  var theList = document.querySelector('#the-list');

  theInput.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      Lister.emitter.emit('add', evt.target.value);
      evt.target.value = '';
    }
  });

  theList.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'LI') {
      return;
    }

    var index = evt.target.getAttribute('data-index');
    Lister.emitter.emit('remove', Number(index));
  });

  Lister.emitter.on('data changed', (data) => {
    console.log('updating list');
    theList.innerHTML = '';

    data.forEach((item, index) => {
      var li = document.createElement('li');
      li.textContent = item;
      li.setAttribute('data-index', index);
      theList.appendChild(li);
    });
  });

})();
