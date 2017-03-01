

(function($, Controller) {

  var mod = new Controller();

  mod.toggleClass = function(e) {
    this.view.toggleClass('over', e.data);
  }

  mod.load(function() {
    this.view = $('#view');
    this.view.mouseover(this.proxy(this.toggleClass));
    this.view.mouseout(this.proxy(this.toggleClass));
  });

})(jQuery, Controller);
