/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/weight.less'
import { Button } from './component/buttonModule'
import { weightC } from './component/numRangeCheck'
window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('weight')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'shoulder.html',
        footerH: '4rem',
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
            //基础检测
            if(button.checkVal(inputElement) === false){
                return
            }
            //要就检测
            if(weightC(inputElement.value) === false){
                inputElement.value = '';
                return
            }
            localStorage.bodyWeight = inputElement.value;
            button.clickEle();
        }
    };
};