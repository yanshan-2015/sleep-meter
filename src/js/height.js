/**
 * Created by yanshan on 2017/6/28.
 */
import '../less/common.less'
import '../less/height.less'
import {Button} from './component/buttonModule'


let checkObj = {
    dom: document.getElementsByClassName('height')[0],
    show: 'block',
    type: true,
    text: '下一步',
    url: 'weight.html'
};

let div;
let createElement = function () {
    if(!div){
        div = new Button(checkObj);
        div.show(checkObj);
    }
    let nextButton = document.getElementById('nextButton');
    nextButton.onclick = function () {
        localStorage.bodyHeight = inputElement.value;
        div.clicks(checkObj);
    }
};

let inputElement = document.getElementById('bodyH');
inputElement.onfocus = function () {
    createElement();
};



