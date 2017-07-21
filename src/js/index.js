/**
 * Created by yanshan on 2017/6/27.
 */

import '../less/index.less';
import { Button } from './component/buttonModule';
window.onload = function () {
    //按钮对象
    let checkObj = {
        dom: document.getElementsByClassName('index')[0],
        show: 'block',
        type: false,
        text: '开始测试',
        url: null,
        footerH: '4rem'
    };
    //性别选择
    let choseSex = (function () {
        let sexs = {};
        let items = document.getElementsByClassName('item');
        for(let i=0, item; item = items[i++]; ){
            item.onclick = function () {
                sexs.sex = this.getAttribute('id');
                if(sexs.sex === 'male'){
                    this.childNodes[5].className = 'check1';
                    this.nextElementSibling.children[2].className = 'noneSpan2';
                }else {
                    this.childNodes[5].className = 'check2';
                    this.previousElementSibling.children[2].className = 'noneSpan1';
                }
                localStorage.sexs = sexs.sex; //本地存起来
                checkObj.type = true;
                checkObj.url = sexs.sex +'-body.html';
                createButton();
            };
        }
    })();
    //按钮生成
    let button;
    function createButton() {
        if(!button){
            button = new Button(checkObj);
            button.createEle();
            button.showEle();
        }
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            button.clickEle();
        }
    }
};




