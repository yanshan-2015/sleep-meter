import setMap from './map';
import wx from 'weixin-js-sdk'

const Url = location.href;

function getData(url, ajaxData) {
  var data = new Promise(function(resolve, reject) {
    $.ajax({
      type: 'post',
      url: url,
      dataType: 'jsonp',
      jsonp: "jsoncallback",
      data: ajaxData,
      success: function(data) {
        resolve(data);
      },
      error: function(data) {
        alert('网络异常，数据获取失败。');
      }
    });
  });
  return data;
}

function getwx(){
	getData('http://zs.derucci.net:8821/deruccimid/antifake/getweichatcfg', {url: Url}).then(function(json) {
		wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
      appId: 'wx877a7e37b0de0a87', // 必填，公众号的唯一标识  
      timestamp: json.timestamp, // 必填，生成签名的时间戳  
      nonceStr: json.nonceStr, // 必填，生成签名的随机串  
      signature: json.signature, // 必填，签名，见附录1  
      jsApiList: [
          'chooseImage',
          'checkJsApi',
          'getLocation',
          'scanQRCode',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'openLocation'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2  
    });
    wx.ready(function() {
      //获取地理位置
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function(res) {
        	setMap(res.longitude,res.latitude);
        }
      });
    })
	})
}

export default getwx