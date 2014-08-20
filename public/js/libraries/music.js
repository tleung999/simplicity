function MusicController(){
 $('#audio')[0].volume = 0;
 $('#volume').click(toggleVolumeIcon);
 $('#volume').click(toggleVolume);
}

function toggleVolumeIcon(){
 var $this = $(this);
 if($this.hasClass('fa-volume-up')){
   $this.removeClass('fa-volume-up').addClass('fa-volume-off');
 }
 else{
   $this.removeClass('fa-volume-off').addClass('fa-volume-up');
 }
}

function toggleVolume(){
 var $audio = $('#audio')[0];
 if ($audio.volume === 0) {
   $audio.volume = 1.0;
 }
 else {
   $audio.volume = 0;
 }
}

