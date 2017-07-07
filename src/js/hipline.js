/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/hipline.less'
import '../less/loginModule.less'
import { Button } from './component/buttonModule'
import { loginElement } from './component/loginModule'

let checkObj = {
    dom: document.getElementById('footer'),
    show: 'block',
    type: true,
    text: '获取报告',
    url: ''
};

let loginPram = {
    title: '快捷登录以查看测试结果',
    listNum: 3,
    iconUrl: ['../images/8-icon1.png','../images/8-icon2.png','../images/8-icon3.png'],
    listId: ['name','phone','code'],
    type: ['text','number','text'],
    placeholder: ['请输入姓名','请输入手机号码','请输入验证码'],
    url: 'report.html'
};
let inputElement = document.getElementById('hiplineW');
let div;
let createElement = function () {
    if(!div){
        div = new Button(checkObj);
        div.show(checkObj);
    }
    let nextButton = document.getElementById('nextButton');
    nextButton.onclick = function () {
        localStorage.hiplineW = inputElement.value;
        new loginElement(loginPram);
    };
};

inputElement.onfocus = function () {
    createElement()
};