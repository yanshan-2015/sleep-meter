/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/shoulder.less'
import { Button } from './component/buttonModule'
window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('shoulder')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'waistline.html',
        top: '2.8rem',
        bottom: '1.5rem',
        reg: ''
    };
    let button,inputElement = document.getElementById('shoulderW');
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
                localStorage.shoudlerW = inputElement.value;
                button.clickEle();
            }
        }
    };
};
