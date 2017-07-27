/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/waistline.less'
import { Button } from './component/buttonModule'
import { waistlineWC } from './component/numRangeCheck'
window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('waistline')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'hipline.html',
        footerH: '4.5rem',
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
            //基础检测
            if(button.checkVal(inputElement) === false){
                return
            }
            //要求检测
            if(waistlineWC(inputElement.value) === false){
                inputElement.value = '';
                return
            }
            localStorage.waistlineW = inputElement.value;
            button.clickEle();
        }
    };
};
