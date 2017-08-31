/**
 * Created by yanshan on 2017/7/19.
 */

function alertFun() {
    alert('您输入的值不在我们要求的范围');
}

function twoBit(val) {
    let g =/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    return g.test(val)
}
//年龄
let ageC = function (x) {
    let g = /^[1-9]*[1-9][0-9]*$/;
    if(g.test(x) === false){
      alert('请输出正整数');
      return false
    }
    if(x<0 || x>150){
        alertFun();
        return false
    }
};
//身高
let heightC = function (x) {
    if(twoBit(x) === false){
        alert('最多两位小数');
        return false
    }
    if(x<70 || x>230){
        alertFun();
        return false
    }
};
//体重
let weightC = function (x) {
    if(twoBit(x) === false){
        alert('最多两位小数');
        return false
    }
    if(x<5 || x>200){
        alertFun();
        return false
    }
};
//肩宽
let shouderWC = function (x) {
    if(twoBit(x) === false){
        alert('最多两位小数');
        return false
    }
    if(x<25 || x>65){
        alertFun();
        return false
    }
};
//腰围
let waistlineWC = function (x) {
    if(twoBit(x) === false){
        alert('最多两位小数');
        return false
    }
    if(x<15 || x>200){
        alertFun();
        return false
    }
};
//臀围
let hiplineWC = function (x) {
    if(twoBit(x) === false){
        alert('最多两位小数');
        return false
    }
    if(x<25 || x>150){
        alertFun();
        return false
    }
};
export {ageC, heightC, weightC, shouderWC, waistlineWC, hiplineWC}