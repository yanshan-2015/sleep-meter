/**********************************************
 * Created by yanshan on 2017/6/27.
 * 普通'下一步'按钮模块处理
 * 创建如下对象:
 * let checkObj = {
        dom: document.getElementById('footer'),
        show: 'block',
        type: false,
        text: '开始测试',
        url: null,
        bottom: '1.5rem'
    };
 **********************************************/
let Button = function (n) {
    this.text = n.text||'按钮';
    this.dom = n.dom || document.body;
    this.show = n.show || 'block';
    this.type = n.type || false;
    this.url = n.url||'';
    this.top = n.top|| '0';
    this.bottom = n.bottom|| '0';
    this.reg = n.reg||/\d+/;
    this.footerH = n.footerH
};
Button.prototype.createEle = function () {
    let p = document.createElement('p');
    this.p = p;
    p.style.width = '64%';
    p.style.margin = '0 auto';
    p.style.textAlign = 'center';
    p.style.fontSize = '0.53rem';
    p.style.color = '#f2f6f9';
    p.style.background = '-webkit-linear-gradient(left, #75c7f0 , #74a0ef)';
    p.style.boxShadow = '0 20px 20px #b7cef4';
    p.style.borderRadius = '0.15rem';
    p.innerHTML = this.text;
    let div = document.createElement('div');
    this.div = div;
    div.setAttribute('id','nextButton');
    div.style.position = 'fixed';
    div.style.bottom = '1.2rem';
    div.style.width = '100%';
    div.style.height = '1.2rem';
    div.style.lineHeight = '1.2rem';
    div.appendChild(p);
    let footer = document.createElement('div');
    footer.setAttribute('id','footer');
    footer.style.paddingTop = this.top;
    footer.style.paddingBottom = this.bottom;
    footer.style.height = this.footerH;
    this.footer = footer;
};
Button.prototype.showEle = function () {
    this.dom.appendChild(this.footer);
    this.footer.style.display = this.show;
    document.body.appendChild(this.div);
    this.compareH();
    console.log(this.compareH());
};
Button.prototype.clickEle = function () {
    if(this.type === false){
        return
    }
    this.p.style.background = "#74a0ef";
    location.href = this.url;
};
Button.prototype.compareH = function () {
    let body = this.footer.parentNode.parentNode;
    let bodyH = document.documentElement.clientHeight;
    let pageH = this.footer.parentNode.clientHeight;
    if(pageH>bodyH){
         body.style.height = 'auto';
         window.scrollTo(0, document.body.scrollHeight);
        return -1
    }
};
Button.prototype.checkVal = function (n) {
    if(this.reg.test(n.value) === false){
        alert('请输入正确数值');
        n.value = '';
        return false
    }else {
        return true
    }
};
export { Button }