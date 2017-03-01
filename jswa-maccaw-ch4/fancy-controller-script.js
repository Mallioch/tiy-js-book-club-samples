$(function() {

  var ToggleView = Controller.create({

    events: {
      'mouseover': 'toggleClass',
      'mouseout': 'toggleClass'
    },

    init: function() {},

    toggleClass: function(e) {
      this.el.toggleClass('over');
    }
  });

  new ToggleView({el: $("#view")});





  var SearchForm = Controller.create({
    elements: {
      'input[type="search"]': 'searchInput',
      'form': 'searchForm'
    },

    events: {
      'submit form': 'search'
    },

    search: function(evt) {
      evt.preventDefault();
      console.log('search bro');
    }
  });

  new SearchForm({el: $("#users")});

});
