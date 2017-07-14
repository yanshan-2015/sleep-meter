/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/weight.less'
import { Button } from './component/buttonModule'
window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('weight')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'shoulder.html',
        top: '0.5rem',
        bottom: '1.5rem',
        reg: ''
    };
    let button,inputElement = document.getElementById('bodyW');
    let createElement = function () {
        if(!button){
            button = new Button(checkObj);
            button.createEle();
            button.showEle();
        }
    };
    inputElement.onfocus = function () {
        createElement();
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            if(button.checkVal(inputElement) === true){
                localStorage.bodyWeight = inputElement.value;
                button.clickEle();
            }
        }
    };
};