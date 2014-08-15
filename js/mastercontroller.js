$(document).ready(function() {
  sample = new Module.Sample();
  alex = new Module.Alex();
  moduleList = [sample,alex];
  master = new MainController(moduleList);
  master.bindListeners();
});

Module = {};

function MainController(moduleList) {
  this.moduleList = moduleList;
  this.moduleIndex = 0;

  this.init = function() {
    currentUserInfo = new CurrentUserInfo()
    this.moduleList.forEach(function(module) {
      $(module).trigger('load');
    });
    $(document).trigger('next');
    $("#main-container").empty();

  };

  this.bindListeners = function() {
    $('#start').on('click', this.init.bind(master));
    $(document).on('next',function() {
      $(this.moduleList[this.moduleIndex]).trigger('start');
      this.moduleIndex++;
    }.bind(this));
  };

}

function CurrentUserInfo() {
  this.name = document.getElementById("form").name.value;
  this.love = document.getElementById("form").love.value;
  this.phone = document.getElementById("form").phone.value;
}


