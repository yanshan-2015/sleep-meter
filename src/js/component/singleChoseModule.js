/**
 * Created by yanshan on 2017/6/28.
 * create this object:
 * let obj = {
    dom: document.getElementById('choseBody'),
    show: 'block',
    sex: 'male',
    num: 7,
    originImg: [ girl1, girl2, girl3, girl4, girl5, girl6, girl7 ],
    activeImg: [ girl1_1, girl2_2, girl3_3, girl4_4, girl5_5, girl6_6, girl7_7 ],
    imgText: ['V型','H型','长方型','苹果型','梨型','细沙漏型','粗沙漏型']
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
    //ul.style.height = '6rem';
    ul.style.height = 'auto';
    ul.style.margin = '0 auto';
    ul.style.overflow = 'hidden';

    for(let i=0; i<n.num; i++){
        let li = document.createElement('li');
        // li.style.position = 'absolute';
        // li.style.bottom = '0';
        // li.style.left = i*(100/n.num)+'%';
        li.style.float = 'left';
        li.style.textAlign = 'center';
        li.style.width = (100/n.num)+'%';
        li.style.backgroundColor = '';

        let img = new Image();
        img.src = n.originImg[i];
        img.style.width = '100%';
        //img.style.height = 'auto';
        img.style.height = '5rem';

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

choseObj.prototype.click = function (n,m) { //object|i
    //每次操作后的imgUrl如果数组中没有就存起来
    let imgArr = [];
    //do something...


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
