$(document).ready(function() {
  newTony = new Module.Tony();
  moduleList = [newTony];
  master = new MainController(moduleList);
  master.bindListeners();
});

function MainController(moduleList) {
  this.moduleList = moduleList;
  this.moduleIndex = 0;
  this.loadCount = 0;
  var self = this;

  this.init = function() {
    $(this.moduleList).trigger('load');
    $(document).on('loaded',function(event,data) {
      self.loadCount++;
      if (self.loadCount === self.moduleList.length) {
        $(document).trigger('next');
      }
    });
  };

  this.bindListeners = function() {
    $('#start').on('click', this.init.bind(master));
    $(document).on('next',function(event, data) {
      $(this.moduleList[this.moduleIndex]).trigger('start', [data]);
      this.moduleIndex++;
    }.bind(this));
  };

}

// mainmodel = function MainController(event)

