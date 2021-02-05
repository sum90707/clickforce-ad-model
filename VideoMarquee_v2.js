document.body.setAttribute("style", 'margin: 0px;');
frameElement.style.display = 'none';
console.log('v2-1');

var windowTOP = window.top;
var screenW = window.top.innerWidth;
var screenH30 = window.top.innerHeight / 3;

/*建立影片靜音*/
var typeLength = data.length;
for (var y = 0; y <= typeLength - 1; y++) {
    if (data[y].type == 'video') {
        console.log('yes');
        muted_left = y * (100 / typeLength);
        console.log('11' + muted_left);
        break;
    } else {
        muted_left = -10;
    }
}
/*建立影片靜音結束*/

let cfAdsUrl = location.hostname,
    cfAdsBottom = '0px';
cfAdsUrl.search('taiwan.sharelife.tw');
if (cfAdsUrl.search('taiwan.sharelife.tw') == 0 || cfAdsUrl.search('iwoman.sharelife.tw') == 0 || cfAdsUrl.search('tchouse.sharelife.tw') == 0 || cfAdsUrl.search('lohas.sharelife.tw') == 0 || cfAdsUrl.search('bnb.sharelife.tw') == 0 || cfAdsUrl.search('esports.sharelife.tw') == 0) {
    cfAdsBottom = '44px';
} else {
    cfAdsBottom = '0';
}

var i = document.createElement("img");
i.setAttribute("src", iu);
i.setAttribute("width", 0);
i.setAttribute("height", 0);
i.setAttribute("style", "display:none;");
document.body.appendChild(i);

var CFDiv = document.createElement('div');
CFDiv.id = "CFDiv";
CFDiv.className = 'ad-bottom';
CFDiv.setAttribute("style", `width:100%;height:${screenH30}px;position:fixed;bottom:${cfAdsBottom};z-index:9999999999;`);
CFDiv.setAttribute("img_N", '1');
CFDiv.setAttribute("type", 'auto');
var imgBox = document.createElement('div');
imgBox.id = "img_box";
imgBox.setAttribute("style", `position: absolute;bottom:0px;height:calc(100vw * 9 / 16)`);
var CFVideo = document.createElement('video');
CFVideo.id = "cf_video";
CFVideo.muted = true;
CFVideo.loop = true;
CFVideo.setAttribute("playsinline", "playsinline");
CFVideo.autoplay = true;
CFVideo.setAttribute("style", `width:${screenW}px;height:calc(100vw * 9 / 16) !important;position: relative;right:0;object-fit: fill;`);
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
background-color: #636262;
opacity: 0.7;
border-radius: 6px;
background-size: contain;
background-position: center center;
background-repeat: no-repeat;
width: 25px;
bottom: 0px;
position: absolute;
z-index: 999999;
left:${muted_left}%;
display: none;`);

var CFAVideo = document.createElement('a');
/* CFAVideo.href = CLICK_URL + encodeURIComponent(data.videos[0].redirect); */
CFAVideo.target = "_blank";
CFAVideo.setAttribute("style", `width:${screenW}px; display:inline-block; text-align:center;`);

var CFA1 = document.createElement('a');
/*CFA1.href = CLICK_FUNCTION_URL + encodeURIComponent(data.images[0].redirect);*/
CFA1.target = "_blank";
CFA1.setAttribute("style", `width:${screenW}px; display:inline-block; text-align:center;`);

var CFA2 = document.createElement('a');
/*CFA2.href = CLICK_FUNCTION_URL + encodeURIComponent(data.images[1].redirect);*/
CFA2.target = "_blank";
CFA2.setAttribute("style", `width:${screenW}px; display:inline-block; text-align:center;`);

var CFA3 = document.createElement('a');
/*CFA3.href = CLICK_FUNCTION_URL + encodeURIComponent(data.images[2].redirect);*/
CFA3.target = "_blank";
CFA3.setAttribute("style", `width:${screenW}px; display:inline-block; text-align:center;`);

var CFA4 = document.createElement('a');
/*CFA4.href = CLICK_FUNCTION_URL + encodeURIComponent(data.images[3].redirect);*/
CFA4.target = "_blank";
CFA4.setAttribute("style", `width:${screenW}px; display:inline-block; text-align:center;`);

var CFA5 = document.createElement('a');
/*CFA5.href = CLICK_FUNCTION_URL + encodeURIComponent(data.images[4].redirect);*/
CFA5.target = "_blank";
CFA5.setAttribute("style", `width:${screenW}px; display:inline-block; text-align:center;`);

var CFImg1 = document.createElement('img');
CFImg1.id = "cf_img1";
CFImg1.className = "cf_img";
CFImg1.setAttribute('style', `position:relative;width:100vw;height:calc(100vw * 9 / 16);vertical-align: baseline;`);
/* CFImg1.src = data.images[0].image; */
var CFImg2 = document.createElement('img');
CFImg2.id = "cf_img2";
CFImg2.className = "cf_img";
CFImg2.setAttribute('style', `position:relative;width:100vw;height:calc(100vw * 9 / 16);vertical-align: baseline;`);
/* CFImg2.src = data.images[1].image; */
var CFImg3 = document.createElement('img');
CFImg3.id = "cf_img3";
CFImg3.className = "cf_img";
CFImg3.setAttribute('style', `position:relative;width:100vw;height:calc(100vw * 9 / 16);vertical-align: baseline;`);
/* CFImg3.src = data.images[2].image; */
var CFImg4 = document.createElement('img');
CFImg4.id = "cf_img4";
CFImg4.className = "cf_img";
CFImg4.setAttribute('style', `position:relative;width:100vw;height:calc(100vw * 9 / 16);vertical-align: baseline;`);
/* CFImg4.src = data.images[3].image; */

var CFImg5 = document.createElement('img');
CFImg5.id = "cf_img5";
CFImg5.className = "cf_img";
CFImg5.setAttribute('style', `position:relative;width:100vw;height:calc(100vw * 9 / 16);vertical-align: baseline;`);
/* CFImg5.src = data.images[3].image; */

var imgCFA = [CFA1, CFA2, CFA3, CFA4, CFA5],
    CLICK_FUNCTION_URL = [CLICK_FUNCTION_URL_1, CLICK_FUNCTION_URL_2, CLICK_FUNCTION_URL_3, CLICK_FUNCTION_URL_4],
    l = 0,
    typeLength = data.length;

/*建立圖片影片*/
var CFImg = [CFImg1, CFImg2, CFImg3, CFImg4, CFImg5];
var creativeType = 'image';
for (h = 0; h < typeLength; h++) {
    if (data[h].type == 'video') {
        creativeType = 'video';
        break;
    }
}
switch (creativeType) {
    case 'video':
        console.log('vid');
        /*影片在頭*/
        if (data[0].type == 'video') {
            CFVideoSource.src = data[0].src;
            CFAVideo.href = CLICK_URL + encodeURIComponent(data[0].redirect);
            for (var n = 1; n <= typeLength - 1; n++) {
                if (data[n].type == 'image') {
                    CFImg[n - 1].src = data[n].src;
                    imgCFA[n - 1].href = CLICK_FUNCTION_URL[n - 1] + encodeURIComponent(data[n].redirect);
                }
            }
            /*影片在最後*/
        } else if (data[typeLength - 1].type == 'video') {
            CFImg[0].src = data[0].src;
            imgCFA[0].href = CLICK_URL + encodeURIComponent(data[0].redirect);
            for (var n = 1; n <= typeLength - 1; n++) {
                if (data[n].type == 'image') {
                    CFImg[n].src = data[n].src;
                    imgCFA[n].href = CLICK_FUNCTION_URL[l] + encodeURIComponent(data[n].redirect);
                    l = l + 1;
                } else if (data[n].type == 'video') {
                    CFVideoSource.src = data[n].src;
                    CFAVideo.href = CLICK_FUNCTION_URL[l] + encodeURIComponent(data[n].redirect);
                }
            }
        }

        /*影片在中間*/
        else if (data[0].type == 'image') {
            CFImg[0].src = data[0].src;
            imgCFA[0].href = CLICK_URL + encodeURIComponent(data[0].redirect);
            for (var m = 1; m < typeLength; m++) {
                if (data[m].type == 'video') {
                    console.log('L等於', l, m);
                    CFVideoSource.src = data[m].src;
                    CFAVideo.href = CLICK_FUNCTION_URL[l] + encodeURIComponent(data[m].redirect);
                    l = l + 1;
                } else if (data[m].type == 'image') {
                    if (m === typeLength - 1) {
                        console.log(m, m, m, m, m, m);
                        CFImg[m].src = data[m].src;
                        imgCFA[m].href = CLICK_FUNCTION_URL[m - 1] + encodeURIComponent(data[m].redirect);
                    } else {
                        CFImg[m].src = data[m].src;
                        imgCFA[m].href = CLICK_FUNCTION_URL[l] + encodeURIComponent(data[m].redirect);
                        console.log('L等於if else', l, m);
                        l = l + 1;
                    }
                }
            }
        }
        break;

    case 'image':
        console.log('img');
        CFImg[0].src = data[0].src;
        imgCFA[0].href = CLICK_URL + encodeURIComponent(data[0].redirect);
        var cc = 1;
        for (var o = 1; o < typeLength; o++) {
            CFImg[o].src = data[o].src;
            for (var c = 0; c < typeLength - 1; c++) {
                cc = c + 1;
                imgCFA[cc].href = CLICK_FUNCTION_URL[c] + encodeURIComponent(data[c].redirect);
            }
        }
        break;
}

/*建立圖片影片結束*/

var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var imgleft = (screenWidth - screenH30 * 1.6) / 2;
var CFvideoW = (screenWidth - (screenHeight * 0.3 * 16 / 9)) / 2;
var CFImgW = (screenWidth - (screenHeight * 0.3 * 1.6)) / 2;
console.log(CFvideoW);

var screenH = window.top.innerHeight;
var imgleft = (screenWidth / screenH);
var videoHH = (screenH30 * 16) / 9;



var alogo = document.createElement('a');
alogo.id = "alogo";
alogo.href = "http://www.clickforce.com.tw";
alogo.target = "_blank";
var logoCF = document.createElement('img');
logoCF.src = "//banner-cfnetwork.cdn.hinet.net/cf.png";
logoCF.setAttribute('style', `position:fixed; bottom:${cfAdsBottom}; right:0; z-index:999999999;width: 23px;height: 20px`);

var CFP = document.createElement('p');
CFP.id = "cf_p";
CFP.innerText = p;
CFP.style.display = "none";

var av = document.createElement('img');
av.id = "av";
av.src = "//ad.holmesmind.com/adserver/av?p=" + p + "&type=1";
av.style.display = "none";

var CFButton = document.createElement('div');
CFButton.id = "CFButton";
CFButton.setAttribute("style", `top: 0px;width: 300px;height: 250px;`);

var CFDown = document.createElement('div');
CFDown.id = "CFDown";
CFDown.className = "DownMove";
CFDown.setAttribute('style', `padding:10px; font-size: 50px;color: #777474bf;position: absolute;top: 45%; right:0px;`);
CFDown.innerText = "❯";

var CFUp = document.createElement('div');
CFUp.id = "CFUp";
CFUp.className = "upMove";
CFUp.setAttribute('style', `padding:10px; font-size: 50px;color: #777474bf;position: absolute;top: 45%; left:0px;`);
CFUp.innerText = "❮";

if (imgleft > 0.5) {
    CFDown.setAttribute('style', `padding:10px; font-size: 50px;color: #777474bf;position: absolute;top: 37%;right:0px;`);
    CFUp.setAttribute('style', `padding:10px; font-size: 50px;color: #777474bf;position: absolute;top: 37%;left:0px;`);
}

var CFClose = document.createElement('div');
CFClose.id = "CFClose";
CFClose.setAttribute('style', `position: absolute;top: 0;right: 0;width: 30px;height: 30px;`);
var closeImg = document.createElement('img');
closeImg.src = '//banner-cfnetwork.cdn.hinet.net/image/creative/20200629/close_btn.png';
closeImg.setAttribute('style', `width:100%;
                                height: 100%;
                                right:0px;
                                position:absolute;`);

var style = document.createElement('style');
style.innerHTML = `
.DownMove {
            animation: 1.0s DownMoveAnimate;
            animation-iteration-count:infinite;
            transition-timing-function: cubic-bezier(.44,.13,.36,.19); 

            }
.upMove {
    animation: 1.0s upMoveAnimate;
    animation-iteration-count:infinite;
    transition-timing-function: cubic-bezier(.44,.13,.36,.19); 

}
@keyframes DownMoveAnimate {
    0% {
        transform: translate3d(0px, 0px, 0px);
    }
    50% {
        transform: translate3d(10px, 0px, 0px);
    }
    100% {
        transform: translate3d(0px, 0px, 0px);
    }
}   
@keyframes upMoveAnimate {
    0% {
        transform: translate3d(0px, 0px, 0px);
    }
    50% {
        transform: translate3d(-10px, 0px, 0px);
    }
    100% {
        transform: translate3d(0px, 0px, 0px);
    }
}   
`;




windowTOP.document.body.appendChild(CFDiv);
CFDiv.appendChild(alogo);
CFDiv.appendChild(imgBox);
CFAVideo.appendChild(CFVideo);
CFVideo.appendChild(CFVideoSource);
imgBox.appendChild(CFMuted);

/* imgBox.appendChild(CFAVideo);
imgBox.appendChild(CFA1);
imgBox.appendChild(CFA2);
imgBox.appendChild(CFA3);
imgBox.appendChild(CFA4);*/

CFA1.appendChild(CFImg1);
CFA2.appendChild(CFImg2);
CFA3.appendChild(CFImg3);
CFA4.appendChild(CFImg4);
CFA5.appendChild(CFImg5);
imgBox.appendChild(CFP);
CFDiv.appendChild(CFButton);
CFButton.appendChild(CFDown);
CFButton.appendChild(CFUp);
CFClose.appendChild(closeImg);
setTimeout(function () {
    CFDiv.appendChild(CFClose);
}, 1500);
alogo.appendChild(logoCF);

var videoJs = document.createElement('script');
videoJs.src = "//banner-cfnetwork.cdn.hinet.net/js/modle/VideoMarquee-video.js";


var i = 0,
    imgCFA = [CFA1, CFA2, CFA3, CFA4, CFA5];

for (i = 0; i < typeLength; i++) {
    /*影片在頭*/
    if (data[0].type == 'video') {
        imgBox.appendChild(CFAVideo);
        CFMuted.style.display = 'block';
        windowTOP.document.body.appendChild(videoJs);
        window.top.document.getElementById('cf_video').style.verticalAlign = 'baseline';
        videoAutoPlay();
        if (data[1].type == 'image') {
            for (var j = 0; j < typeLength - 1; j++) {
                imgBox.appendChild(imgCFA[j]);
                console.log(`j=${j}`);
            }
            console.log(`i=${i}`);
        }
    }
    /*影片在尾*/
    else if (data[typeLength - 1].type == 'video') {
        for (j = 0; j <= typeLength - 2; j++) {
            imgBox.appendChild(imgCFA[j]);
            console.log(`j=${j}`);
        }
        imgBox.appendChild(CFAVideo);
        windowTOP.document.body.appendChild(videoJs);
        window.top.document.getElementById('cf_video').style.verticalAlign = 'baseline';
        videoAutoPlay();
    }
    /*影片在中間*/
    else if (data[typeLength - 1].type != 'video' || data[0].type != 'video') {
        for (j = 0; j < typeLength; j++) {
            if (data[j].type == 'image') {
                imgBox.appendChild(imgCFA[j]);
            } else {
                imgBox.appendChild(CFAVideo);
                windowTOP.document.body.appendChild(videoJs);
                window.top.document.getElementById('cf_video').style.verticalAlign = 'baseline';
                videoAutoPlay();
            }
        }
    }
}



windowTOP.document.head.append(style);




var videoStop = windowTOP.document.getElementById("cf_video");

var imgSum = windowTOP.document.getElementsByClassName("cf_img").length;

for (var i = 1; i < imgSum; i++) {

    var img = windowTOP.document.getElementById("cf_img" + i);

}


windowTOP.document.getElementById("CFDown").addEventListener("click", autoNext, false);

function autoNext(type, test) {
    var img_n = windowTOP.document.getElementById("CFDiv").attributes[3].value;
    var img_n_a = parseInt(img_n);
    var x = img_n_a;
    if (type) {
        if (x >= imgSum) {

            x = 1;
            windowTOP.document.getElementById("CFDiv").setAttribute("img_N", x);
            var img_box = windowTOP.document.getElementById("img_box");
            img_box.setAttribute("style", `position: absolute;bottom: 0px;
            width:${screenW * imgSum}px;
            height:calc(100vw * 9 / 16) ;
            transform: translate3d(0px, 0px, 0px);
            transition-duration: 0.5s;`);
            CFMuted.style.display = 'block';


        } else {
            var img_box = windowTOP.document.getElementById("img_box");
            img_box.setAttribute("style", `
                position: absolute;
                bottom: 0px;
                width:${screenW * imgSum}px;
                height:calc(100vw * 9 / 16);
                transform: translate3d(${-screenW * x}px, 0px, 0px);
                transition-duration: 0.5s;`);
            CFMuted.style.display = 'block';
            x = x + 1;
            windowTOP.document.getElementById("CFDiv").setAttribute("img_N", x);

        }

    }
}
windowTOP.document.getElementById("CFUp").addEventListener("click", back);

function back(type) {
    var img_N_a = windowTOP.document.getElementById("CFDiv").attributes[3].value;
    var img_N = parseInt(img_N_a);
    var x = img_N - 1;

    if (img_N <= 1) {
        x = imgSum;
        windowTOP.document.getElementById("CFDiv").setAttribute("img_N", x);
        var img_box = windowTOP.document.getElementById("img_box");
        img_box.setAttribute("style",
            `position: absolute;bottom: 0px;width:${screenW * imgSum}px;height:calc(100vw * 9 / 16);transform: translate3d(${(-screenW * (x - 1))}px, 0px, 0px);transition-duration: 0.5s;`);
        CFMuted.style.display = 'block';
    } else {
        windowTOP.document.getElementById("CFDiv").setAttribute("img_N", x);
        x = x - 1;
        var img_box = windowTOP.document.getElementById("img_box");
        img_box.setAttribute("style", `position: absolute;bottom: 0px;width:${screenW * imgSum}px;height:calc(100vw * 9 / 16);
            transform: translate3d(${-screenW * x}px, 0px, 0px);transition-duration: 0.5s;`);
        CFMuted.style.display = 'block';

    }
}

var videoEndTime = "";
var videoEndTimeMath = "";
var videoStartTime = "";
var videoTime = "";

/*setInterval(timer, 1);

function timer(params) {
    videoEndTime = windowTOP.document.getElementById('cf_video').duration;
    videoEndTimeMath = Math.round(videoEndTime);
    videoStartTime = windowTOP.document.getElementById('cf_video').currentTime;
    videoTime = (videoStartTime / videoEndTime) * 100;
    let cardNumber = windowTOP.document.getElementById("CFDiv").attributes[3].value;

    if (cardNumber >= 4) {
        windowTOP.document.getElementById('cf_video').currentTime = 0;
    }
 }*/
setTimeout(function () {
    windowTOP.document.getElementById('CFClose').addEventListener("click", function () {
        windowTOP.document.getElementById('CFDiv').remove();
        windowTOP.document.getElementById('alogo').remove();
    }, false);
}, 1700);


window.top.document.getElementById('CFDown').addEventListener("click", newMuted);
window.top.document.getElementById('CFUp').addEventListener("click", newMuted);

function newMuted() {
    var cf_muted_status2 = window.top.document.getElementById('cf_muted').className;
    if (cf_muted_status2 == "muted_f") {

    } else {
        window.top.document.getElementById('cf_video').muted = true;
        window.top.document.getElementById('cf_muted').style.backgroundImage = "url(https://cdn.doublemax.net/image/creative/vastplayer/white-mute.png)";
        window.top.document.getElementById('cf_muted').classList.remove("muted_t");
        window.top.document.getElementById('cf_muted').classList.add("muted_f");
    };
}

/** low-power mode makes video autoplay **/
function videoAutoPlay() {
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
}
/* logo */
/*var cf_logo = frameElement.parentNode.parentNode.children[1].children[3].children[0];*/

var cf_logo = document.getElementsByClassName('cflogo')[0];
if (cf_logo) {
    cf_logo.style = 'display: none';
} else {
    alogo.setAttribute('style', 'display: none');
}