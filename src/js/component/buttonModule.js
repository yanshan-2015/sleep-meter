/**
 * Created by yanshan on 2017/6/27.
 */

let Button = function (n) {
    this.text = n.text;
    this.url = n.url;
    let p = document.createElement('p');
    p.style.textAlign = 'center';
    p.style.fontSize = '0.53rem';
    p.style.color = '#f2f6f9';
    p.innerHTML = this.text;
    let div = document.createElement('div');
    this.dom = div;
    div.setAttribute('id','nextButton');
    div.style.position = 'absolute';
    div.style.bottom = '1.5rem';
    div.style.left = '18%';
    div.style.zIndex = '100';
    div.style.width = '64%';
    div.style.height = '1.2rem';
    div.style.lineHeight = '1.2rem';
    div.style.borderRadius = '0.15rem';
    div.style.background = '-webkit-linear-gradient(left, #75c7f0 , #74a0ef)';
    div.style.boxShadow = '0 20px 20px #b7cef4';
    div.style.display = 'none';
    div.appendChild(p);
    document.body.appendChild(div);
};
Button.prototype.show = function (n) {
    if(n.show === false){
        return
    }
    this.dom.style.display = 'block';
};
Button.prototype.clicks = function (n) {
    if(n.type === false){
        return
    }
    this.dom.style.background = "#74a0ef";
    location.href = this.url;
};
export { Button }