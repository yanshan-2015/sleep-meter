/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/hipline.less'
import { Button } from './component/buttonModule'

let checkObj = {
    dom: document.getElementById('footer'),
    show: 'block',
    type: true,
    text: '获取报告',
    url: 'report.html'
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
let inputElement = document.getElementById('hiplineW');
inputElement.onfocus = function () {
    createElement()
};