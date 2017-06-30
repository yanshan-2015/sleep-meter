/**
 * Created by yanshan on 2017/6/28.
 */

import '../less/common.less'
import '../less/male-body.less'
import {Button} from './component/buttonModule'
import {choseObj} from './component/singleChoseModule'


let obj = {
    dom: document.getElementById('choseBody'),
    show: 'block',
    sex: 'male',
    num: 7,
    originImg: [
        '../images/body/girl1.png',
        '../images/body/girl2.png',
        '../images/body/girl3.png',
        '../images/body/girl4.png',
        '../images/body/girl5.png',
        '../images/body/girl6.png',
        '../images/body/girl7.png',
    ],
    activeImg: [
        '../images/body/girl1-1.png',
        '../images/body/girl2-2.png',
        '../images/body/girl3-3.png',
        '../images/body/girl4-4.png',
        '../images/body/girl5-5.png',
        '../images/body/girl6-6.png',
        '../images/body/girl7-7.png',
    ],
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



