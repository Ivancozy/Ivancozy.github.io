var percentFlag=!1;function essayScroll(){const e=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;result<=99||(result=99),!percentFlag&&e+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?setTimeout((()=>{waterfall("#waterfall")}),500):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const t=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<t||90<result)&&(percentFlag=!0)}function replaceAll(e,t,n){return e.split(t).join(n)}function browserTC(){btf.snackbarShow(""),Snackbar.show({text:"浏览器版本较低，网站样式可能错乱",actionText:"关闭",duration:"6000",pos:"bottom-right"})}function browserVersion(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,n=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!t),a=e.indexOf("Firefox")>-1,o=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,i=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");n?e.split("Edge/")[1].split(".")[0]<90&&browserTC():a?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():o?e.split("OPR/")[1].split(".")[0]<80&&browserTC():i&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,t){let n=new Date((new Date).getTime()+24*t*60*60*1e3).toGMTString();for(let t in e)document.cookie=t+"="+e[t]+";expires="+n}function getCookie(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function musicBindEvent(){document.querySelector("#nav-music .aplayer-music").addEventListener("click",(function(){anzhiyu.musicTelescopic()}))}(anzhiyu={diffDate:function(e,t=!1){const n=new Date,a=new Date(e),o=n.getTime()-a.getTime(),i=36e5,l=24*i;let r;if(t){const e=o/l,t=o/i,n=o/6e4;r=o/2592e6>=1?a.toLocaleDateString().replace(/\//g,"-"):e>=1?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.day:t>=1?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.hour:n>=1?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just}else r=parseInt(o/l);return r},changeTimeInEssay:function(){document.querySelector("#bber")&&document.querySelectorAll("#bber time").forEach((function(e){var t=e,n=t.getAttribute("datetime");t.innerText=anzhiyu.diffDate(n,!0),t.style.display="inline"}))},reflashEssayWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},commentText:function(e){"undefined"!=e&&"null"!=e||(e="好棒！");var t=document.getElementsByClassName("el-textarea__inner")[0],n=document.createEvent("HTMLEvents");if(t){n.initEvent("input",!0,!0);var a=replaceAll(e,"\n","\n> ");t.value="> "+a+"\n\n",t.dispatchEvent(n);var o=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,o-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}},initIndexEssay:function(){setTimeout((()=>{let e=new Swiper(".essay_bar_swiper_container",{passiveListeners:!0,direction:"vertical",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0}),t=document.getElementById("bbtalk");null!==t&&(t.onmouseenter=function(){e.autoplay.stop()},t.onmouseleave=function(){e.autoplay.start()})}),100)}}).initIndexEssay(),anzhiyu.changeTimeInEssay(),anzhiyu.reflashEssayWaterFall(),1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion());var anzhiyu_musicPlaying=!1,anzhiyu_musicStretch=!1,anzhiyu_musicFirst=!1,anzhiyu={musicToggle:function(e=!0){anzhiyu_musicFirst||(musicBindEvent(),anzhiyu_musicFirst=!0);anzhiyu_musicPlaying?(document.querySelector("#nav-music").classList.remove("playing"),document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",anzhiyu_musicPlaying=!1,document.querySelector("#nav-music").classList.remove("stretch"),anzhiyu_musicStretch=!1):(document.querySelector("#nav-music").classList.add("playing"),anzhiyu_musicPlaying=!0,document.querySelector("#nav-music").classList.add("stretch"),anzhiyu_musicStretch=!0),e&&document.querySelector("#nav-music meting-js").aplayer.toggle()},musicTelescopic:function(){anzhiyu_musicStretch?(document.querySelector("#nav-music").classList.remove("stretch"),anzhiyu_musicStretch=!1):(document.querySelector("#nav-music").classList.add("stretch"),anzhiyu_musicStretch=!0)},musicSkipBack:function(){document.querySelector("#nav-music meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("#nav-music meting-js").aplayer.skipForward()},musicGetName:function(){for(var e=$(".aplayer-title"),t=[],n=e.length-1;n>=0;n--)t[n]=e[n].innerText;return t[0]}};function tonav(){document.getElementById("name-container").setAttribute("style","opacity:0");var e=$(window).scrollTop();$(window).scroll((function(){var t=$(window).scrollTop();t>e?(document.getElementById("name-container").setAttribute("style",""),document.getElementsByClassName("menus_items")[1].setAttribute("style","opacity:0")):(document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","opacity:0")),e=t})),document.getElementById("page-name").innerText=document.title}function clear(){clearInternal(timer),document.querySelector(".comment-barrage").innerHtml="",load()}function load(){timer=setInteral((()=>{popCommentBarrage()}),114514)}function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let n=JSON.parse(localStorage.getItem(e));if(n){let e=Date.now()-n.time;if(e<60*t*1e3&&e>-1)return n.data}return 0}document.getElementsByClassName("back-home-button")[0].hover=function(){document.getElementsByClassName("back-menu-list-groups")[0].setAttribute("style","opacity:1 !important; display:block !important; pointer-events: all !important")},document.addEventListener("pjax:complete",tonav,clear,bannertime),document.addEventListener("DOMContentLoaded",tonav,load,bannertime);try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,t){let n=document.getElementById("web_bg");"#"==e.charAt(0)?(n.style.backgroundColor=e,n.style.backgroundImage="none"):n.style.backgroundImage=e,t||saveData("blogbg",e)}var winbox="";function createWinbox(){let e=document.createElement("div");document.body.appendChild(e),winbox=WinBox({id:"changeBgBox",index:999,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"60%",background:"var(--ivany-blue)",onmaximize:()=>{e.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{e.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n  <div id="article-container" style="padding:10px;">\n  \n  <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n  <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>\n  <details>\n  <summary>点击展开手机图片</summary>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xcb9mk.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xcb9mk.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xc1022.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xc1022.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xbxrjy.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xbxrjy.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xbsvyg.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xbsvyg.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xbqd6n.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xbqd6n.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xb7snv.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xb7snv.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xb500d.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xb500d.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xasujh.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xasujh.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/xar72s.webp)" class="pimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/xar72s.webp)\')">\n  </a>\n  </div>\n  </details>\n  <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n  <details>\n  <summary>点击展开电脑图片</summary>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zdlz4l.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zdlz4l.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zdnnc7.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zdnnc7.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zds3gq.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zds3gq.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/ze9e49.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/ze9e49.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zeel8l.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zeel8l.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zevq9c.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zevq9c.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zfdz6b.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfm4xp.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zfm4xp.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfmzij.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zfmzij.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zfwm74.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zfwm74.webp)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.mirl.ml/i/ivan/2023/02/22/zg1t54.webp)" class="dimgbox" onclick="changeBg(\'url(https://img.mirl.ml/i/ivan/2023/02/22/zg1t54.webp)\')">\n  </a>\n  </div>\n  </details>\n  \n  \n  <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #4AC29A, #BDFFF3)" onclick="changeBg(\'linear-gradient(to right, #4AC29A, #BDFFF3)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #B2FEFA, #0ED2F7)" onclick="changeBg(\'linear-gradient(to right, #B2FEFA, #0ED2F7)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #44A08D, #093637)" onclick="changeBg(\'linear-gradient(to right, #44A08D, #093637)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #F0F2F0, #000C40)" onclick="changeBg(\'linear-gradient(to right, #F0F2F0, #000C40)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #E8CBC0, #636FA4)" onclick="changeBg(\'linear-gradient(to right, #E8CBC0, #636FA4)\')">\n  </a>\n  </div>\n  \n  <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg(\'#7D9D9C\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fae3d9" onclick="changeBg(\'#fae3d9\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #bbded6" onclick="changeBg(\'#bbded6\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ffb6b9" onclick="changeBg(\'#ffb6b9\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d9d9f3" onclick="changeBg(\'#d9d9f3\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ceefe4" onclick="changeBg(\'#ceefe4\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #6b778d" onclick="changeBg(\'#6b778d\')"></a> \n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #fff7f7" onclick="changeBg(\'#fff7f7\')"></a> \n  </div>\n'}function winResize(){var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","90%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}var $percent=document.querySelector("#nav #hotkey #top-button a.site-page i");function todis(){function e(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4C4948":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let t=postsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,postsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("tags-chart")&&tagsOption)try{let t=tagsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,tagsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("categories-chart")&&categoriesOption)try{let t=categoriesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,categoryParentFlag||(t.series[0].label.color=e),categoriesChart.setOption(t)}catch(e){console.log(e)}}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"T3EBZ-TJ7LI-YRBG2-5ZLUR-KD3OS-U6BJO",output:"jsonp"},dataType:"jsonp",success:function(e){ipLoacation=e,function(){let e,t,n=function(e,t,n,a){const{sin:o,cos:i,asin:l,PI:r,hypot:c}=Math;let s=(e,t)=>(e*=r/180,{x:i(t*=r/180)*i(e),y:i(t)*o(e),z:o(t)}),m=s(e,t),d=s(n,a),g=2*l(c(m.x-d.x,m.y-d.y,m.z-d.z)/2)*6371;return Math.round(g)}(106.3612,29.5951,ipLoacation.result.location.lng,ipLoacation.result.location.lat),a=ipLoacation.result.ad_info.nation;switch(ipLoacation.result.ad_info.nation){case"日本":e="よろしく，一起去看樱花吗";break;case"美国":e="Make America Great Again!";break;case"英国":e="想同你一起夜乘伦敦眼";break;case"俄罗斯":e="干了这瓶伏特加！";break;case"法国":e="C'est La Vie";break;case"德国":e="Die Zeit verging im Fluge.";break;case"澳大利亚":e="一起去大堡礁吧！";break;case"加拿大":e="拾起一片枫叶赠予你";break;case"中国":switch(a=ipLoacation.result.ad_info.province+" "+ipLoacation.result.ad_info.city,ipLoacation.result.ad_info.province){case"北京市":e="北——京——欢迎你~~~";break;case"天津市":e="讲段相声吧。";break;case"重庆市":e="老乡, 过来吃火锅呀！！！";break;case"河北省":e="山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";break;case"山西省":e="展开坐具长三尺，已占山河五百余。";break;case"内蒙古自治区":e="天苍苍，野茫茫，风吹草低见牛羊。";break;case"辽宁省":e="我想吃烤鸡架！";break;case"吉林省":e="状元阁就是东北烧烤之王。";break;case"黑龙江省":e="很喜欢哈尔滨大剧院。";break;case"上海市":e="众所周知，中国只有两个城市。";break;case"江苏省":switch(ipLoacation.result.ad_info.city){case"南京市":e="欢迎来自安徽省南京市的小伙伴。";break;case"苏州市":e="上有天堂，下有苏杭。";break;default:e="散装是必须要散装的。"}break;case"浙江省":e="东风渐绿西湖柳，雁已还人未南归。";break;case"安徽省":e="蚌埠住了，芜湖起飞。";break;case"福建省":e="井邑白云间，岩城远带山。";break;case"江西省":e="落霞与孤鹜齐飞，秋水共长天一色。";break;case"山东省":e="遥望齐州九点烟，一泓海水杯中泻。";break;case"湖北省":e="来碗热干面！";break;case"湖南省":e="74751，长沙斯塔克。";break;case"广东省":e="老板来两斤福建人。";break;case"广西壮族自治区":e="桂林山水甲天下。";break;case"海南省":e="朝观日出逐白浪，夕看云起收霞光。";break;case"四川省":e="康康川妹子。";break;case"贵州省":e="茅台，学生，再塞200。";break;case"云南省":e="玉龙飞舞云缠绕，万仞冰川直耸天。";break;case"西藏自治区":e="躺在茫茫草原上，仰望蓝天。";break;case"陕西省":e="来份臊子面加馍。";break;case"甘肃省":e="羌笛何须怨杨柳，春风不度玉门关。";break;case"青海省":e="牛肉干和老酸奶都好好吃。";break;case"宁夏回族自治区":e="大漠孤烟直，长河落日圆。";break;case"新疆维吾尔自治区":e="驼铃古道丝绸路，胡马犹闻唐汉风。";break;case"台湾省":e="我在这头，大陆在那头。";break;case"香港特别行政区":e="永定贼有残留地鬼嚎，迎击光非岁玉。";break;case"澳门特别行政区":e="性感荷官，在线发牌。";break;default:e="社会主义大法好。"}break;default:e="带我去你的国家逛逛吧。"}let o=new Date;t=o.getHours()>=5&&o.getHours()<11?"<span>上午好</span>，一日之计在于晨":o.getHours()>=11&&o.getHours()<13?"<span>中午好</span>，该摸鱼吃午饭了":o.getHours()>=13&&o.getHours()<15?"<span>下午好</span>，懒懒地睡个午觉吧！":o.getHours()>=15&&o.getHours()<16?"<span>三点几啦</span>，饮茶先啦！":o.getHours()>=16&&o.getHours()<19?"<span>夕阳无限好！</span>":o.getHours()>=19&&o.getHours()<24?"<span>晚上好</span>，夜生活嗨起来！":"夜深了，早点休息，少熬夜",document.getElementsByClassName("announcement_content")[0].innerHTML=`欢迎来自<span>${a}</span>的小伙伴，${t}<br>\n        你距离Ivany约有<span>${n}</span>公里，${e}\n        <br>\n        <br>\n        本网站的Twikoo评论系统使用<a href="https://cravatar.cn">Cravatar</a>头像系统，请自行绑定邮箱配置\n        `}()}}),document.querySelector(".rightMenu-item:has(.fa-moon)").addEventListener("click",(function(){setTimeout(e,100)})),document.getElementById("con-mode").addEventListener("click",(function(){setTimeout(e,100)}))}function whenDOMReady(){"/photos/"==location.pathname&&photos()}function photos(){fetch("https://memos.mirl.ml/api/memo?openId=c7daa8fe-9633-40e6-b7e9-951d3b8e59bb").then((e=>e.json())).then((e=>{let t="",n=[];e.data.forEach((e=>{n=n.concat(e.content.match(/\!\[.*?\]\(.*?\)/g))})),n.forEach((e=>{let n,a,o=e.replace(/!\[.*?\]\((.*?)\)/g,"$1"),i=e.replace(/!\[(.*?)\]\(.*?\)/g,"$1");-1!=i.indexOf(" ")?(n=i.split(" ")[0],a=i.split(" ")[1]):a=i,t+=`<div class="gallery-photo"><a href="${o}" data-fancybox="gallery" class="fancybox" data-thumb="${o}"><img class="photo-img" loading='lazy' decoding="async" src="${o}"></a>`,a&&(t+=`<span class="photo-title">${a}</span>`),n&&(t+=`<span class="photo-time">${n}</span>`),t+="</div>"})),document.querySelector(".gallery-photos.page").innerHTML=t,imgStatus.watch(".photo-img",(()=>{waterfall(".gallery-photos")})),window.Lately&&Lately.init({target:".photo-time"})})).catch()}$percent&&window.addEventListener("scroll",(function(){let e=document.body.scrollHeight||document.documentElement.scrollHeight,t=window.innerHeight||document.documentElement.clientHeight;$percent.dataset.percent=((document.body.scrollTop||document.documentElement.scrollTop)/(e-t)*100).toFixed(0)})),document.addEventListener("pjax:complete",todis),document.addEventListener("DOMContentLoaded",todis),whenDOMReady(),document.addEventListener("pjax:complete",whenDOMReady),window.onresize=()=>{"/photos/"==location.pathname&&waterfall(".gallery-photos")};var ivany={changeMusicBg:function(e=!0){if("/music/"!=window.location.pathname)return;const t=document.getElementById("an_music_bg");if(e){const e=document.querySelector("#anMusic-page .aplayer-pic");t.style.backgroundImage=e.style.backgroundImage}else{let e=setInterval((()=>{const n=document.querySelector("#anMusic-page .aplayer-pic");console.info(t),n&&(clearInterval(e),t.style.backgroundImage=n.style.backgroundImage,ivany.addEventListenerChangeMusicBg(),document.querySelector("#nav-music meting-js").aplayer&&!document.querySelector("#nav-music meting-js").aplayer.audio.paused&&anzhiyu.musicToggle())}),100)}},addEventListenerChangeMusicBg:function(){const e=document.getElementById("anMusic-page"),t=e.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");e.querySelector("meting-js").aplayer.on("loadeddata",(function(){ivany.changeMusicBg(),console.info("player loadeddata")})),t.addEventListener("click",(function(){document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"})),document.getElementById("menu-mask").addEventListener("click",(function(){"/music/"==window.location.pathname&&e.querySelector(".aplayer-list").classList.remove("aplayer-list-hide")}))}};ivany.changeMusicBg(!1),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("post-top-bg").style.backgroundImage.slice(4,-1);document.getElementById("page_bg").style.backgroundImage=`url(${e})`}));var pagebg1={changeMusicBg:function(e=!0){if(!window.location.pathname.startsWith("/posts/"))return;const t=document.getElementById("page_bg");if(e){const e=document.querySelector("#post-top-bg");t.style.backgroundImage=e.style.backgroundImage}else{let e=setInterval((()=>{const n=document.querySelector("#post-top-bg");if(console.info(t),n){if(clearInterval(e),t.style.backgroundImage=n.style.backgroundImage,window.location.pathname.startsWith("/posts/")){var a=document.getElementById("post-top-bg").style.backgroundImage.slice(5,-2);a.crossOrigin="Anonymous",console.log(a),void 0!==a?RGBaster.colors(a,{paletteSize:30,exclude:["rgb(255,255,255)","rgb(0,0,0)","rgb(254,254,254)"],success:function(e){if("rgb(66,90,239)"!=e.dominant){const n=e.dominant.match(/\d+/g);var t=`rgb(${n[0]},${n[1]},${n[2]})`;"light"==getContrastYIQ(colorHex(t))&&(t=LightenDarkenColor(colorHex(t),-40)),document.styleSheets[0].addRule(":root","--ivany-theme:"+t+"!important"),document.styleSheets[0].addRule(":root","--ivany-main-op:"+t+"23!important"),document.styleSheets[0].addRule(":root","--ivany-main-op-deep:"+t+"dd!important"),document.styleSheets[0].addRule(":root","--ivany-main-none:"+t+"00!important"),ivany.initThemeColor(),document.getElementById("post-top-cover").classList.add("loaded")}}}):(document.styleSheets[0].addRule(":root","--ivany-theme-auto: var(--ivany-theme)!important"),document.styleSheets[0].addRule(":root","--ivany-main-op: var(--ivany-theme-op)!important"),document.styleSheets[0].addRule(":root","--ivany-main-op-deep:var(--ivany-theme-op-deep)!important"),document.styleSheets[0].addRule(":root","--ivany-main-none: var(--ivany-theme-none)!important"),ivany.initThemeColor())}pagebg1.addEventListenerChangeMusicBg()}}),100)}},addEventListenerChangeMusicBg:function(){document.getElementById("post-top-bg").on("loadeddata",(function(){pagebg1.changeMusicBg(),console.info("pagebg loadeddata")}))}};function categoriesBarActive(){var e=window.location.pathname;if("/"==(e=decodeURIComponent(e)))document.querySelector("#category-bar")&&document.getElementById("首页").classList.add("select");else{if(/\/categories\/.*?\//.test(e)){var t=e.split("/")[2];document.querySelector("#category-bar")&&document.getElementById(t).classList.add("select")}}}function topCategoriesBarScroll(){if(document.getElementById("category-bar-items")){let e=document.getElementById("category-bar-items");e.addEventListener("mousewheel",(function(t){let n=-t.wheelDelta/2;e.scrollLeft+=n,t.preventDefault()}),!1)}}function bannertime(){var e,t=document.getElementById("topGroup"),n=document.getElementById("todayCard"),a=!1;t.addEventListener("mouseover",(function(){clearTimeout(e),e=setTimeout((function(){a=!0,n.style.opacity=0,setTimeout((()=>{n.style.zIndex=-1}),300)}),1e3)})),t.addEventListener("mouseout",(function(){clearTimeout(e),a&&(e=setTimeout((function(){n.style.opacity=1,n.style.zIndex=2}),500))}))}pagebg1.changeMusicBg(!1),categoriesBarActive(),topCategoriesBarScroll(),bannertime();var mySwiper=new Swiper(".banner-swiper",{direction:"horizontal",loop:!0,autoplay:{delay:1e4,stopOnLastSlide:!1,disableOnInteraction:!1,pauseOnMouseEnter:!1},mousewheel:!0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}});