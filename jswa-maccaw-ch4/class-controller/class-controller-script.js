(function() {

  class ToggleController extends Example.Controller {

    defineEvents() {
      return {
        'mouseover': 'toggleClass',
        'mouseout': 'toggleClass'
      };
    }

  }


  class FormController extends Example.Controller {

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
      console.log('search');
    }

  }


  new ToggleController({ el: $('#view') });

  new FormController({ el: $('#users')})

})();
