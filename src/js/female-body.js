/**
 * Created by yanshan on 2017/6/28.
 */

import '../less/common.less'
import '../less/male-body.less'
import {Button} from './component/buttonModule'
import {choseObj} from './component/singleChoseModule'
import {ageC} from './component/numRangeCheck'

import girl1 from '../images/body/girl1.png'
import girl2 from '../images/body/girl2.png'
import girl3 from '../images/body/girl3.png'
import girl4 from '../images/body/girl4.png'
import girl5 from '../images/body/girl5.png'
import girl6 from '../images/body/girl6.png'
import girl7 from '../images/body/girl7.png'

import girl1_1 from '../images/body/girl1-1.png'
import girl2_2 from '../images/body/girl2-2.png'
import girl3_3 from '../images/body/girl3-3.png'
import girl4_4 from '../images/body/girl4-4.png'
import girl5_5 from '../images/body/girl5-5.png'
import girl6_6 from '../images/body/girl6-6.png'
import girl7_7 from '../images/body/girl7-7.png'
window.onload = function () {
    //多项单选配置
    let obj = {
        dom: document.getElementById('choseBody'),
        show: 'block',
        sex: 'male',
        num: 7,
        originImg: [ girl1, girl2, girl3, girl4, girl5, girl6, girl7 ],
        activeImg: [ girl1_1, girl2_2, girl3_3, girl4_4, girl5_5, girl6_6, girl7_7 ],
        imgText: ['V型','H型','长方型','苹果型','梨型','细沙漏型','粗沙漏型']
    };
    //下一步button配置
    let checkObj = {
        dom: document.getElementById('footer'),
        show: 'block',
        type: true,
        text: '下一步',
        url: 'height.html',
        top: '1.2rem',
        bottom: '1.5rem',
        reg: ''
    };
    //体型处理
    let createElement = (function () {
        let choseObject = new choseObj(obj);
        choseObject.show(obj);

        let clickPare = document.getElementsByClassName('chose')[0];
        let lis = clickPare.childNodes;
        for(let i=0,li; li= lis[i]; i++){
            li.onclick = function () {
                localStorage.bodyShope = this.childNodes[1].innerHTML.substring(0,this.childNodes[1].innerHTML.length-1);
                choseObject.click(obj,i);
            };
        }
    })();
    //按钮生成和事件绑定
    let button,inputElement = document.getElementById('age');
    inputElement.onfocus = function () {
        if(!button){
            button = new Button(checkObj);
            button.createEle();
            button.showEle();
        }
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            //基础检测
            if(button.checkVal(inputElement) === false){
                return
            }
            //要求检测
            if(ageC(inputElement.value) === false){
                inputElement.value = '';
                return
            }
            localStorage.age = inputElement.value;
            button.clickEle();
        };
    };
};



