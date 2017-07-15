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
window.onload = function () {
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
        createElement();
        let nextButton = document.getElementById('nextButton');
        nextButton.onclick = function () {
            if(button.checkVal(inputElement) === true){
                localStorage.hiplineW = inputElement.value;
                login = new LoginElement(loginPram);
                submitBtn();
                getCode();
            }
        };
    };

    function submitBtn() {
        let submitBtn = document.getElementById('submit');
        submitBtn.onclick = function () {
            //检测
            checkInfo.phone = $('#phone').val();
            checkInfo.name = $('#name').val();
            checkInfo.code = $('#code').val();
            if(login.checkInfo(checkInfo) === false){
                return
            }
            if(login.checkInfo(checkInfo) === true){
                $('#phone').val('');
                return
            }
            //对code进一步调取接口检测，不行进一步return
                // do something...

            //提交
            ajaxParam.data.telphone = checkInfo.phone;
            ajaxParam.data.name = checkInfo.name;
            login.postSubmit(ajaxParam,function (data) {
                if(data === 'OK'){
                    alert('数据已提交');
                    location.href = 'report.html';
                }else {
                    alert('数据库异常，请尝试重新提交');
                }
            })
        };
    }

    function getCode() {
        let getCode = document. getElementById('codeSpan');
        getCode.onclick = function () {
            checkInfo.phone = $('#phone').val();
            //做检测
            if(login.getCode(checkInfo) === false){
                $('#phone').val('');
            }
            //调接口
        }
    }
};