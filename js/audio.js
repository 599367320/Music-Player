"use strict";!function(i){function t(){this.audio=new Audio,this.status="papus"}t.prototype={load:function(i){this.audio.src=i,this.audio.load()},play:function(){this.audio.play(),this.status="play"},pause:function(){this.audio.pause(),this.status="pause"},end:function(i){this.audio.onended=i},playTo:function(i){this.audio.currentTime=i}},i.music=new t}(window.player||(window.player={}));