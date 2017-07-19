/**
 * Created by yanshan on 2017/7/19.
 */

function alertFun() {
    alert('您输入的值不在我们要求的范围');
}
//年龄
let ageC = function (x) {
    if(x<0 || x>150){
        alertFun();
        return false
    }
};
//身高
let heightC = function (x) {
    if(x<70 || x>230){
        alertFun();
        return false
    }
};
//体重
let weightC = function (x) {
    if(x<5 || x>200){
        alertFun();
        return false
    }
};
//肩宽
let shouderWC = function (x) {
    if(x<25 || x>65){
        alertFun();
        return false
    }
};
//腰围
let waistlineWC = function (x) {
    if(x<15 || x>200){
        alertFun();
        return false
    }
};
//臀围
let hiplineWC = function (x) {
    if(x<25 || x>150){
        alertFun();
        return false
    }
};
export {ageC, heightC, weightC, shouderWC, waistlineWC, hiplineWC}