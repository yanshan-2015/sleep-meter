/**
 * Created by yanshan on 2017/6/29.
 */

import '../less/hipline.less'
import '../less/loginModule.less'
import { Button } from './component/buttonModule'
import { LoginElement } from './component/loginModule'
import { Loading } from './component/loading'

import userImg from '../images/8-icon1.png'
import phoneImg from '../images/8-icon2.png'
import codeImg from '../images/8-icon3.png'

import getwx from './component/getWx';

window.onload = function () {
    //next button 配置参数
    let checkObj = {
        dom: document.getElementsByClassName('hipline')[0],
        show: 'block',
        type: true,
        text: '获取报告',
        url: '',
        top: '4.5rem',
        bottom: '1.5rem'
    };
    //登录界面配置参数
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
    //next button 构造
    function createElement() {
        if(!button){
            button = new Button(checkObj);
            button.createEle();
            button.showEle();
        }
    }
    inputElement.onfocus = function () {
        //生成next button
        createElement();
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            if(button.checkVal(inputElement) === true){
                localStorage.hiplineW = inputElement.value;
                //生成用户信息验证码界面
                login = new LoginElement(loginPram);
                //验证界面的两个行为
                $('#submit').bind('click',handleSubmitBtn); //提交处理
                $('#codeSpan').bind('click',handleCheckCode); //验证码处理
            }
        };
    };
    //或者验证码
    function handleCheckCode() {
        checkInfo.phone = $('#phone').val();
        //做检测
        if(login.checkCode(checkInfo) === false){
            $('#phone').val('');
            return
        }
        let loading = new Loading();
        loading.createEle();
        loading.showEle();
        //调接口
        let param = {
            url: 'http://zs.derucci.net/deruccimid/antifake/sendmsg',
            data: {
                mobile: checkInfo.phone
            }
        };
        login.postAjax(param,function (data) {
            loading.hideEle();
            let codeSpan = document.getElementById('codeSpan');
            codeItem(data,codeSpan);
        });
    }
    //验证码返回状态筛选
    function codeItem(x,y) {
        switch (x.code){
            case 0: setTime(1000,120,y) ;
            break;
            case 1: alert('请求参数错误，请重试');
            break;
            case 2: alert('两分钟内只能发送一次短信');
            break;
            default: alert('暂未知');
            break;
        }
    }
    //验证码定时器
    function setTime(n,m,dom) {
        $('#codeSpan').unbind('click',handleCheckCode);
        dom.innerHTML = m;
        dom.style.backgroundColor = '#e1e1e1';
        let time = setInterval(function () {
            m--;
            dom.innerHTML = m;
            if(m === 0){
                clearInterval(time);
                dom.innerHTML = '重新发送';
                dom.style.backgroundColor = '#fff';
                $('#codeSpan').bind('click',handleCheckCode);
                return
            }
        },n)

    }
    //提交数据到后台
    function handleSubmitBtn() {
        checkInfo.phone = $('#phone').val();
        checkInfo.name = $('#name').val();
        checkInfo.code = $('#code').val();

        //对以上用户信息进行空值检测和正则检测
        let condition = login.checkInfo(checkInfo);
        if(condition === false){
            return
        }
        if(condition === true){
            $('#phone').val('');
            return
        }

        //对code进行检测
        let param = {
            url: 'http://zs.derucci.net/deruccimid/antifake/verifymsgcode',
            data: {
                mobile: checkInfo.phone,
                verifyCode: checkInfo.code,
            }
        };
        login.postAjax(param,function (data) {
            //回调函数进行检测
            if(data.success !== true){
                alert('验证码无效或过期');
                return
            }
            let loading = new Loading();
            loading.createEle();
            loading.showEle();

            //回调函数无异常，最终提交数据如下
            ajaxParam.data.telphone = checkInfo.phone;
            ajaxParam.data.name = checkInfo.name;
            login.postAjax(ajaxParam,function (data) {
                loading.hideEle();
                if(data.msg === 'OK'){
                    alert('数据已提交');
                    location.href = 'report.html';
                }else {
                    alert('数据库异常，请尝试重新提交');
                }
            })
        });
    }
};