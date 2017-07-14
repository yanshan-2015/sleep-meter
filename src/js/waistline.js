/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/waistline.less'
import { Button } from './component/buttonModule'
window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('waistline')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'hipline.html',
        top: '3.8rem',
        bottom: '1.5rem',
        reg: ''
    };
    let button,inputElement = document.getElementById('waistlineW');
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
                localStorage.waistlineW = inputElement.value;
                button.clickEle();
            }
        }
    };
};
