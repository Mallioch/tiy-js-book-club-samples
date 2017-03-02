(function() {

  class ToggleController extends Example.Controller {

    constructor(options) {
      super(options);
    }

    defineEvents() {
      return {
        'mouseover': 'toggleClass',
        'mouseout': 'toggleClass'
      };
    }

  }


  class FormController extends Example.Controller {

    constructor(options) {
      super(options);
    }

    defineChildElements() {
      return {
        'input[type="search"]': 'searchInput',
        'form': 'searchForm'
      };
    }

    defineEvents() {
      return {
        'submit form': 'search'
      };
    }

    search(evt) {
      evt.preventDefault();
      this.elements.searchInput.val('');
      console.log('search', this.elements);
    }

  }


  new ToggleController({ el: $('#view') });

  new FormController({ el: $('#users')})

})();
