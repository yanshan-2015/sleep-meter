/**
 * Created by yanshan on 2017/7/18.
 */
import '../../less/loading.less'
let Loading = function () {
    this.dom = document.body
};
Loading.prototype.createEle = function () {
    let bgCover = document.createElement('div');
    this.bgCover = bgCover;
    bgCover.setAttribute('id','bgCover');
    let loader = document.createElement('div');
    loader.setAttribute('id','loader');
    bgCover.appendChild(loader);
};
Loading.prototype.showEle = function () {
    this.dom.appendChild(this.bgCover);
};
Loading.prototype.hideEle = function () {
    this.dom.removeChild(this.dom.lastChild);
};
export { Loading }