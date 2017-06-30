/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/waistline.less'
import { Button } from './component/buttonModule'

let checkObj = {
    dom: document.getElementById('footer'),
    show: 'block',
    type: true,
    text: '下一步',
    url: 'hipline.html'
};

let createElement = function () {
    if(!div){
        div = new Button(checkObj);
        div.show(checkObj);
    }
    let nextButton = document.getElementById('nextButton');
    nextButton.onclick = function () {
        div.clicks(checkObj);
    }
};

let div;
let inputElement = document.getElementById('waistlineW');
inputElement.onfocus = function () {
    createElement()
};
