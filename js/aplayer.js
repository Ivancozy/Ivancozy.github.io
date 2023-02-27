function removelrc() {
    //检测是否存在歌词按钮
    if (!document.querySelector(".aplayer-icon-lrc"))
        return;
    else
    {
        //触发以后立刻移除监听
        document.removeEventListener("DOMNodeInserted",removelrc);
        //稍作延时保证触发函数时存在按钮
        setTimeout(function() {
            //以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
            document.querySelector(".aplayer-icon-lrc").click();
        }, 1);
        console.log("歌词隐藏success");
        return;
    }
}
document.addEventListener('DOMNodeInserted', removelrc)