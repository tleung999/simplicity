$(document).ready(function() {
  var currentUserInfo;
  master = new MainController(MainModel, MainView);
  new MasterBinder({start: '#start'}, master).bindToSelectors();
  // MusicController();
});

Module = {};

// ------------------------------------------------- //

MainController = function(model, view){
  this.model = new model;
  this.view = new view;
  this.moduleList = this.model.moduleList;
  this.moduleIndex = 0;
  this.loadCount = 0;
}

MainController.prototype = {
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

MainModel = function(){
  this.coreModules = [new Module.HelloUser()
                    ,new Module.HelloUser()
                    ,new Module.HelloUser()];
  this.moduleList = this.insertPhysicsTransitions(this.coreModules);
}

MainModel.prototype = {
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
  var formInput = $("#form input").serializeArray();
  this.name = formInput[0].value;
  this.love = formInput[1].value;
  this.phone = formInput[2].value;
  this.likes = fbuser.likes;
  this.fbprofile = fbuser.profile;
  this.fbphotos = fbuser.photos;
  this.fbposts = fbuser.posts;
  this.fbplaces = fbuser.places;
}

//  --------------------------------------- //
var MainView = function() {
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

MainView.prototype = {

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

// function MusicController(){
// 	$('#audio')[0].volume = 0;
// 	$('#volume').click(toggleVolumeIcon);
// 	$('#volume').click(toggleVolume);
// }

// function toggleVolumeIcon(){
// 	var $this = $(this);
// 	if($this.hasClass('fa-volume-up')){
// 		$this.removeClass('fa-volume-up').addClass('fa-volume-off');
// 	}
// 	else{
// 		$this.removeClass('fa-volume-off').addClass('fa-volume-up');
// 	}
// }

// function toggleVolume(){
// 	var $audio = $('#audio')[0];
// 	if ($audio.volume === 0) {
// 		$audio.volume = 1.0;
// 	}
// 	else {
// 		$audio.volume = 0;
// 	}
// }

