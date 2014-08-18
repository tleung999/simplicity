$(document).ready(function() {
	newPicture = new Module.Picture();
	newTony = new Module.Tony();
	newHelloUser = new Module.HelloUser();
	moduleList = [newHelloUser,newPicture, newTony];
	master = new MainController(moduleList);
	master.bindListeners();
	musicController();
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
	var formInput = $("#form input").serializeArray();
	this.name = formInput[0].value;
	this.love = formInput[1].value;
	this.phone = formInput[2].value;
	this.likes = fbuser.likes;
	this.fbprofile = fbuser.profile;
	this.fbphotos = fbuser.photos;
	this.fbposts = fbuser.posts;
}

function musicController(){
	$('#audio')[0].volume = 0
	$('#volume').click(toggleVolumeIcon)
	$('#volume').click(toggleVolume)
};

function toggleVolumeIcon(){
	var $this = $(this)
	if($this.hasClass('fa-volume-up')){
		$this.removeClass('fa-volume-up').addClass('fa-volume-off')
	}
	else{
		$this.removeClass('fa-volume-off').addClass('fa-volume-up')
	}
}
function toggleVolume(){
	var $audio = $('#audio')[0]
	if ($audio.volume == 0){
		$audio.volume = 1.0
	}
	else {
		$audio.volume = 0
	}
}



