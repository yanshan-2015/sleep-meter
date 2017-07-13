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
		this.name
	})
}

export default getwx