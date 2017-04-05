/**
 * Created by 顾 磊 on 2017/2/17.
 */
window.onload = function () {

    function myTap(div_id, autoRun) {
        var oBanner = document.getElementById('banner');
        var oList = document.getElementById('list');
        var aImg = oList.getElementsByTagName('img');
        var aBtn = document.getElementById('btn');
        var oButton = aBtn.getElementsByTagName('button');
        var nav_txt = document.getElementById('nav-txt');
        var aLi = nav_txt.getElementsByTagName('li');
        var News_txt = document.getElementById('news_txt');
        var oLi = News_txt.getElementsByTagName('a');
        var pic_news = document.getElementById('pic_news');
        var aImg2 = pic_news.getElementsByTagName('img');
        var n = 0;
        var timer;

        for (var i = 0; i < oButton.length; i++) {
            oButton[i].onclick = function () {
                n = this.index;
                change_tab(n);
            };
            oButton[i].index = i;//发牌照
        }

        function change_tab(num) {
            for (var j = 0; j < oButton.length; j++) {
                oButton[j].className = "";
                aImg[j].style.display = "none";
            }
            oButton[num].className = "ac";
            aImg[num].style.display = "block";
        }

        if (autoRun) {
            function run() {
                timer = setInterval(function () {
                    n++;
                    if (n == oButton.length) {
                        n = 0;
                    }
                    change_tab(n);
                }, 3000);
            }

            run();
            oBanner.onmouseover = function () {
                clearInterval(timer);

            };
            oBanner.onmouseout = function () {
                run();
            };
        }


        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function () {
                var thisSubMenu = this.getElementsByTagName('ul')[0];
                if (thisSubMenu) {
                    thisSubMenu.style.display = "block";
                }

            };
            aLi[i].onmouseout = function () {
                var thisSubMenu = this.getElementsByTagName('ul')[0];
                if (thisSubMenu) {
                    thisSubMenu.style.display = "none";
                }
            };
        }

        for (var i = 0; i < aImg2.length; i++) {
            oLi[i].index = i;
            oLi[i].onmouseover = function () {
                for (var j = 0; j < aImg2.length; j++) {
                    aImg2[j].style.display = "none";
                }
                aImg2[this.index].style.display = "block";
            }
        }
    }

    myTap("div_id", true);

};
