$(document).ready(function() {
  newPicture = new Module.Picture();
  newTony = new Module.Tony();
  newAlex = new Module.Alex();
  moduleList = [newAlex,newPicture, newTony];
  master = new MainController(moduleList);
  master.bindListeners();
});

Module = {};

function MainController(moduleList) {
  this.moduleList = moduleList;
  this.moduleIndex = 0;
  this.loadCount = 0;
  var self = this;

  this.init = function() {
    currentUserInfo = new CurrentUserInfo();
    console.log(currentUserInfo)
    $(this.moduleList).trigger('load');
  };

  this.bindListeners = function() {
    $(document).on('loaded',function() {
      self.loadCount++;
      if (self.loadCount === self.moduleList.length) {
        $(document).trigger('next');
      }
    });

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
  this.likes = fbuser.likes;
  this.fbprofile = fbuser.profile;
}


