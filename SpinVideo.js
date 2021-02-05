document.body.setAttribute("style", 'margin: 0px;');
window.top.document.body.setAttribute("style", 'margin: 0px;');
frameElement.style.display = 'none';

/*frameElement.style.width = "100%";
frameElement.style.height = "100%";
parent.frameElement.style.width = "100%";
parent.frameElement.style.height = "100%";
parent.frameElement.style.position = 'fixed';
parent.frameElement.style.bottom = '0';*/

console.log('2');
var screenW = window.top.document.body.clientWidth;
var imgW = window.screen.width / 2,
    imgH = Math.ceil((imgW * 9) / 16),
    transformH = imgH / 2;

var i = document.createElement("img");
i.setAttribute("src", iu);
i.setAttribute("width", 0);
i.setAttribute("height", 0);
i.setAttribute("style", "display:none;");
document.body.appendChild(i);

let cfAdsUrl = location.hostname,
    cfAdsBottom = '0px';
cfAdsUrl.search('taiwan.sharelife.tw');
if (cfAdsUrl.search('taiwan.sharelife.tw') == 0 || cfAdsUrl.search('iwoman.sharelife.tw') == 0 || cfAdsUrl.search('tchouse.sharelife.tw') == 0 || cfAdsUrl.search('lohas.sharelife.tw') == 0 || cfAdsUrl.search('bnb.sharelife.tw') == 0 || cfAdsUrl.search('esports.sharelife.tw') == 0) {
    cfAdsBottom = '44px';
} else {
    cfAdsBottom = '0';
}

var con = document.createElement("div");
con.id = "con";
con.className = "ad-bottom";
con.setAttribute("style", `position: fixed;display: flex;justify-content: center;align-items: center;bottom: ${cfAdsBottom};height: 30vh;width: 100%;z-index:9999999999;`);

var outDiv = document.createElement('div');
outDiv.id = "outDiv";
/*outDiv.setAttribute("style", 'width: 50vw;display: flex;align-items: center;position: fixed;bottom: 0px;justify-content: center;z-index: 999999;right: 0px;transition-duration: 2s;');*/
outDiv.setAttribute("style", `width: 50%;height: 30vh;right: 0;display: block;align-items: center;position: absolute;bottom: ${cfAdsBottom};justify-content: center;z-index: 999999;transition-duration: 2s;`);
var leftDiv = document.createElement("div");
leftDiv.id = "leftDiv";
leftDiv.setAttribute("style", 'width: 50%;height:100%;position: absolute;left: 0;bottom: 0;display:flex;');

var bottom_box = document.createElement('div');
bottom_box.id = "bottom_box";
/*bottom_box.setAttribute("style", 'height: 100px;width: 50vw;justify-content: center;display: block;bottom: 0px;right: 0px;transform-style: preserve-3d;transition: all 0.3s ease 0s;transform: rotateX(0deg);');*/
bottom_box.setAttribute("style", `position: absolute;height: ${imgH}px;width: 100%;justify-content: center;display: block;bottom: 0px;transform-style: preserve-3d;animation-name: bottom_box;animation-duration: 8s;transition-duration: 7s;animation-iteration-count: infinite;animation-timing-function: cubic-bezier(0.54, -0.34, 0.38, 1.22);`);

var vid = document.createElement("video");
vid.id = "cf_video";
vid.autoplay = "autoplay";
vid.loop = "loop";
vid.muted = "true";
vid.setAttribute("playsinline", 'playsinline');
vid.setAttribute("style", `width:${imgW}px;height: ${imgH}px;right: 0px;bottom: inherit;position: absolute;background-color: black;`);

var bottom_vid = document.createElement('source');
bottom_vid.id = "cf_video_source";
bottom_vid.type = "video/mp4";
bottom_vid.setAttribute("style", '');
bottom_vid.src = data.videos[0].video;

var cf_muted = document.createElement('div');
cf_muted.id = "cf_muted";
cf_muted.className = "muted_f";
cf_muted.setAttribute("style", 'background-color: #636262; opacity: 0.7; border-radius: 6px;background-image:url(https://banner-cfnetwork.cdn.hinet.net/image/creative/vastplayer/white-mute.png);height: 18px;background-size: contain;background-position: center center;background-repeat: no-repeat;width: 25px;position: absolute;bottom:0;left:0;z-index:999;');

var cf_p = document.createElement('p');
cf_p.id = "cf_p";
cf_p.innerText = p;
cf_p.style.display = "none";

var cf_av = document.createElement('img');
cf_av.id = "av";
cf_av.src = "//ad.holmesmind.com/adserver/av?p=" + p + "&type=1";
cf_av.style.display = "none";


var bottom_img = document.createElement('img');
bottom_img.setAttribute("style", `width: ${imgW}px;height: ${imgH}px;position: absolute;bottom: 0;transform: translate3d(0px, 0px, ${transformH}px) rotateX(0deg) ;background-color: white;`);
bottom_img.src = data.images[0].image;

var bottom_img2 = document.createElement('img');
bottom_img2.setAttribute("style", `width: ${imgW}px;height: ${imgH}px;position: absolute;bottom: 0;transform: translate3d(0px, -${transformH}px, 0px) rotateX(90deg);background-color: white;`);
bottom_img2.src = data.images[3].image;

var bottom_img3 = document.createElement('img');
bottom_img3.setAttribute("style", `width: ${imgW}px;height: ${imgH}px;position: absolute;bottom: 0;transform: translate3d(0px, 0px, -${transformH}px) rotateX(180deg);background-color: white;`);
bottom_img3.src = data.images[2].image;

var bottom_img4 = document.createElement('img');
bottom_img4.setAttribute("style", `width: ${imgW}px;height: ${imgH}px;position: absolute;bottom: 0;transform: translate3d(0px, ${transformH}px, 0px) rotateX(270deg);background-color: white;`);
bottom_img4.src = data.images[1].image;

var av = document.createElement('a');
av.href = CLICK_URL + encodeURIComponent(data.videos[0].redirect);
av.setAttribute("style", 'position: absolute;bottom: 0;width: 50vw;right: 0;');
av.target = "_blank";
var a1 = document.createElement('a');
a1.href = CLICK_FUNCTION_URL_1 + encodeURIComponent(data.images[0].redirect);
a1.target = '_blank';
var a2 = document.createElement('a');
a2.href = CLICK_FUNCTION_URL_2 + encodeURIComponent(data.images[3].redirect);
a2.target = '_blank';
var a3 = document.createElement('a');
a3.href = CLICK_FUNCTION_URL_3 + encodeURIComponent(data.images[2].redirect);
a3.target = '_blank';
var a4 = document.createElement('a');
a4.href = CLICK_FUNCTION_URL_4 + encodeURIComponent(data.images[1].redirect);
a4.target = '_blank';

var alogo = document.createElement('a');
alogo.href = "http://www.clickforce.com.tw";
alogo.target = "_blank";
var cflogo = document.createElement('img');
cflogo.src = "//banner-cfnetwork.cdn.hinet.net/cf.png";
cflogo.setAttribute('style', 'width:23px;height:20px;position:absolute; bottom:0; right:0; z-index:9999999;');

if (data.images[0].redirect == null) {
    a1.href = CLICK_FUNCTION_URL_1 + encodeURIComponent(data.videos[0].redirect);
}
if (data.images[1].redirect == null) {
    a2.href = CLICK_FUNCTION_URL_1 + encodeURIComponent(data.videos[0].redirect);
}
if (data.images[2].redirect == null) {
    a3.href = CLICK_FUNCTION_URL_1 + encodeURIComponent(data.videos[0].redirect);
}
if (data.images[3].redirect == null) {
    a4.href = CLICK_FUNCTION_URL_1 + encodeURIComponent(data.videos[0].redirect);
}

var CFClose = document.createElement('div');
CFClose.id = "close_btn";
CFClose.setAttribute('style', `position: absolute; bottom: calc(100vw * 9 / 31); right: 10px; width: 30px; height:30px; z-index: 99999999;`);
var closeImg = document.createElement('img');
closeImg.src = '//banner-cfnetwork.cdn.hinet.net/image/creative/20200629/close_btn.png';
closeImg.setAttribute('style', `width:30px;
                                height:30px;
                                position:absolute;`);

var style = document.createElement("style");
style.innerHTML = `@keyframes bottom_box{
from,20% {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);

}
40% {
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);

}
60% {
    -webkit-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    transform: rotateX(180deg);

}
80% {
    -webkit-transform: rotateX(270deg);
    -moz-transform: rotateX(270deg);
    transform: rotateX(270deg);

}
to {
    -webkit-transform: rotateX(360deg);
    -moz-transform: rotateX(360deg);
    transform: rotateX(360deg);

}}`;
window.top.document.body.appendChild(style);

window.top.document.body.appendChild(con);
window.top.document.body.appendChild(leftDiv);
window.top.document.body.appendChild(outDiv);

leftDiv.appendChild(vid);

leftDiv.appendChild(av);
vid.appendChild(bottom_vid);
outDiv.appendChild(bottom_box);
con.appendChild(alogo);
alogo.appendChild(cflogo);
con.appendChild(cf_muted);
con.appendChild(leftDiv);
con.appendChild(outDiv);
CFClose.appendChild(closeImg);
setTimeout(function () {
    con.appendChild(CFClose);
}, 1500);
con.appendChild(cf_p);
con.appendChild(cf_av);
bottom_box.appendChild(a1);
bottom_box.appendChild(a2);
bottom_box.appendChild(a3);
bottom_box.appendChild(a4);


av.appendChild(vid);
a1.appendChild(bottom_img);
a2.appendChild(bottom_img2);
a3.appendChild(bottom_img3);
a4.appendChild(bottom_img4);

setTimeout(function () {
    window.top.document.getElementById('close_btn').addEventListener('click', function () {
        window.top.document.getElementById('cf_video').muted = true;
        window.top.document.getElementById('close_btn').style.display = 'none';
        window.top.document.getElementById('con').style.display = 'none';
    });
}, 1700);

var musc = document.createElement("script");
musc.src = "https://banner-cfnetwork.cdn.hinet.net/js/modle/NewVideo20200505.js";
document.body.appendChild(musc);

/** low-power mode makes video autoplay **/
setTimeout(function () {
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function () {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && !this.readyState > 2);
        }
    });
    window.top.document.body.addEventListener('click', function () {
        const videoElement = window.top.document.getElementById('cf_video');
        if (videoElement.playing) {

        } else {
            videoElement.play();
        }
    });
    window.top.document.body.addEventListener('touchstart', function () {
        const videoElement = window.top.document.getElementById('cf_video');
        if (videoElement.playing) {

        } else {
            videoElement.play();
        }
    });
}, 100);

/* 判斷logo */
/*var cf_logo = frameElement.parentNode.parentNode.getElementsByClassName('cflogo')[0];*/
var cf_logo = document.getElementsByClassName('cflogo')[0];
if (cf_logo) {
    cf_logo.style = 'display: none';
} else {
    alogo.setAttribute('style', 'display: none');
}
window.top.document.getElementById('leftDiv').addEventListener('click', cfclicktp);
window.top.document.getElementById('outDiv').addEventListener('click', cfclicktp);