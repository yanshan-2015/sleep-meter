/**
 * Created by yanshan on 2017/6/29.
 */
import '../less/report.less'
import femaleImg from '../images/9-girl.png'
import maleImg from '../images/9-man.png'
import stable from '../images/9-triangle.png'

import { Indicate } from './component/indicateModule';
import { WifiModule } from './component/WifiModule';
import setMap from './component/map';

window.onload = function () {

    //用户基本信息处理
    let userInformation = [
        localStorage.sexs,
        localStorage.bodyShope,
        localStorage.age,
        localStorage.bodyHeight,
        localStorage.bodyWeight,
        localStorage.shoudlerW,
        localStorage.waistlineW,
        localStorage.hiplineW
    ];
    let userInfo = document.getElementById('userInfo');
    let allLi = userInfo.childNodes[1].children;
    for(let i=0,li; li=allLi[i]; i++){
        console.log(userInformation[i]);
        li.children[0].innerHTML = userInformation[i]
    }
    //男女头像处理
    let sexImg = (function () {
        let img = document.getElementById('userImg');
        if(userInformation[0]==='female'){
            img.src = femaleImg;
        }else {
            img.src = maleImg;
        }
    })();

    //indicate模块
    let indicateObj = {
        title: '您的体质指数：',
        num: 5,
        text: ['过轻','正常','过重','肥胖','特肥胖'],
        color: ['#6ddec0','#9fe04f','#ffc240','#ff6e40','#ff5177'],
        stable: stable,
        currentNum: 50.6    //被动态传入的数据
    };
    let BMI = document.getElementById('BMI');
    let indicate = new Indicate(indicateObj);
    indicate.createNow();
    indicate.showNow(BMI);

    //wifi模块
    let wifiObj = {
        title: '您的指数是：',
        showNum: 3,  //被动态传入的数据
        num: 5,
        text:['1','2','3','4','5'],
        width: 0.16,
        height: ['0.8rem','1.06rem','1.33rem','1.6rem','1.87rem'],
        color: '#74efce'
    };
    let left = document.getElementById('left');
    let wifi = new WifiModule(wifiObj);
    wifi.createEle();
    wifi.showEle(left);

    setMap();
};
