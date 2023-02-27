var ivany_musicPlaying = false;
var ivany_musicStretch = false;
var ivany_musicFirst = false;
var ivany = {
  //切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (!ivany_musicFirst) {
      musicBindEvent();
      ivany_musicFirst = true;
    }
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>'; // 此處可以更改為你想要顯示的文字
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'; // 同上，但兩處均不建議更改
    if (ivany_musicPlaying) {
      document.querySelector("#nav-music").classList.remove("playing");
      // 修改右键菜单文案为播放
      // document.getElementById("menu-music-toggle").innerHTML = msgPlay;
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      // document.querySelector("#consoleMusic").classList.remove("on");
      ivany_musicPlaying = false;
      document.querySelector("#nav-music").classList.remove("stretch");
      ivany_musicStretch = false;
    } else {
      document.querySelector("#nav-music").classList.add("playing");
      // 修改右键菜单文案为暂停
      // document.getElementById("menu-music-toggle").innerHTML = msgPause;
      // document.querySelector("#consoleMusic").classList.add("on");
      ivany_musicPlaying = true;
      document.querySelector("#nav-music").classList.add("stretch");
      ivany_musicStretch = true;
    }
    if (changePaly) document.querySelector("#nav-music meting-js").aplayer.toggle();
  },
  // 音乐伸缩
  musicTelescopic: function () {
    if (ivany_musicStretch) {
      document.querySelector("#nav-music").classList.remove("stretch");
      ivany_musicStretch = false;
    } else {
      document.querySelector("#nav-music").classList.add("stretch");
      ivany_musicStretch = true;
    }
  },

  //音乐上一曲
  musicSkipBack: function () {
    document.querySelector("#nav-music meting-js").aplayer.skipBack();
  },

  //音乐下一曲
  musicSkipForward: function () {
    document.querySelector("#nav-music meting-js").aplayer.skipForward();
  },

  //获取音乐中的名称
  musicGetName: function () {
    var x = $(".aplayer-title");
    var arr = [];
    for (var i = x.length - 1; i >= 0; i--) {
      arr[i] = x[i].innerText;
    }
    return arr[0];
  },
};

// addRightMenuClickEvent();
