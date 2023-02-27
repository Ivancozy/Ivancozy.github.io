var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var anzhiyu = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
      } else {
        result = GLOBAL_CONFIG.date_suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
  initIndexEssay: function () {
    setTimeout(() => {
      let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
        passiveListeners: true,
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 3000,
        },
        mousewheel: true,
      });

      let essay_bar_comtainer = document.getElementById("bbtalk");
      if (essay_bar_comtainer !== null) {
        essay_bar_comtainer.onmouseenter = function () {
          essay_bar_swiper.autoplay.stop();
        };
        essay_bar_comtainer.onmouseleave = function () {
          essay_bar_swiper.autoplay.start();
        };
      }
    }, 100);
  },
};

anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();

//浏览器老旧提示
function browserTC() {
  btf.snackbarShow("");
  Snackbar.show({
    text: '浏览器版本较低，网站样式可能错乱',
    actionText: '关闭',
    duration: '6000',
    pos: 'bottom-right'
  });
}
function browserVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
  var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
  var isOpera = userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1; //Opera浏览器
  var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Chrome浏览器
  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Safari浏览器
  if (isEdge) {
    if (userAgent.split('Edge/')[1].split('.')[0] < 90) {
      browserTC()
    }
  } else if (isFirefox) {
    if (userAgent.split('Firefox/')[1].split('.')[0] < 90) {
      browserTC()
    }
  } else if (isOpera) {
    if (userAgent.split('OPR/')[1].split('.')[0] < 80) {
      browserTC()
    }
  } else if (isChrome) {
    if (userAgent.split('Chrome/')[1].split('.')[0] < 90) {
      browserTC()
    }
  } else if (isSafari) {
    //不知道Safari哪个版本是该淘汰的老旧版本
  }
}
//2022-10-29修正了一个错误：过期时间应使用toGMTString()，而不是toUTCString()，否则实际过期时间在中国差了8小时
function setCookies(obj, limitTime) {
  let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
  for (let i in obj) {
    document.cookie = i + '=' + obj[i] + ';expires=' + data
  }
}
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
if (getCookie('browsertc') != 1) {
  setCookies({
    browsertc: 1,
  }, 1);
  browserVersion();
}


// 音乐绑定事件
function musicBindEvent() {
  document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
    anzhiyu.musicTelescopic();
  });
}

var anzhiyu_musicPlaying = false;
var anzhiyu_musicStretch = false;
var anzhiyu_musicFirst = false;
var anzhiyu = {
  //切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (!anzhiyu_musicFirst) {
      musicBindEvent();
      anzhiyu_musicFirst = true;
    }
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>'; // 此處可以更改為你想要顯示的文字
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>'; // 同上，但兩處均不建議更改
    if (anzhiyu_musicPlaying) {
      document.querySelector("#nav-music").classList.remove("playing");
      // 修改右键菜单文案为播放
      // document.getElementById("menu-music-toggle").innerHTML = msgPlay;
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      // document.querySelector("#consoleMusic").classList.remove("on");
      anzhiyu_musicPlaying = false;
      document.querySelector("#nav-music").classList.remove("stretch");
      anzhiyu_musicStretch = false;
    } else {
      document.querySelector("#nav-music").classList.add("playing");
      // 修改右键菜单文案为暂停
      // document.getElementById("menu-music-toggle").innerHTML = msgPause;
      // document.querySelector("#consoleMusic").classList.add("on");
      anzhiyu_musicPlaying = true;
      document.querySelector("#nav-music").classList.add("stretch");
      anzhiyu_musicStretch = true;
    }
    if (changePaly) document.querySelector("#nav-music meting-js").aplayer.toggle();
  },
  // 音乐伸缩
  musicTelescopic: function () {
    if (anzhiyu_musicStretch) {
      document.querySelector("#nav-music").classList.remove("stretch");
      anzhiyu_musicStretch = false;
    } else {
      document.querySelector("#nav-music").classList.add("stretch");
      anzhiyu_musicStretch = true;
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

//back-home-button hover事件
document.getElementsByClassName("back-home-button")[0].hover = function(){
	document.getElementsByClassName("back-menu-list-groups")[0].setAttribute("style", "opacity:1 !important; display:block !important; pointer-events: all !important");
}

// addRightMenuClickEvent();

//菜单栏上下滚动变化
document.addEventListener('pjax:complete', tonav,  clear);
document.addEventListener('DOMContentLoaded', tonav, load);
//响应pjax
function tonav() {
  document.getElementById("name-container").setAttribute("style", "opacity:0");

  var position = $(window).scrollTop();

  $(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll > position) {


      document.getElementById("name-container").setAttribute("style", "");
      document.getElementsByClassName("menus_items")[1].setAttribute("style", "opacity:0");

    } else {


      document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
      document.getElementById("name-container").setAttribute("style", "opacity:0");

    }

    position = scroll;

  });
  function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "opacity:0");
    btf.scrollToDest(0, 500);
  }
  //修复没有弄右键菜单的童鞋无法回顶部的问题
  document.getElementById("page-name").innerText = document.title
}

function clear() {
  clearInternal(timer);
  document.querySelector(".comment-barrage").innerHtml = "";
  load();
}
function load() {
  //init
  timer = setInteral(() => {
    popCommentBarrage();
  }, 114514)
}






// 存数据
// name：命名 data：数据
function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
  let d = JSON.parse(localStorage.getItem(name));
  // 过期或有错误返回 0 否则返回数据
  if (d) {
    let t = Date.now() - d.time
    if (t < (time * 60 * 1000) && t > -1) return d.data;
  }
  return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
  let data = loadData('blogbg', 1440)
  if (data) changeBg(data, 1)
  else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
  let bg = document.getElementById('web_bg')
  if (s.charAt(0) == '#') {
    bg.style.backgroundColor = s
    bg.style.backgroundImage = 'none'
  } else bg.style.backgroundImage = s
  if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
  let div = document.createElement('div')
  document.body.appendChild(div)
  winbox = WinBox({
    id: 'changeBgBox',
    index: 999,
    title: "切换背景",
    x: "center",
    y: "center",
    minwidth: '300px',
    height: "60%",
    background: 'var(--ivany-blue)',
    onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
    onrestore: () => { div.innerHTML = '' }
  });
  winResize();
  window.addEventListener('resize', winResize)

  // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
  winbox.body.innerHTML = `
  <div id="article-container" style="padding:10px;">
  
  <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
  <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
  <details>
  <summary>点击展开手机图片</summary>
  <div class="bgbox">
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xcb9mk.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xcb9mk.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xc1022.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xc1022.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xbxrjy.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xbxrjy.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xbsvyg.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xbsvyg.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xbqd6n.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xbqd6n.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xb7snv.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xb7snv.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xb500d.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xb500d.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xasujh.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xasujh.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xar72s.webp)" class="pimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/xar72s.webp)')">
  </a>
  </div>
  </details>
  <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
  <details>
  <summary>点击展开电脑图片</summary>
  <div class="bgbox">
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zdlz4l.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zdlz4l.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zdnnc7.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zdnnc7.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zds3gq.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zds3gq.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/ze9e49.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/ze9e49.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zeel8l.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zeel8l.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zevq9c.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zevq9c.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfm4xp.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zfm4xp.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfmzij.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zfmzij.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfwm74.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zfwm74.webp)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zg1t54.webp)" class="dimgbox" onclick="changeBg('url(https://img.mirl.ml/i/ivan/2023/02/22/zg1t54.webp)')">
  </a>
  </div>
  </details>
  
  
  <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
  <div class="bgbox">
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #4AC29A, #BDFFF3)" onclick="changeBg('linear-gradient(to right, #4AC29A, #BDFFF3)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #B2FEFA, #0ED2F7)" onclick="changeBg('linear-gradient(to right, #B2FEFA, #0ED2F7)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #44A08D, #093637)" onclick="changeBg('linear-gradient(to right, #44A08D, #093637)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #F0F2F0, #000C40)" onclick="changeBg('linear-gradient(to right, #F0F2F0, #000C40)')">
  </a>
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #E8CBC0, #636FA4)" onclick="changeBg('linear-gradient(to right, #E8CBC0, #636FA4)')">
  </a>
  </div>
  
  <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
  <div class="bgbox">
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fae3d9" onclick="changeBg('#fae3d9')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #bbded6" onclick="changeBg('#bbded6')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ffb6b9" onclick="changeBg('#ffb6b9')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d9d9f3" onclick="changeBg('#d9d9f3')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ceefe4" onclick="changeBg('#ceefe4')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #6b778d" onclick="changeBg('#6b778d')"></a> 
  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fff7f7" onclick="changeBg('#fff7f7')"></a> 
  </div>
`;
}

// 适应窗口大小
function winResize() {
  var offsetWid = document.documentElement.clientWidth;
  if (offsetWid <= 768) {
    winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
  } else {
    winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
  }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
  if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
  else createWinbox();
}


var $percent = document.querySelector("#nav #hotkey #top-button a.site-page i");
$percent && window.addEventListener("scroll", (function () {
  let e = document.body.scrollHeight || document.documentElement.scrollHeight,
    t = window.innerHeight || document.documentElement.clientHeight;
  $percent.dataset.percent = ((document.body.scrollTop || document.documentElement.scrollTop) / (e - t) * 100).toFixed(0)
}));

document.addEventListener('pjax:complete', todis);
document.addEventListener('DOMContentLoaded', todis);
function todis() {
  $.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
      key: 'T3EBZ-TJ7LI-YRBG2-5ZLUR-KD3OS-U6BJO',
      output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
      ipLoacation = res;
      function getDistance(e1, n1, e2, n2) {
        const R = 6371
        const { sin, cos, asin, PI, hypot } = Math

        let getPoint = (e, n) => {
          e *= PI / 180
          n *= PI / 180
          return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
        }

        let a = getPoint(e1, n1)
        let b = getPoint(e2, n2)
        let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
        let r = asin(c / 2) * 2 * R
        return Math.round(r);
      }

      function showWelcome() {

        let dist = getDistance(106.3612, 29.5951, ipLoacation.result.location.lng, ipLoacation.result.location.lat);

        let pos = ipLoacation.result.ad_info.nation;
        let posdesc;
        switch (ipLoacation.result.ad_info.nation) {
          case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
          case "美国":
            posdesc = "Make America Great Again!";
            break;
          case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
          case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
          case "法国":
            posdesc = "C'est La Vie";
            break;
          case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
          case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
          case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
          case "中国":
            pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city;
            switch (ipLoacation.result.ad_info.province) {
              case "北京市":
                posdesc = "北——京——欢迎你~~~";
                break;
              case "天津市":
                posdesc = "讲段相声吧。";
                break;
              case "重庆市":
                posdesc = "老乡, 过来吃火锅呀！！！"
                break;
              case "河北省":
                posdesc = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
                break;
              case "山西省":
                posdesc = "展开坐具长三尺，已占山河五百余。";
                break;
              case "内蒙古自治区":
                posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
                break;
              case "辽宁省":
                posdesc = "我想吃烤鸡架！";
                break;
              case "吉林省":
                posdesc = "状元阁就是东北烧烤之王。";
                break;
              case "黑龙江省":
                posdesc = "很喜欢哈尔滨大剧院。";
                break;
              case "上海市":
                posdesc = "众所周知，中国只有两个城市。";
                break;
              case "江苏省":
                switch (ipLoacation.result.ad_info.city) {
                  case "南京市":
                    posdesc = "欢迎来自安徽省南京市的小伙伴。";
                    break;
                  case "苏州市":
                    posdesc = "上有天堂，下有苏杭。";
                    break;
                  default:
                    posdesc = "散装是必须要散装的。";
                    break;
                }
                break;
              case "浙江省":
                posdesc = "东风渐绿西湖柳，雁已还人未南归。";
                break;
              case "安徽省":
                posdesc = "蚌埠住了，芜湖起飞。";
                break;
              case "福建省":
                posdesc = "井邑白云间，岩城远带山。";
                break;
              case "江西省":
                posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
                break;
              case "山东省":
                posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
                break;
              case "湖北省":
                posdesc = "来碗热干面！";
                break;
              case "湖南省":
                posdesc = "74751，长沙斯塔克。";
                break;
              case "广东省":
                posdesc = "老板来两斤福建人。";
                break;
              case "广西壮族自治区":
                posdesc = "桂林山水甲天下。";
                break;
              case "海南省":
                posdesc = "朝观日出逐白浪，夕看云起收霞光。";
                break;
              case "四川省":
                posdesc = "康康川妹子。";
                break;
              case "贵州省":
                posdesc = "茅台，学生，再塞200。";
                break;
              case "云南省":
                posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
                break;
              case "西藏自治区":
                posdesc = "躺在茫茫草原上，仰望蓝天。";
                break;
              case "陕西省":
                posdesc = "来份臊子面加馍。";
                break;
              case "甘肃省":
                posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
                break;
              case "青海省":
                posdesc = "牛肉干和老酸奶都好好吃。";
                break;
              case "宁夏回族自治区":
                posdesc = "大漠孤烟直，长河落日圆。";
                break;
              case "新疆维吾尔自治区":
                posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
                break;
              case "台湾省":
                posdesc = "我在这头，大陆在那头。";
                break;
              case "香港特别行政区":
                posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
                break;
              case "澳门特别行政区":
                posdesc = "性感荷官，在线发牌。";
                break;
              default:
                posdesc = "社会主义大法好。";
                break;
            }
            break;
          default:
            posdesc = "带我去你的国家逛逛吧。";
            break;
        }

        //判断时间
        let timeChange;
        let date = new Date();
        if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨";
        else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>中午好</span>，该摸鱼吃午饭了";
        else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
        else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>三点几啦</span>，饮茶先啦！";
        else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
        else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好</span>，夜生活嗨起来！";
        else timeChange = "夜深了，早点休息，少熬夜";

        document.getElementsByClassName("announcement_content")[0].innerHTML =
          `欢迎来自<span>${pos}</span>的小伙伴，${timeChange}<br>
        你距离Ivany约有<span>${dist}</span>公里，${posdesc}
        <br>
        <br>
        本网站的Twikoo评论系统使用<a href="https://cravatar.cn">Cravatar</a>头像系统，请自行绑定邮箱配置
        `;
      }
      showWelcome()
    }
  })
  function switchPostChart() {
    let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
    if (document.getElementById('posts-chart') && postsOption) {
      try {
        let postsOptionNew = postsOption
        postsOptionNew.title.textStyle.color = color
        postsOptionNew.xAxis.nameTextStyle.color = color
        postsOptionNew.yAxis.nameTextStyle.color = color
        postsOptionNew.xAxis.axisLabel.color = color
        postsOptionNew.yAxis.axisLabel.color = color
        postsOptionNew.xAxis.axisLine.lineStyle.color = color
        postsOptionNew.yAxis.axisLine.lineStyle.color = color
        postsOptionNew.series[0].markLine.data[0].label.color = color
        postsChart.setOption(postsOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    if (document.getElementById('tags-chart') && tagsOption) {
      try {
        let tagsOptionNew = tagsOption
        tagsOptionNew.title.textStyle.color = color
        tagsOptionNew.xAxis.nameTextStyle.color = color
        tagsOptionNew.yAxis.nameTextStyle.color = color
        tagsOptionNew.xAxis.axisLabel.color = color
        tagsOptionNew.yAxis.axisLabel.color = color
        tagsOptionNew.xAxis.axisLine.lineStyle.color = color
        tagsOptionNew.yAxis.axisLine.lineStyle.color = color
        tagsOptionNew.series[0].markLine.data[0].label.color = color
        tagsChart.setOption(tagsOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    if (document.getElementById('categories-chart') && categoriesOption) {
      try {
        let categoriesOptionNew = categoriesOption
        categoriesOptionNew.title.textStyle.color = color
        categoriesOptionNew.legend.textStyle.color = color
        if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
        categoriesChart.setOption(categoriesOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
  }
  document.querySelector(".rightMenu-item:has(.fa-moon)").addEventListener("click", function () { setTimeout(switchPostChart, 100) })
  document.getElementById("con-mode").addEventListener("click", function () { setTimeout(switchPostChart, 100) })
}

// 适配pjax
function whenDOMReady() {
  if (location.pathname == '/photos/') photos();
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// 自适应
window.onresize = () => {
  if (location.pathname == '/photos/') waterfall('.gallery-photos');
};

// 函数
function photos() {
  fetch('https://memos.mirl.ml/api/memo?openId=c7daa8fe-9633-40e6-b7e9-951d3b8e59bb').then(res => res.json()).then(data => {
      let html='', imgs = [];
      data.data.forEach(item => { imgs = imgs.concat(item.content.match(/\!\[.*?\]\(.*?\)/g)) });
      imgs.forEach(item => {
          let img = item.replace(/!\[.*?\]\((.*?)\)/g, '$1'),
              time, title, tat = item.replace(/!\[(.*?)\]\(.*?\)/g, '$1');
          if (tat.indexOf(' ') != -1) {
              time = tat.split(' ')[0];
              title = tat.split(' ')[1];
          } else title = tat

          html += `<div class="gallery-photo"><a href="${img}" data-fancybox="gallery" class="fancybox" data-thumb="${img}"><img class="photo-img" loading='lazy' decoding="async" src="${img}"></a>`;
          title ? html += `<span class="photo-title">${title}</span>` : '';
          time ? html += `<span class="photo-time">${time}</span>` : '';
          html += `</div>`;
      });

      document.querySelector('.gallery-photos.page').innerHTML = html
      imgStatus.watch('.photo-img', () => { waterfall('.gallery-photos'); });
      window.Lately && Lately.init({ target: '.photo-time' });
  }).catch()
}

var ivany = {
  // 音乐节目切换背景
  changeMusicBg: function (isChangeBg = true) {
    if (window.location.pathname != "/music/") {
      return;
    }
    const anMusicBg = document.getElementById("an_music_bg")

    if (isChangeBg) {
      // player listswitch 会进入此处
      const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
      anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
    } else {
      // 第一次进入，绑定事件，改背景
      let timer = setInterval(()=>{
        const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
        // 确保player加载完成
        console.info(anMusicBg);
        if (musiccover) {
          clearInterval(timer)
          anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
          // 绑定事件
          ivany.addEventListenerChangeMusicBg();
          
          // 暂停nav的音乐
          if (document.querySelector("#nav-music meting-js").aplayer && !document.querySelector("#nav-music meting-js").aplayer.audio.paused){
            anzhiyu.musicToggle()
          }
        }
      }, 100)
    }
  },
  addEventListenerChangeMusicBg: function () {
    const anMusicPage = document.getElementById("anMusic-page");
    const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");

    anMusicPage.querySelector("meting-js").aplayer.on('loadeddata', function () {
      ivany.changeMusicBg();
      console.info('player loadeddata');
    });

    aplayerIconMenu.addEventListener("click", function () {
      document.getElementById('menu-mask').style.display = "block";
      document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
    })

    document.getElementById('menu-mask').addEventListener("click", function () {
      if (window.location.pathname != "/music/") return;
      anMusicPage.querySelector('.aplayer-list').classList.remove("aplayer-list-hide");
    })
  },
}

// 调用
ivany.changeMusicBg(false);



document.addEventListener('DOMContentLoaded', function () {
  const coverUrl = document.getElementById('page-header').style.backgroundImage.slice(4, -1);

  document.getElementById('page_bg').style.backgroundImage = `url(${coverUrl})`;

});


var pagebg1 = {
  // 文章页面切换背景
  changeMusicBg: function (isChangeBg = true) {
    if (!window.location.pathname.startsWith("/posts/")) {
      return;
    }
    const anMusicBg = document.getElementById("page_bg")

    if (isChangeBg) {
      // player listswitch 会进入此处
      const musiccover = document.querySelector("#page-header");
      anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
    } else {
      // 第一次进入，绑定事件，改背景
      let timer = setInterval(()=>{
        const musiccover = document.querySelector("#page-header");
        // 确保player加载完成
        console.info(anMusicBg);
        if (musiccover) {
          clearInterval(timer)
          anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
          // 绑定事件
          pagebg1.addEventListenerChangeMusicBg();
        }
      }, 100)
    }
  },
  addEventListenerChangeMusicBg: function () {
    const anMusicPage = document.getElementById("page-header");

    anMusicPage.on('loadeddata', function () {
      pagebg1.changeMusicBg();
      console.info('pagebg loadeddata');
    });

  },
}
// 调用
pagebg1.changeMusicBg(false);


//分类条
categoriesBarActive()
topCategoriesBarScroll()
function categoriesBarActive(){
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  //判断是否是首页
  if (urlinfo == '/'){
    if (document.querySelector('#category-bar')){
      document.getElementById('首页').classList.add("select")
    }
  }else {
    // 验证是否是分类链接
    var pattern = /\/categories\/.*?\//;
    var patbool = pattern.test(urlinfo);
    // 获取当前的分类
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      // 获取当前分类
      var nowCategorie = valuegroup[2];
      if (document.querySelector('#category-bar')){
        document.getElementById(nowCategorie).classList.add("select");
      }
    }
  }
  
}

//鼠标控制横向滚动
function topCategoriesBarScroll(){
  if (document.getElementById("category-bar-items")){
    let xscroll = document.getElementById("category-bar-items");
  xscroll.addEventListener("mousewheel", function (e) {
    //计算鼠标滚轮滚动的距离
    let v = -e.wheelDelta / 2;
    xscroll.scrollLeft += v;
    //阻止浏览器默认方法
    e.preventDefault();
}, false);
  }
}