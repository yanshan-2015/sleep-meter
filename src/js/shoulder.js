/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/shoulder.less'
import { Button } from './component/buttonModule'
import { shouderWC } from './component/numRangeCheck'

window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('shoulder')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'waistline.html',
        footerH: '6rem',
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
            //基础检测
            if(button.checkVal(inputElement) === false){
                return
            }
            //要就检测
            if(shouderWC(inputElement.value) === false){
                inputElement.value = '';
                return
            }
            localStorage.shoudlerW = inputElement.value;
            button.clickEle();
        }
    };
};
