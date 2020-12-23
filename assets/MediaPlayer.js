function  MediaPlayer(config) {
    this.media = config.el;
    this.plugin = config.plugin || [];

    this._initPligins();
}

MediaPlayer.prototype._initPligins = function (){
    this.plugin.forEach(element => {
        puligin.run(this);
    });
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused){
      this.media.play();
    }else{
      this.media.pause();
    }
    
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}
