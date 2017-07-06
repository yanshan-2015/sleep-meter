/**
 * Created by yanshan on 2017/6/28.
 */

import '../less/common.less'
import '../less/male-body.less'
import {Button} from './component/buttonModule'
import {choseObj} from './component/singleChoseModule'

import img1 from '../images/body/1.png'
import img2 from '../images/body/2.png'
import img3 from '../images/body/3.png'
import img4 from '../images/body/4.png'
import img5 from '../images/body/5.png'
import img6 from '../images/body/6.png'

import img1_1 from '../images/body/1-1.png'
import img2_1 from '../images/body/2-1.png'
import img3_1 from '../images/body/3-1.png'
import img4_1 from '../images/body/4-1.png'
import img5_1 from '../images/body/5-1.png'
import img6_1 from '../images/body/6-1.png'


let obj = {
    dom: document.getElementById('choseBody'),
    show: 'block',
    sex: 'male',
    num: 6,
    originImg: [img1,img2,img3,img4,img5,img6],
    activeImg: [img1_1,img2_1,img3_1,img4_1,img5_1,img6_1],
    imgText: ['椭圆型','圆型','正方型','长方型','沙漏型','V型']
};

let createElement = (function () {
    let choseObject = new choseObj(obj);
    choseObject.show(obj);

    let clickPare = document.getElementsByClassName('chose')[0];
    let lis = clickPare.childNodes;
    for(let i=0,li; li= lis[i]; i++){
        li.onclick = function () {
            choseObject.click(obj,i);
            localStorage.maleBodyShope = this.childNodes[1].innerHTML;
        };
    }
})();

let checkObj = {
    dom: document.getElementById('footer'),
    show: 'block',
    type: true,
    text: '下一步',
    url: 'height.html'
};

let button;
let inputElement = document.getElementById('age');
inputElement.onfocus = function () {
    if(!button){
        button = new Button(checkObj);
        button.show(checkObj);
    }
    let nextButton = document.getElementById('nextButton');
    nextButton.onclick = function () {
        button.clicks(checkObj);
    };
};



