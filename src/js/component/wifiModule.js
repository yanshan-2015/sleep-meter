/**
 * Created by yanshan on 2017/7/11.
 */

import '../../less/wifi.less'

let WifiModule = function (n) {
    this.title = n.title;
    this.num = n.num;
    this.showNum = n.showNum;
    this.text = n.text;
    this.width = n.width;
    this.height = n.height;
    this.color = n.color;
};
WifiModule.prototype.createEle = function () {
    let title = document.createElement('h1');
    title.className = 'wifiTitle';
    let iCircle = document.createElement('i');
    title.appendChild(iCircle);
    let spanText = document.createElement('span');
    title.appendChild(spanText);
    spanText.innerHTML = this.title;

    let showNum = document.createElement('p');
    showNum.className = 'wifiNum';
    showNum.innerHTML = this.showNum;

    let ul = document.createElement('ul');
    ul.className = 'wifiUl';
    for(let i=0; i<this.num; i++){
        let li = document.createElement('li');
        li.style.width = 100/this.num + '%';
        let p = document.createElement('p');
        p.style.width = this.width +'rem';
        p.style.height = this.height[i];
        p.style.border = '1px solid'+ this.color;
        li.appendChild(p);
        let span = document.createElement('span');
        span.innerHTML = this.text[i];
        li.appendChild(span);
        ul.appendChild(li);
        if(i<this.showNum){
            p.style.backgroundColor = this.color;
        }
    }


    let div = document.createElement('div');
    div.className = 'wifiDiv';
    this.div = div;
    div.appendChild(title);
    div.appendChild(showNum);
    div.appendChild(ul);
};

WifiModule.prototype.showEle = function (n) {
    n.appendChild(this.div);
};

export { WifiModule }