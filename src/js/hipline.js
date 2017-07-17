/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/hipline.less'
import '../less/loginModule.less'
import { Button } from './component/buttonModule'
import { LoginElement } from './component/loginModule'

import userImg from '../images/8-icon1.png'
import phoneImg from '../images/8-icon2.png'
import codeImg from '../images/8-icon3.png'

// import getwx from './component/getWx'
import getwx from './component/getWx';

window.onload = function () {
    let _this = this;
    $('.img').click(function () {
        getwx().then(function(res){
            console.log(res)
        }, function(res){
            console.log(res)
        });
    });
    let checkObj = {
        dom: document.getElementsByClassName('hipline')[0],
        show: 'block',
        type: true,
        text: '获取报告',
        url: '',
        top: '4.5rem',
        bottom: '1.5rem'
    };
    let loginPram = {
        title: '快捷登录以查看测试结果',
        listNum: 3,
        iconUrl: [userImg,phoneImg,codeImg],
        listId: ['name','phone','code'],
        type: ['text','tel','text'],
        placeholder: ['请输入姓名','请输入手机号码','请输入验证码'],
        url: 'report.html'
    };
    //前面储存进来的信息
    let userInformation = {
        sex: localStorage.sexs,
        shape: localStorage.bodyShope,
        age: localStorage.age,
        height: localStorage.bodyHeight,
        weight: localStorage.bodyWeight,
        shoulder: localStorage.shoudlerW,
        waistline: localStorage.waistlineW,
        hipline: localStorage.hiplineW
    };
    //保存至服务器的ajax参数
    let ajaxParam = {
        url: 'http://zs.derucci.net/deruccimid/sleep/savesleepdata',
        data: {
            sex: userInformation.sex,
            shape: userInformation.shape,
            age: userInformation.age,
            height: userInformation.height,
            weight: userInformation.weight,
            shoulder: userInformation.shoulder,
            waistline: userInformation.waistline,
            hipline: userInformation.hipline,
            telphone: '',
            name: '',
            jingdu: '',
            weidu: '',
            mattressindex: '',
            mattresscolor: '',
        },
    };
    //获取地理位置并赋值给
    getwx().then(function(res){
        ajaxParam.data.weidu = res.latitude;
        ajaxParam.data.jingdu = res.longitude;
    }, function(res){
        //do something...
    });
    let checkInfo = {};
    let button,login,inputElement = document.getElementById('hiplineW');
    function createElement() {
        if(!button){
            button = new Button(checkObj);
            button.createEle();
            button.showEle();
        }
    }
    inputElement.onfocus = function () {
        //生成btn
        createElement();
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            if(button.checkVal(inputElement) === true){
                localStorage.hiplineW = inputElement.value;
                //生成用户信息验证码界面
                login = new LoginElement(loginPram);
                //验证界面的两个行为
                submitBtn(); //提交处理
                checkCode(); //验证码处理
            }
        };
    };

    function submitBtn() {
        let submitBtn = document.getElementById('submit');
        submitBtn.onclick = function () {
            checkInfo.phone = $('#phone').val();
            checkInfo.name = $('#name').val();
            checkInfo.code = $('#code').val();
            //检测用户信息
            let condition = login.checkInfo(checkInfo);
            if(condition === false){
                return
            }
            if(condition === true){
                $('#phone').val('');
                return
            }
            //对code进检测
            let param = {
                url: 'http://zs.derucci.net/deruccimid/antifake/verifymsgcode',
                data: {
                    mobile: checkInfo.phone,
                    verifyCode: checkInfo.code,
                }
            };
            login.postAjax(param,function (data) {
                if(data.success !== true){
                    alert('验证码无效或过期');
                    return
                }
                ajaxParam.data.telphone = checkInfo.phone;
                ajaxParam.data.name = checkInfo.name;
                login.postAjax(ajaxParam,function (data) {
                    if(data.msg === 'OK'){
                        alert('数据已提交');
                        console.log(ajaxParam);
                        location.href = 'report.html';
                    }else {
                        alert('数据库异常，请尝试重新提交');
                    }
                })
            });
        };
    }
    function checkCode() {
        let checkCode = document. getElementById('codeSpan');
        checkCode.onclick = function (event) {
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
            checkInfo.phone = $('#phone').val();
            //做检测
            if(login.checkCode(checkInfo) === false){
                $('#phone').val('');
            }
            //调接口
            let param = {
                url: 'http://zs.derucci.net/deruccimid/antifake/sendmsg',
                data: {
                    mobile: checkInfo.phone
                }
            };
            login.postAjax(param,function (data) {
                codeItem(data,checkCode);
            })
        }
    }
    function codeItem(x,y) {
        switch (x.code){
            case 0: setTime(1000,120,y) ;
            break;
            case 1: alert('请求参数错误');
            break;
            case 2: alert('两分钟内只能发送一次');
        }
    }
    function setTime(n,m,dom,e) {
        dom.innerHTML = m;
        dom.style.backgroundColor = '#e1e1e1';
        let time = setInterval(function () {
            m--;
            dom.innerHTML = m;
            if(m === 0){
                clearInterval(time);
                dom.innerHTML = '重新发送';
                dom.style.backgroundColor = '#fff';
                return
            }
        },n)

    }
};