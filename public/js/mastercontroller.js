$(document).ready(function() {
  var currentUserInfo;
  master = new MasterController(MasterModel, MasterView);
  new MasterBinder({start: '#start'}, master).bindToSelectors();
  MusicController();
});

Module = {};

// ------------------------------------------------- //

MasterController = function(model, view){
  this.model = new model();
  this.view = new view();
  this.moduleList = this.model.moduleList;
  this.moduleIndex = 0;
  this.loadCount = 0;
}

MasterController.prototype = {
  // loadModules is bound to $('#start') by the MasterBinder
  loadModules: function(){
    currentUserInfo = new CurrentUserInfo();
    $(this.moduleList).trigger('load');
  },

  // incrementLoadCount is bound to $(document) by the MasterBinder
  // incrementLoadCount is called by $(document).on('loaded')
  incrementLoadCount: function(){
    this.loadCount++;
    this.triggerFirstModule();
  },

  triggerFirstModule: function(){
    if (this.loadCount === this.moduleList.length) {
      $(document).trigger('next');
    };
  },

  startNextModule: function(){
    $(this.moduleList[this.moduleIndex]).trigger('start');
    this.moduleIndex++;
    this.view.setRandomBackgroundColor();
  }
}
// ------------------------------------------------- //

MasterModel = function(){
  // this.coreModules = [
  //                    new Module.HelloUser()
  //                   ,new Module.Picture()
  //                   ,new Module.TagCanvas()
  //                   ,new Module.TwilioCall()
  //                   ,new Module.Cube()
  //                   ,new Module.RickRoll()
  //                   ,new Module.TwilioSMS()
  //                   ,new Module.Places()
  //                   ,new Module.TwilioCallRecord()];
  this.coreModules = [new Module.TwilioSMS(),new Module.TwilioCall()];

  this.moduleList = this.insertPhysicsTransitions(this.coreModules);
}

MasterModel.prototype = {
  insertPhysicsTransitions: function(moduleList) {
    zippedList = [moduleList[0]];
    for (var i = 1, l = moduleList.length; i<l;i++){
      zippedList.push(new Module.PhysicsTransition(), moduleList[i]);
    }
    return zippedList;
  }
}

// ------------------------------------------------- //

var MasterBinder = function(selectors, controller) {
  this.selectors = selectors;
  this.controller = controller;
};

MasterBinder.prototype = {
  bindToSelectors: function() {
    var mController = this.controller;
    $(this.selectors.start).on('click', mController.loadModules.bind(mController));
    $(document).on('loaded', mController.incrementLoadCount.bind(mController));
    $(document).on('next',mController.startNextModule.bind(mController));
  }
};

function CurrentUserInfo() {
  this.likes = fbuser.likes;
  this.fbprofile = fbuser.profile;
  this.fbphotos = fbuser.photos;
  this.fbposts = fbuser.posts;
  this.fbplaces = fbuser.places;
  this.fbprofilepic = fbuser.profilepic
}

//  --------------------------------------- //
var MasterView = function() {
  this.colorArray =  ['#95D3E2'
                      ,'#254D78'
                      ,'#825D75'
                      ,'#F23E32'
                      ,'#FAB562'
                      ,'#D2E594'
                      ,'#476054'
                      ,'#FEDB74'
                      ,'#4D4550'
                      ,'#E7E3E3'];
}

MasterView.prototype = {

  setRandomBackgroundColor: function(){
    var color = this.produceRandomColor();
    this.removeBackgroundColor();
    this.renderNewBackgroundColor(color);
  },

  produceRandomColor: function(){
    var colorArrayLength = this.colorArray.length;
    var randomIndex = Math.floor((Math.random() * colorArrayLength));
    return this.colorArray[randomIndex];
  },

  removeBackgroundColor: function(){
    $(document.body).css("background-image", "none")
  },

  renderNewBackgroundColor: function(color) {
    $(document.body).css("background-color", color)
  }
}
