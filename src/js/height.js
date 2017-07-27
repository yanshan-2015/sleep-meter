/**
 * Created by yanshan on 2017/6/28.
 */
import '../less/common.less'
import '../less/height.less'
import {Button} from './component/buttonModule'
import {heightC} from './component/numRangeCheck'

window.onload = function () {
    //下一步配置
    let checkObj = {
        dom: document.getElementsByClassName('height')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'weight.html',
        footerH: '6.5rem',
        reg: ''
    };
    let button,inputElement = document.getElementById('bodyH');
    //button构造
    let createElement = function () {
        if(!button){
            button = new Button(checkObj);
            button.createEle();
            button.showEle();
        }
    };
    inputElement.onfocus = function () {
        //生成button
        createElement();
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            //基础检测
            if(button.checkVal(inputElement) === false){
                return
            }
            //要就检测
            if(heightC(inputElement.value) === false){
                inputElement.value = '';
                return
            }
            localStorage.bodyHeight = inputElement.value;
            button.clickEle();
        }
    };
};


