/**
 * Created by yanshan on 2017/6/28.
 * create this object:
 * let obj = {
        dom: document.getElementById('choseBody'),
        show: 'block',
        sex: 'male',
        num: 6,
        originImg: [
            '../images/body/1.png',
            '../images/body/2.png',
            '../images/body/3.png',
            '../images/body/4.png',
            '../images/body/5.png',
            '../images/body/6.png'
        ],
        activeImg: [
            '../images/body/1-1.png',
            '../images/body/2-1.png',
            '../images/body/3-1.png',
            '../images/body/4-1.png',
            '../images/body/5-1.png',
            '../images/body/6-1.png'
        ],
        imgText: ['椭圆型','圆型','正方型','长方型','沙漏型','V型']
    };
 *
 */

let choseObj = function (n) {
    this.num = n.num;
    let ul = document.createElement('ul');
    this.dom = ul;
    ul.className = 'chose';
    ul.style.position = 'relative';
    ul.style.width = '100%';
    ul.style.height = '6rem';
    ul.style.margin = '0 auto';
    ul.style.overflow = 'hidden';

    for(let i=0; i<n.num; i++){
        let li = document.createElement('li');
        li.style.position = 'absolute';
        li.style.bottom = '0';
        li.style.left = i*(100/n.num)+'%';
        li.style.width = (100/n.num)+'%';
        li.style.backgroundColor = '';

        let img = new Image();
        img.src = n.originImg[i];
        img.style.width = '100%';
        img.style.height = 'auto';

        let p = document.createElement('p');
        p.innerHTML = n.imgText[i];
        p.style.marginTop = '0.15rem';
        p.style.textAlign = 'center';
        p.style.fontSize = '0.26rem';
        p.style.color = '#8fa0af';

        li.appendChild(img);
        li.appendChild(p);
        ul.appendChild(li);
    }
};
choseObj.prototype.show = function (n) {
    if(!!n.show === false){
        return
    }
    n.dom.appendChild(this.dom);
    this.dom.style.display = n.show;
};
choseObj.prototype.click = function (n,m) {
    let allLi = this.dom.childNodes;
    for(let i=0,li; li=allLi[i]; i++){
        li.childNodes[0].setAttribute('src',n.originImg[i])
    }
    this.dom.childNodes[m].childNodes[0].setAttribute('src',n.activeImg[m]);
};

//JS本身并没有获取所有兄弟节点的方法，弄一个
function siblings(elm) {
    let siblingsArr = [];
    let allElement = elm.parentNode.children;
    for(let i=0,allLen = allElement.length; i<allLen; i++){
        if(allElement[i] !== elm){
            siblingsArr.push(allElement[i]);
        }
    }
    return siblingsArr;
}

export {choseObj}
