/**
 * Created by yanshan on 2017/6/28.
 */
import '../less/common.less'
import '../less/height.less'
import {Button} from './component/buttonModule'

window.onload = function () {
    let checkObj = {
        dom: document.getElementsByClassName('height')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'weight.html',
        top: '6.2rem',
        bottom: '1.5rem',
        reg: ''
    };
    let button,inputElement = document.getElementById('bodyH');
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
                localStorage.bodyHeight = inputElement.value;
                button.clickEle();
            }
        }
    };
};


