function coverColor(){var e=document.getElementById("post-top-bg")?.style.backgroundImage.slice(5,-2);if(void 0!==e)RGBaster.colors(e,{paletteSize:30,exclude:["rgb(255,255,255)","rgb(0,0,0)","rgb(254,254,254)"],success:function(e){if("rgb(66,90,239)"!=e.dominant){const a=e.dominant.match(/\d+/g);var t=`rgb(${a[0]},${a[1]},${a[2]})`;"light"==getContrastYIQ(colorHex(t))&&(t=LightenDarkenColor(colorHex(t),-40));var n=document.createElement("style"),r=":root { --ivany-theme: "+t+" !important; --ivany-main-op: "+t+"23 !important; --ivany-main-none: "+t+"00 !important; --ivany-main-op-deep: "+t+"dd !important; }";n.appendChild(document.createTextNode(r)),document.head.appendChild(n),ivany.initThemeColor(),document.getElementById("post-top-cover").classList.add("loaded")}}});else{var t=document.createElement("style");t.appendChild(document.createTextNode(":root { --ivany-theme: var(--ivany-main) !important; --ivany-main-op: var(--ivany-theme-op) !important; --ivany-main-none: var(--ivany-theme-none) !important; --ivany-main-op-deep: var(--ivany-theme-op-deep) !important; }")),document.head.appendChild(t),ivany.initThemeColor()}}function colorHex(e){var t=e;if(/^(rgb|RGB)/.test(t)){for(var n=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),r="#",a=0;a<n.length;a++){var o=Number(n[a]).toString(16);"0"===o&&(o+=o),r+=o}return 7!==r.length&&(r=t),r}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))return t;var i=t.replace(/#/,"").split("");if(6===i.length)return t;if(3===i.length){var c="#";for(a=0;a<i.length;a+=1)c+=i[a]+i[a];return c}}function colorRgb(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var n="#",r=1;r<4;r+=1)n+=t.slice(r,r+1).concat(t.slice(r,r+1));t=n}var a=[];for(r=1;r<7;r+=2)a.push(parseInt("0x"+t.slice(r,r+2)));return"rgb("+a.join(",")+")"}return t}function LightenDarkenColor(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var r=parseInt(e,16),a=(r>>16)+t;a>255?a=255:a<0&&(a=0);var o=(r>>8&255)+t;o>255?o=255:o<0&&(o=0);var i=(255&r)+t;return i>255?i=255:i<0&&(i=0),(n?"#":"")+String("000000"+(i|o<<8|a<<16).toString(16)).slice(-6)}function getContrastYIQ(e){var t,n=colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return t=299*n[1]+587*n[2]+114*n[3],(t/=255e3)>=.5?"light":"dark"}document.addEventListener("pjax:complete",coverColor);