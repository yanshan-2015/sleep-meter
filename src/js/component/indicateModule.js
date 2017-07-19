/**
 * Created by yanshan on 2017/7/11.
 */

import '../../less/indicate.less'

let Indicate = function (n) {
    this.title = n.title;
    this.num = n.num;
    this.text = n.text;
    this.color = n.color;
    this.currentNum = n.currentNum;
    this.stable = n.stable;
};
Indicate.prototype.createNow = function () {
    let title = document.createElement('h1');
    title.className = 'indicateTitle';
    title.innerHTML = this.title;

    let num = document.createElement('span');
    num.className = 'indicateNum';
    num.innerHTML = this.currentNum;

    let ul = document.createElement('ul');
    ul.className = 'indicateUl';
    for(let i=0; i< this.num; i++){
        let li = document.createElement('li');
        li.innerHTML = this.text[i];
        li.style.float = 'left';
        li.style.backgroundColor = this.color[i];
        li.style.width = 100/this.num + '%';
        li.style.textAlign = 'center';
        ul.appendChild(li);
    }

    let p = document.createElement('p');
    p.className = 'indicateP';
    p.style.position = 'relative';
    p.style.height = '0.2rem';
    let img = document.createElement('img');
    img.className = 'indicateImg';
    this.img = img;
    img.src = this.stable;
    img.style.position = 'absolute';
    p.appendChild(img);

    let div = document.createElement('div');
    div.setAttribute('id','indicate');
    div.appendChild(title);
    div.appendChild(num);
    div.appendChild(ul);
    div.appendChild(p);
    this.div = div;
};
Indicate.prototype.showNow =function (n) {
    n.appendChild(this.div);
    if(this.currentNum>100){
        this.currentNum =100;
    }
    this.img.style.left = this.currentNum + '%';
};

export { Indicate }