/**
 * Created by yanshan on 2017/6/27.
 */

import '../less/index.less';
import { Button } from './component/buttonModule';

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
            createButton();
        };
    }
})();

let checkObj = {
    show: true,
    type: false,
    text: '开始测试',
    url: 'body-and-age.html'
};
let div;
function createButton() {
    if(!div){
        div = new Button(checkObj);
        div.show(checkObj);
    }
    let nextButton = document.getElementById('nextButton');
    nextButton.onclick = function () {
        div.clicks(checkObj);
    }
}
createButton();




