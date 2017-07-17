/**
 * Created by yanshan on 2017/6/30.
 * create this object:
 *let loginPram = {
    title: '我的大标题让你吃惊',
    listNum: 3,
    iconUrl: ['../images/8-icon1.png','../images/8-icon2.png','../images/8-icon3.png'],
    listId: ['name','phone','code'],
    placeholder: ['请输入姓名','请输入手机号码','请输入验证码'],
    nameUrl: '../images',
    phoneUrl: '../images',
    checkCodeUrl: '../images',
    url: 'report.html'
    };
 *
 */

let LoginElement = function (n){
    this.title = n.title||'';

    let cover = document.createElement('div');
    this.coverflow = cover;     /******************************/
    cover.setAttribute('id','cover');
    document.body.appendChild(cover);

    let dialog = document.createElement('div');
    dialog.setAttribute('id','dialog');
    cover.appendChild(dialog);

    let close = document.createElement('div');
    this.close = close;    /******************************/
    close.setAttribute('id','close');
    dialog.appendChild(close);
    this.close.onclick = function () {
        document.body.removeChild(cover);
    };

    let title = document.createElement('h1');
    title.setAttribute('id','title');
    title.innerHTML = n.title || '这里是标题';
    dialog.appendChild(title);

    let itemBox = document.createElement('div');
    itemBox.setAttribute('id','itemBox');
    dialog.appendChild(itemBox);
    for(let i=0; i<n.listNum; i++){
        let item = document.createElement('div');
        item.className = 'item';
        itemBox.appendChild(item);

        let icon = new Image;
        icon.src = n.iconUrl[i];
        item.appendChild(icon);

        let input = document.createElement('input');
        input.setAttribute('id',n.listId[i]);
        input.setAttribute('placeholder',n.placeholder[i]);
        input.setAttribute('type',n.type[i]);

        item.appendChild(input);

        if(n.listId[i] === 'phone'){
            input.setAttribute('maxlength','11');
            let span = document.createElement('span');
            this.span = span;  /******************************/
            span.setAttribute('id','codeSpan');
            span.innerHTML = '获取验证码';
            item.appendChild(span);
            item.style.position = 'relative';
        }
    }

    let submit = document.createElement('div');
    submit.setAttribute('id','submit');
    submit.innerHTML = '提交';
    dialog.appendChild(submit);
    this.submit = submit;   /******************************/
};
LoginElement.prototype.phoneReg = function (n) {
    let phoneReg = /^1[34578]\d{9}$/; //电话正则
    if(phoneReg.test(n.phone) === false){
        alert('请输入正确的电话号码');
        return false
    }
};
LoginElement.prototype.checkCode = function (n) {
    if(this.phoneReg(n) === false){
        return false
    }
};
LoginElement.prototype.getCode = function (n,callback) {
    //调取短信接口
     $.ajax({
     type: "GET",
     url: n.url,
     data: n.data,
     dataType: 'jsonp',
     jsonp: 'jsoncallback',
     success: function (data) {
            callback(data);
        }
     })
};
LoginElement.prototype.checkInfo = function (n) {
    for(let item in n){
        if(n[item]===''){
            alert('输入框不能为空');
            return false
        }
    }
    //没有什么多余的方式触碰到服务器
    if(this.phoneReg(n) === false){
        return true
    }
};
LoginElement.prototype.postAjax = function (n,callback) {
    $.ajax({
        type: 'POST',
        url: n.url,
        data: n.data,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        success: function (data) {
            callback(data);
        },
        error:function (data) {
            callback(data);
        }
    });
};
export { LoginElement }