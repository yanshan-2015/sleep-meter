/**
 * Created by yanshan on 2017/6/29.
 */
import '../less/report.less'
import femaleImg from '../images/9-girl.png'
import maleImg from '../images/9-man.png'
import stable from '../images/9-triangle.png'
import bgImg from '../images/9-color.png'
import needle from '../images/9-point.png'

import { Indicate } from './component/indicateModule';
import { WifiModule } from './component/WifiModule';
import { Distribution } from './component/distributionModule';
import { BMIFun, Index, Color } from './component/BMI-index-color'

import getwx from './component/getWx';
import setMap from './component/baiduMap';

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
        li.children[0].children[0].innerHTML = userInformation[i];
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
        currentNum: 60//BMIFun(userInformation[4],userInformation[3])    //被动态传入的数据
    };
    let BMI = document.getElementById('BMI');
    let indicate = new Indicate(indicateObj);
    indicate.createNow();
    indicate.showNow(BMI);

    //wifi模块
    let wifiObj = {
        title: '您的指数是：',
        showNum: Index(userInformation[5],userInformation[6 ]),  //被动态传入的数据
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

    //分布图模块
    let distributionObj = {
        title: '您的承重区域是：',
        showName: Color(userInformation[4],userInformation[3]), //动态传入的数据
        text: ['较软','适中','硬','加硬'],
        bgImg: bgImg,
        needle: needle,
        color: ['#40c4ff','#ff6e40','#b3ff59','#ff5177']
    };
    let colorName = distributionObj.showName;
    let color = distributionObj.color;
    let colorInfo = {
        '蓝': [-180, color[0]],
        '橙': [-120, color[1]],
        '绿': [-60, color[2]],
        '红': [0, color[3]]
    };
    let right = $('#right');
    let distribution = new Distribution(distributionObj);
    distribution.createEle();
    distribution.showEle(right);
    distribution.rotate(colorInfo[colorName][0],colorInfo[colorName][1]);

    //引入微信jssdk和地图
    getwx().then(function(res){
        setMap(res.longitude,res.latitude);
    }, function(res){
        setMap(113.62773,22.919127);
    });
    //产品详情
    $('#next').click(function () {
       location.href = 'detail.html'
    });
};
