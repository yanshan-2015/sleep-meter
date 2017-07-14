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

$(function () {
    let checkObj = {
        dom: document.getElementById('footer'),
        show: 'block',
        type: true,
        text: '获取报告',
        url: ''
    };
    let loginPram = {
        title: '快捷登录以查看测试结果',
        listNum: 3,
        iconUrl: [userImg,phoneImg,codeImg],
        listId: ['name','phone','code'],
        type: ['text','number','text'],
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

    let inputElement = document.getElementById('hiplineW');
    inputElement.onfocus = function () {
        createElement()
    };

    let div;
    function createElement() {
        if(!div){
            div = new Button(checkObj);
            div.show(checkObj);
        }
        $('#nextButton').click(function () {
            localStorage.hiplineW = inputElement.value;
            let login = new LoginElement(loginPram);

            $('#submit').click(function () {
                ajaxParam.data.telphone = $('#phone').val();
                ajaxParam.data.name = $('#name').val();
                login.postSubmit(ajaxParam);
            });

        });
    }
});