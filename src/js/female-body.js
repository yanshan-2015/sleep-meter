/**
 * Created by yanshan on 2017/6/28.
 */

import '../less/common.less'
import '../less/male-body.less'
import {Button} from './component/buttonModule'
import {choseObj} from './component/singleChoseModule'

import girl1 from '../images/body/girl1.png'
import girl2 from '../images/body/girl2.png'
import girl3 from '../images/body/girl3.png'
import girl4 from '../images/body/girl4.png'
import girl5 from '../images/body/girl5.png'
import girl6 from '../images/body/girl6.png'
import girl7 from '../images/body/girl7.png'

import girl1_1 from '../images/body/girl1-1.png'
import girl2_2 from '../images/body/girl2-2.png'
import girl3_3 from '../images/body/girl3-3.png'
import girl4_4 from '../images/body/girl4-4.png'
import girl5_5 from '../images/body/girl5-5.png'
import girl6_6 from '../images/body/girl6-6.png'
import girl7_7 from '../images/body/girl7-7.png'

let obj = {
    dom: document.getElementById('choseBody'),
    show: 'block',
    sex: 'male',
    num: 7,
    originImg: [ girl1, girl2, girl3, girl4, girl5, girl6, girl7 ],
    activeImg: [ girl1_1, girl2_2, girl3_3, girl4_4, girl5_5, girl6_6, girl7_7 ],
    imgText: ['V型','H型','长方型','苹果型','梨型','细沙漏型','粗沙漏型']
};

let createElement = (function () {
    let choseObject = new choseObj(obj);
    choseObject.show(obj);

    let clickPare = document.getElementsByClassName('chose')[0];
    let lis = clickPare.childNodes;
    for(let i=0,li; li= lis[i]; i++){
        li.onclick = function () {
            choseObject.click(obj,i);
            localStorage.femaleBodyShope = this.childNodes[1].innerHTML;
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



