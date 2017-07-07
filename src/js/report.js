/**
 * Created by yanshan on 2017/6/29.
 */
import '../less/report.less'
import femaleImg from '../images/9-girl.png'
import maleImg from '../images/9-man.png'

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

let sexImg = (function () {
    let img = document.getElementById('userImg');
    if(userInformation[0]==='female'){
        img.src = femaleImg;
    }else {
        img.src = maleImg;
    }
})();
let userInfo = document.getElementById('userInfo');
let allLi = userInfo.childNodes[1].children;
for(let i=0,li; li=allLi[i]; i++){
    console.log(userInformation[i]);
    li.children[0].innerHTML = userInformation[i]
}