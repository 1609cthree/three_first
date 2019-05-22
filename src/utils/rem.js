(function (doc, win) {
    var docEl = doc.documentElement, //获取当前窗口 
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',//  
        recalc = function () {
            var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth;  //当前窗口的宽小于750就为750，大于750就为当前窗口的宽
            if (!clientWidth) { return };  //
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';  //当前窗口的字体大小=100*当前窗口大小除以750
        };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)

