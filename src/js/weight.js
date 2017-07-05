/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/weight.less'
import { Button } from './component/buttonModule'

let checkObj = {
    dom: document.getElementById('footer'),
    show: 'block',
    type: true,
    text: '下一步',
    url: 'shoulder.html'
};

let createElement = function () {
    if(!div){
        div = new Button(checkObj);
        div.show(checkObj);
    }
    let nextButton = document.getElementById('nextButton');
    nextButton.onclick = function () {
        localStorage.bodyWeight = inputElement.value;
        div.clicks(checkObj);
    }
};

let div;
let inputElement = document.getElementById('bodyW');
inputElement.onfocus = function () {
    createElement()
};
