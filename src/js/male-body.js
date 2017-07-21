/**
 * Created by yanshan on 2017/6/28.
 */

import '../less/common.less'
import '../less/male-body.less'
import {Button} from './component/buttonModule'
import {choseObj} from './component/singleChoseModule'
import {ageC} from './component/numRangeCheck'

import img1 from '../images/body/1.png'
import img2 from '../images/body/2.png'
import img3 from '../images/body/3.png'
import img4 from '../images/body/4.png'
import img5 from '../images/body/5.png'
import img6 from '../images/body/6.png'

import img1_1 from '../images/body/1-1.png'
import img2_1 from '../images/body/2-1.png'
import img3_1 from '../images/body/3-1.png'
import img4_1 from '../images/body/4-1.png'
import img5_1 from '../images/body/5-1.png'
import img6_1 from '../images/body/6-1.png'

window.onload = function () {
    //各自拥有两种状态并进行单选
    let obj = {
        dom: document.getElementById('choseBody'),
        show: 'block',
        sex: 'male',
        num: 6,
        originImg: [img1,img2,img3,img4,img5,img6],
        activeImg: [img1_1,img2_1,img3_1,img4_1,img5_1,img6_1],
        imgText: ['椭圆型','圆型','正方型','长方型','沙漏型','V型']
    };
    //下一步配置
    let checkObj = {
        dom: document.getElementsByClassName('male')[0],
        show: 'block',
        type: true,
        text: '下一步',
        url: 'height.html',
        footerH: '3rem',
        reg: /\d+/
    };
    //体型选择处理
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
    //生成button和处理其点击事件
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

