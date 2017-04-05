/**
 * Created by 顾 磊 on 2017/2/23.
 */
window.onload=function(){
    var nav_txt = document.getElementById('nav-txt');
    var aLi = nav_txt.getElementsByTagName('li');
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
};