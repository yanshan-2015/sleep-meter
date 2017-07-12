/**
 * Created by yanshan on 2017/7/12.
 */

import '../../less/distribution.less'

let Distribution = function (n) {
    this.title = n.title;
    this.showName = n.showName;
    this.text = n.text;
    this.bgImg = n.bgImg;
    this.needle = n.needle;
    this.color = n.color;
};

Distribution.prototype.createEle = function () {
    let title = document.createElement('h1');
    title.className = 'disTitle';
    let iCircle = document.createElement('i');
    title.appendChild(iCircle);
    let spanText = document.createElement('span');
    title.appendChild(spanText);
    spanText.innerHTML = this.title;

    let showName = document.createElement('p');
    showName.className = 'disP';
    showName.innerHTML = this.showName;
    this.showName = showName;

    let plate = document.createElement('div');
    plate.className = 'disPlate';
    plate.style.background = 'url('+this.bgImg+')no-repeat';
    let needle = document.createElement('div');
    needle.className = 'disNeedle';
    needle.style.background = 'url('+this.needle+')no-repeat';
    this.needle = needle;
    plate.appendChild(needle);

    let ul = document.createElement('ul');
    ul.className = 'disUl';
    for(let i=0; i<this.text.length; i++){
        let li = document.createElement('li');
        li.style.width = 100/this.text.length + '%';
        let iCircle = document.createElement('i');
        iCircle.style.backgroundColor = this.color[i];
        li.appendChild(iCircle);
        let span = document.createElement('span');
        li.appendChild(span);
        span.innerHTML = this.text[i];
        ul.appendChild(li);
    }

    let div = document.createElement('div');
    div.className = 'disDiv';
    this.div = div;
    div.appendChild(title);
    div.appendChild(showName);
    div.appendChild(plate);
    div.appendChild(ul);
};

Distribution.prototype.showEle = function (n) {
    n.append(this.div);
};

Distribution.prototype.rotate =function (n,m) {
    this.needle.style.transform = 'rotate('+n+'deg)';
    this.showName.style.color = m;
};

export { Distribution }