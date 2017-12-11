/**
 * Created by yanshan on 2017/7/12.
 */

import '../less/swiper.css'
import '../less/detail.less'

$(function () {
    let indexNum = getQueryString("indexNum");
    switch (indexNum){
        case 1:
            $('.productImg>img').attr("src",'../images/pro1011.png');
            $('.levelImg>img').attr("src",'../images/pro1011_1.png');
            $('.titleText p').text('· MCD2-1011');
            $('.titleText span').text('（原DR-1011）');
            break;
        case 2:
            $('.productImg>img').attr("src",'../images/pro1022.png');
            $('.levelImg>img').attr("src",'../images/pro1022_1.png');
            $('.titleText p').text('· MCD2-1022');
            $('.titleText span').text('（原DR-1022）');
            break;
        default:
            $('.productImg>img').attr("src",'../images/pro1033.png');
            $('.levelImg>img').attr("src",'../images/pro1033_1.png');
            $('.titleText p').text('· MCD2-1033');
            $('.titleText span').text('（原DR-1033）');
    }
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
});