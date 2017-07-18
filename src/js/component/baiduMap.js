import wx from 'weixin-js-sdk'

function setMap(longitude,latitude){
	// 百度地图API功能 
	let map = new BMap.Map("main");          // 创建地图实例
	map.centerAndZoom(new BMap.Point(longitude,latitude), 12);                 // 初始化地图，设置中心点坐标和地图级别
	map.enableScrollWheelZoom();
	map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件   
	let myIcon = new BMap.Icon("../images/9-ball.png", new BMap.Size(32, 80), {  
	  offset: new BMap.Size(0, 0), // 指定定位位置  
	  imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
	});
	//let hereIcon = new BMap.Icon("../images/9.you-r-here.png", new BMap.Size(72, 72), {  
	let hereIcon = new BMap.Icon("../images/9.you-r-here.png", new BMap.Size(40, 100), {  
	  offset: new BMap.Size(0, 0), // 指定定位位置  
	  imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
	});
	let ajaxData = {
	  jingdu: longitude,
	  weidu: latitude
	}
	let url='http://zs.derucci.net/deruccimid/sleep/findcusinfo';
	getData(url, ajaxData).then(function(json) {
		let arr = json.datas;
		console.log(arr);
		for	(let i=0;i<arr.length+1;i++){
			if(i == arr.length){
				let point = new BMap.Point(longitude,latitude);  // 创建点坐标
				let marker = new BMap.Marker(point,{icon:hereIcon});
				map.addOverlay(marker); 
			}else{
				let point = new BMap.Point(arr[i].LONGITUDE,arr[i].LATITUDE);  // 创建点坐标
				let marker = new BMap.Marker(point,{icon:myIcon,title:arr[i].CUSCOMPANY+'~'+arr[i].CUSTOMERADDS});
				marker.addEventListener('click', function (e) {
					let value = e.currentTarget.point;
					let arr = e.currentTarget.z.title.split('~');
					wx.ready(function() {
	          wx.openLocation({
	            latitude: value.lat, // 纬度，浮点数，范围为90 ~ -90
	            longitude: value.lng, // 经度，浮点数，范围为180 ~ -180。
	            name: arr[0], // 位置名
	            address: arr[1], // 地址详情说明
	            scale: 12, // 地图缩放级别,整形值,范围从1~28。默认为最大
	            infoUrl: 'http://derucci.net/ts/views/index.html' // 在查看位置界面底部显示的超链接,可点击跳转
	          });
	        })
			  });
			  map.addOverlay(marker); 
			}  
		}
	})
}

function getData(url, ajaxData) {
 	let data = new Promise(function(resolve, reject) {
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

export default setMap