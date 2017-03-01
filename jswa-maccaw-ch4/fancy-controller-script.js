$(function() {

  var ToggleView = Controller.create({
    init: function(view) {
      console.log('subview init');
      this.view = $(view);
      this.view.mouseover(this.proxy(this.toggleClass));
      this.view.mouseout(this.proxy(this.toggleClass));
    },

    toggleClass: function(e) {
      console.log('toggle');
      this.view.toggleClass('over', e.data);
    }
  });

  new ToggleView('#view');
  console.log('yo');

});
