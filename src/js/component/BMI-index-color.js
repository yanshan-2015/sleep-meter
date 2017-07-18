/**
 * Created by yanshan on 2017/7/18.
 */
//BMI计算方式，x代表体重，y代表身高
let BMIFun = function (x, y) {
    let height = y/100;
    return (x/(height*height)).toFixed(1);
};
//指数计算方式，x代表肩宽，y代表腰围
let Index = function (x, y) {
    let result;
    if(x-y<0){
        result = (x/y-1)*100;
        return indexCompare(result);
    }else{
        result = (y/x-1)*100;
        return indexCompare(result);
    }
};
//计算承重区域颜色，x代表体重，y代表身高
let Color = function (x, y) {
    let height = y/100;
    let result = (x/(height*height)).toFixed(1);
    return colorCompare(result);
};

//辅助函数
function indexCompare(n) {
    if(n===0 || 0<n || n<10 || n===10 ){
        return 1
    }
    else if(10<n || n<15 || n===15){
        return 2
    }
    else if(15<n || n<20 || n===20){
        return 3
    }
    else if(20<n || n<30 || n===30){
        return 4
    }
    else if(30<n){
        return 5
    }
}
function colorCompare(n) {
    if(n===0 || 0<n || n<20 || n===20){
        return '蓝'
    }
    else if(20<n || n<24 || n===24){
        return '绿'
    }
    else if(24<n || n<28 || n===28){
        return '橙'
    }
    else if(28<n){
        return '红'
    }
}
export { BMIFun, Index, Color }