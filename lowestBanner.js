console.log('v3');
var typeLength = data.length;
var i = document.createElement("img");
i.setAttribute("src", iu);
i.setAttribute("width", 0);
i.setAttribute("height", 0);
i.setAttribute("style", "display:none;");
document.body.appendChild(i);

var imgX = "";
var lock = "F";
var screen_h = window.top.screen.height;
var screen_w = window.top.screen.width;
var secssion_w = window.top.document.body.clientWidth;
var CFvideoW = (screen_w - (screen_h * 0.3 * 16 / 9)) / 2;
var z = (screen_h * 0.3) / secssion_w;
var session_A = "F";
let cfAdsUrl = location.hostname,
    cfCloseBottom = '26%',
    cfAdsBottom = '0px';
cfAdsUrl.search('taiwan.sharelife.tw');
if (cfAdsUrl.search('taiwan.sharelife.tw') == 0 || cfAdsUrl.search('iwoman.sharelife.tw') == 0 || cfAdsUrl.search('tchouse.sharelife.tw') == 0 || cfAdsUrl.search('lohas.sharelife.tw') == 0 || cfAdsUrl.search('bnb.sharelife.tw') == 0 || cfAdsUrl.search('esports.sharelife.tw') == 0) {
    cfAdsBottom = '44px';
    cfCloseBottom = '285px';
} else {
    cfAdsBottom = '0';
    cfCloseBottom = '26%';
}

function getParent(thisFrame) {
    if (typeof (thisFrame.frameElement) != "undefined" && thisFrame.frameElement !== null && typeof (
            thisFrame.frameElement
            .id) != "undefined") {
        tframe = thisFrame.frameElement;
        topFrame = thisFrame.parent;

        if (topFrame != top) {
            getParent(topFrame)
        }

    }
}
getParent(window);

var tframe_tag = window.top.document.body;
tframe.parentNode.parentNode.style.display = "none";


var secssion_w = window.top.document.body.clientWidth;
var padding = (secssion_w - 100) / 2;
var padding1 = (secssion_w - 190) / 2;
var cardbt = screen_h * 0.3 - 80;
var cardH = screen_h * 0.3 - 70;

var fixedbox = document.createElement('div');
fixedbox.id = "fixedbox";
fixedbox.setAttribute('style', 'position:fixed;width:100%;height:' + screen_h * 0.3 + 'px;bottom:' + cfAdsBottom + ';left: 0px;z-index:99999999;border:0px');

var cfContainer = document.createElement('div');
cfContainer.id = 'cfContainer';
cfContainer.className = 'ad-bottom';


var a = document.createElement('a');
a.href = CLICK_URL + encodeURIComponent(data[0].redirect);
a.id = "cf_a";
a.style.width = "100%";
a.target = "_blank";
var CFP = document.createElement('p');
CFP.id = "cf_p";
CFP.innerText = p;
CFP.style.display = "none";
var av = document.createElement('img');
av.id = "av";
av.src = "//ad.holmesmind.com/adserver/av?p=" + p + "&type=1";
av.style.display = "none";
var imgbk = document.createElement('img');
imgbk.id = "imgbk";
imgbk.setAttribute('style', 'height:' + screen_h * 0.3 + 'px;width:' + secssion_w + 'px;');
var img1 = document.createElement('img');
img1.id = "img1";
/*img1.src = data[0].src;*/
img1.setAttribute("style", "width:100% !important; z-index:4444;position:absolute;left:-10%;transform:rotate3d(25, 0, 1 , 180deg)scale(.7);bottom:-" + screen_h * 0.3 + "px");

/*
var img2 = document.createElement('img');
img2.id = "img2";
img2.src = "//banner-cfnetwork.cdn.hinet.net/image/creative/20190918/imgWW/2.jpg";
img2.setAttribute("style", "width:100% !important; z-index:4444;position:absolute;left:-10%;transform:rotate3d(25, 0, 1 , 180deg)scale(.7);bottom:-" + screen_h * 0.3 + "px");
var img3 = document.createElement('img');
img3.id = "img3";
img3.src = "//banner-cfnetwork.cdn.hinet.net/image/creative/20190918/imgWW/3.jpg";
img3.setAttribute("style", "width:100% !important; z-index:4444;position:absolute;left:-10%;transform:rotate3d(25, 0, 1 , 180deg)scale(.7);bottom:-" + screen_h * 0.3 + "px");
var img4 = document.createElement('img');
img4.id = "img4";
img4.src = "//banner-cfnetwork.cdn.hinet.net/image/creative/20190918/imgWW/4.jpg";
img4.setAttribute("style", "width:100% !important; z-index:4444;position:absolute;left:-10%;transform:rotate3d(25, 0, 1 , 180deg)scale(.7);bottom:-" + screen_h * 0.3 + "px");
*/

var CFVideo = document.createElement('video');
CFVideo.id = "cf_video";
CFVideo.muted = true;
CFVideo.loop = true;
CFVideo.setAttribute("playsinline", "playsinline");
CFVideo.autoplay = true;
CFVideo.setAttribute("style", `width:${secssion_w}px;height:${screen_h * 0.3}px !important;position: relative;right:0;object-fit: fill;`);
var CFVideoSource = document.createElement('source');
CFVideoSource.id = "cf_video_source";
/*CFVideoSource.src = data.videos[0].video;*/
CFVideoSource.className = "cf_img";
CFVideoSource.type = "video/mp4";
var CFMuted = document.createElement('div');
CFMuted.id = "cf_muted";
CFMuted.className = "muted_f";
CFMuted.setAttribute("style", `
background-image:url(https://banner-cfnetwork.cdn.hinet.net/image/creative/vastplayer/white-mute.png);
height: 25px;
background-size: contain;
background-position: center center;
background-repeat: no-repeat;
width: 25px;
bottom: 10px;
position: fixed;
z-index: 999999999;
left: 17px;
display: none;`);

var alogo = document.createElement('a');
alogo.id = "alogo";
alogo.href = "http://www.clickforce.com.tw";
alogo.target = "_blank";
var logoCF = document.createElement('img');
logoCF.src = "//banner-cfnetwork.cdn.hinet.net/cf.png";
logoCF.setAttribute('style', `position:fixed; bottom:${cfAdsBottom}; right:0; z-index:999999999;width: 23px;height: 20px`);

var closeImg = document.createElement('img');
closeImg.id = 'CFClose';
closeImg.src = '//banner-cfnetwork.cdn.hinet.net/image/creative/20200629/close_btn.png';
closeImg.setAttribute('style', `width:30px;
                            height:30px;
                            right:0px;
                            position:fixed;
                            bottom: ${cfCloseBottom};
                            z-index: 999999999;
                        `);
var videoJs = document.createElement('script');
videoJs.src = "//banner-cfnetwork.cdn.hinet.net/image/creative/20190617/newvideo.js";




tframe_tag.appendChild(cfContainer);
setTimeout(function () {
    cfContainer.appendChild(closeImg);
}, 1500);
cfContainer.appendChild(a);

a.appendChild(fixedbox);
CFVideo.appendChild(CFVideoSource);
fixedbox.appendChild(CFP);
fixedbox.appendChild(av);

fixedbox.appendChild(img1);
cfContainer.appendChild(alogo);
alogo.appendChild(logoCF);
cfContainer.appendChild(CFMuted);
/*
fixedbox.appendChild(img2);
fixedbox.appendChild(img3);
fixedbox.appendChild(img4);
*/

if (data[0].type == 'video') {
    CFVideoSource.src = data[0].src;
    fixedbox.appendChild(CFVideo);
    window.top.document.body.appendChild(videoJs);
    CFMuted.setAttribute("style", `
    background-image:url(https://banner-cfnetwork.cdn.hinet.net/image/creative/vastplayer/white-mute.png);
    height: 25px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 25px;
    bottom: 10px;
    position: fixed;
    z-index: 999999999;
    left: 17px;
    display: block;`);
} else {
    img1.src = data[0].src;
}


if (CFvideoW > 0) {
    if (cfAdsUrl.search('taiwan.sharelife.tw') == 0 || cfAdsUrl.search('iwoman.sharelife.tw') == 0 || cfAdsUrl.search('tchouse.sharelife.tw') == 0 || cfAdsUrl.search('lohas.sharelife.tw') == 0 || cfAdsUrl.search('bnb.sharelife.tw') == 0 || cfAdsUrl.search('esports.sharelife.tw') == 0) {
        closeImg.setAttribute('style', `width:30px;
                            height:30px;
                            right:0px;
                            position:fixed;
                            bottom: 31vh;
                            z-index: 99999999;
                        `);
    } else {
        closeImg.setAttribute('style', `width:30px;
                            height:30px;
                            right:0px;
                            position:fixed;
                            bottom: 31vh;
                            z-index: 99999999;
                        `);
    }
}



var img1W = (screen_h * 0.3 - 70) * 1.6;
var img2W = (screen_h * 0.3 - 60) * 0.625;
var padding1 = (secssion_w - img1W) / 2;
var padding2 = (secssion_w - img2W) / 2;

var css = document.createElement('style');
css.innerText =
    ".imgback { transition-duration: 0.5s;transform: translateY(0px) !important;}" +
    ".imgmove2 {  transition-duration: 0.7s; z-index: 9999999;transform: rotate3d(25, 0, 1 , 360deg) !important; left:0px !important;bottom: 0px !important}" +
    ".imgmove {  transition-duration: 1.5s; z-index: 9999999;left:0px !important;}" +
    ".imgmove3 {  transition-duration: 0.5s; z-index: 9999999; transform: rotate(360deg)!important; left:0px !important;}" +
    ".imgmove4 {  transition-duration: 0.5s; z-index: 9999999;left:0px !important;}";

window.top.document.head.appendChild(css);

setTimeout(function () {
    window.top.document.getElementById('img1').classList.add("imgmove2");
    window.top.document.getElementById('cf_video').classList.add("imgmove2");
}, 400);


closeImg.addEventListener("click", function () {
    window.top.document.getElementById('cfContainer').remove();
}, false);



setTimeout(function () {
    window.top.onscroll = onsc;
}, 500);


function onsc() {

    window.top.document.getElementById("cf_a").addEventListener("click", function () {

        session_A = "T";

    }, false);

    var pagY = window.top.pageYOffset;
    var scroll_H = window.top.document.body.scrollHeight;
    var scroll_H_4 = scroll_H / 9;
    var session_H = "";
    var cfvd = window.top.document.getElementById('cf_video');
    var fixedboxC = window.top.document.getElementById('imgbk');
    switch (true) {
        case (pagY < scroll_H_4):
            window.top.document.getElementById('img1').classList.add("imgmove2");
            /* window.top.document.getElementById('img2').classList.remove("imgmove2");
             window.top.document.getElementById('img3').classList.remove("imgmove2");
             window.top.document.getElementById('img4').classList.remove("imgmove2");*/
            break;
            /*
                        case (scroll_H_4 < pagY && pagY < scroll_H_4 * 2):
                            window.top.document.getElementById('img1').classList.remove("imgmove2");
                            window.top.document.getElementById('img2').classList.add("imgmove2");
                            window.top.document.getElementById('img3').classList.remove("imgmove2");
                            window.top.document.getElementById('img4').classList.remove("imgmove2");
                            break;
                        case (scroll_H_4 * 2 < pagY && pagY < scroll_H_4 * 3):
                            window.top.document.getElementById('img1').classList.remove("imgmove2");
                            window.top.document.getElementById('img2').classList.remove("imgmove2");
                            window.top.document.getElementById('img3').classList.add("imgmove2");
                            window.top.document.getElementById('img4').classList.remove("imgmove2");
                            break;
                        case (scroll_H_4 * 3 < pagY && pagY < scroll_H_4 * 4):
                            window.top.document.getElementById('img1').classList.remove("imgmove2");
                            window.top.document.getElementById('img2').classList.remove("imgmove2");
                            window.top.document.getElementById('img3').classList.remove("imgmove2");
                            window.top.document.getElementById('img4').classList.add("imgmove2");
                            break;
                        case (scroll_H_4 * 4 < pagY && pagY < scroll_H_4 * 5):
                            window.top.document.getElementById('img1').classList.add("imgmove2");
                            window.top.document.getElementById('img2').classList.remove("imgmove2");
                            window.top.document.getElementById('img3').classList.remove("imgmove2");
                            window.top.document.getElementById('img4').classList.remove("imgmove2");
                            break;
                        case (scroll_H_4 * 5 < pagY && pagY < scroll_H_4 * 6):
                            window.top.document.getElementById('img1').classList.remove("imgmove2");
                            window.top.document.getElementById('img2').classList.add("imgmove2");
                            window.top.document.getElementById('img3').classList.remove("imgmove2");
                            window.top.document.getElementById('img4').classList.remove("imgmove2");
                            break;
                        case (scroll_H_4 * 6 < pagY && pagY < scroll_H_4 * 7):
                            window.top.document.getElementById('img1').classList.remove("imgmove2");
                            window.top.document.getElementById('img2').classList.remove("imgmove2");
                            window.top.document.getElementById('img3').classList.add("imgmove2");
                            window.top.document.getElementById('img4').classList.remove("imgmove2");
                            break;
                        case (scroll_H_4 * 7 < pagY && pagY < scroll_H_4 * 8):
                            window.top.document.getElementById('img1').classList.remove("imgmove2");
                            window.top.document.getElementById('img2').classList.remove("imgmove2");
                            window.top.document.getElementById('img3').classList.remove("imgmove2");
                            window.top.document.getElementById('img4').classList.add("imgmove2");
                            break;
                        default:
            */
    }
}
/* logo */
/*var cf_logo = frameElement.parentNode.parentNode.children[1].children[3].children[0];*/

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

var cf_logo = document.getElementsByClassName('cflogo')[0];
if (cf_logo) {
    cf_logo.style = 'display: none';
} else {
    alogo.setAttribute('style', 'display: none');
}