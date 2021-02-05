document.body.setAttribute("style", 'margin: 0px;');
window.top.document.body.setAttribute("style", 'margin: 0px;');

/*存放各類參數的物件*/
let documentInfo = {
    'sc': 'script',
    'ht': 'html',
    'bd': 'body',
    'windowTop': window.top.document,
    'screenHeight': window.top.screen.height,
    'screenWidth': window.top.screen.width,
    'positionLeft': (window.top.screen.width - 300) / 2,
};


/*data = {
images: [{
        image: '//banner-cfnetwork.cdn.hinet.net/image/creative/20201210/lef.png',
        redirect: '',
        size: '108'
    },
    {
        image: '//banner-cfnetwork.cdn.hinet.net/image/creative/20201210/right.png',
        redirect: 'https://www.google.com/',
        size: '108'
    },
    {
        image: '//banner-cfnetwork.cdn.hinet.net/image/creative/20201203/QIY/peace-1920x1080.gif',
        redirect: 'https://tw.yahoo.com/',
        size: 'size id'
    },
]
};*/

/*var CLICK_URL = '%%CLICK_URL%%';
var iu = "%%IMP_URL%%";
var p = "%%P%%";*/

/*找到最上層＆需要的iframe*/
var positionLock = true;
var parentTimes = 0;
function getParent(thisFrame) {
    try {
        if (thisFrame != top && parentTimes <= 10) {
            parentTimes++;
            if (typeof (thisFrame.frameElement) != "undefined" && thisFrame.frameElement !== null && typeof (thisFrame.frameElement.id) != "undefined") {
                fid = thisFrame.frameElement.id;
                fclass = thisFrame.frameElement.className;
                creativeFrame = thisFrame;
                if (fid.indexOf("google_ads") != -1) {
                    documentInfo['positionLeft'] = 0;
                    documentInfo['creatDom'] = thisFrame.frameElement.parentNode;
                    thisFrame.frameElement.style.display = 'none';
                    positionLock = false;
                    console.log('GAM');
                } else if (fid.indexOf("cfa") != -1 || fclass.indexOf("cfa") != -1) {
                    documentInfo['creatDom'] = thisFrame.frameElement.parentNode;
                    thisFrame.frameElement.style.display = 'none';
                    console.log('cfa');
                }
                topFrame = thisFrame.parent;
                if (topFrame != top) {
                    getParent(topFrame)
                }
            } else {
                frameType = "cross Domain frame"
            }
        } else {
            documentInfo['creatDom'] = window.top.document.body;
            console.log('window top');
        };
    } catch (e) {
        console.log(e)
    }
};

/* 建立結點用的function */
function CFCreat(elementInfo) {

    let elementObj = document.createElement(elementInfo['elementType']);
    for (info in elementInfo) {
        switch (typeof (elementInfo[info])) {
            case ('object'):
                if (info == 'style') {
                    let infoString = '';
                    for (detail in elementInfo[info]) {
                        infoString += detail + ':' + elementInfo[info][detail] + ';';
                    }
                    elementObj.setAttribute(info, infoString)
                }
                break;
            case ('string'):
                if (elementInfo['elementType'] == 'style') {
                    elementObj.innerText = elementInfo[info]
                } else if (info == 'innerText') {
                    elementObj.innerText = elementInfo[info]
                } else if (info == 'innerHTML') {
                    elementObj.innerHTML = elementInfo[info]
                } else if (info == 'elementType') {
                    continue;
                } else {
                    elementObj.setAttribute(info, elementInfo[info])
                }
                break;
        }
    }
    return elementObj;
};





let outDiv = {
    'id': 'outDiv',
    'elementType': 'div',
    'style': {
        'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
        'width': `${documentInfo['screenWidth']}px`,
        'z-index': '9999999',
        'position': 'fixed',
        'bottom': '0px',
        'transition-duration': '0.5s'
    }
},

    aLink = {
        'elementType': 'a',
        'id': 'aLink',
        'target': '_blank',
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `${documentInfo['screenWidth']}px`,
            'z-index': '99999',
            'position': 'fixed',
            'bottom': '0px',
        }
    },

    leftImgBox = {
        'id': 'leftImgBox',
        'elementType': 'div',
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `50%`,
            'text-align': '-webkit-auto',
            'overflow': 'hidden',
            'left': '0px',
            'position': 'absolute'
        }
    },

    rightImgBox = {
        'id': 'rightImgBox',
        'elementType': 'div',
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `50%`,
            'text-align': '-webkit-auto',
            'overflow': 'hidden',
            'right': '0px',
            'position': 'absolute'
        }
    },

    left_img1 = {
        'id': 'left_img1',
        'class': 'leftShow',
        'elementType': 'img',
        'src': `${data.images[0].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '2',
            'left': '-100%',
            'position': 'absolute'
        }
    },

    right_img1 = {
        'id': 'right_img1',
        'class': 'rightShow',
        'elementType': 'img',
        'src': `${data.images[1].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '2',
            'right': '-100%',
            'position': 'absolute'
        }
    },

    left_img2 = {
        'id': 'left_img2',
        'elementType': 'img',
        'src': `${data.images[0].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '1',
            'left': '-100%',
            'position': 'absolute'
        }
    },

    right_img2 = {
        'id': 'right_img2',
        'elementType': 'img',
        'src': `${data.images[1].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '1',
            'right': '-100%',
            'position': 'absolute'
        }
    },


    left_img3 = {
        'id': 'left_img3',
        'elementType': 'img',
        'src': `${data.images[0].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '0',
            'left': '-100%',
            'position': 'absolute'
        }
    },

    right_img3 = {
        'id': 'right_img3',
        'elementType': 'img',
        'src': `${data.images[1].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '0',
            'right': '-100%',
            'position': 'absolute'
        }
    },

    innerImg = {
        'id': 'innerImg',
        'elementType': 'img',
        'src': `${data.images[2].image}`,
        'style': {
            'height': `${documentInfo['screenWidth'] * 9 / 16}px`,
            'width': `100%`,
            'z-index': '0',
            'position': 'absolute',
            'transform': 'scale(0.01)',
            'transition-duration': '1s'
        }
    },


    CFClose = {
        'elementType': 'div',
        'id': 'CFClose',
        'style': {
            'top': '0px',
            'right': '0px',
            'width': '30px',
            'height': '30px',
            'z-index': '999999999',
            'position': 'absolute',
            'border-radius': '30px',
        }
    },

    closeImg = {
        'elementType': 'img',
        'id': 'closeImg',
        'src': '//banner-cfnetwork.cdn.hinet.net/image/creative/20200629/close_btn.png',
        'style': {
            'height': '30px',
            'width': '30px',
            'position': 'absolute',
        }
    },

    alogo = {
        'elementType': 'a',
        'id': 'alogo',
        'href': 'https://www.clickforce.com.tw',
        'target': '_blank'
    },

    cflogo = {
        'elementType': 'img',
        'src': '//banner-cfnetwork.cdn.hinet.net/cf.png',
        'style': {
            'width': '23px',
            'height': '20px',
            'position': 'fixed',
            'bottom': '0',
            'right': '0',
            'z-index': '9999999'
        }
    },

    style = {
        'elementType': 'style',
        'innerHTML': `
        .leftShow{
            height : 100%;
            width : 100%;
            z-index : 2 !important;
            left : 0% !important;
            position : absolute;
            transition-duration: 0.5s;
        }
        .leftprepare{
            height : 100%;
            width : 100%;
            z-index : 1 !important;
            left : -100% !important;
            position : absolute;
            transition-duration: 0.5s;
        }

        .rightShow{
            height : 100%;
            width : 100%;
            z-index : 2 !important;
            right : 0% !important;
            position : absolute;
            transition-duration: 0.5s;
        }
        .rightprepare{
            height : 100%;
            width : 100%;
            z-index : 1 !important;
            right : -100% !important;
            position : absolute;
            transition-duration: 0.5s;
        }
        `
    },

    i = {
        'elementType': 'img',
        'src': iu,
        'style': {
            'height': '0px',
            'width': '0px',
            'display': 'none',
            'left': '-100%',
            'position': 'absolute'
        }
    },

    cf_p = {
        'elementType': 'p',
        'id': 'cf_p',
        'style': {
            'display': 'none',
        },
        'innerText': p,
    },

    cf_av = {
        'elementType': 'img',
        'id': 'av',
        'src': "//ad.holmesmind.com/adserver/av?p=" + p + "&type=1",
        'style': {
            'display': 'none',
        },
        'innerText': p,
    };

getParent(window);

/* var i = document.createElement("img");
i.setAttribute("src", iu);
i.setAttribute("width", 0);
i.setAttribute("height", 0);
i.setAttribute("style", "display:none;");
document.body.appendChild(i);

var cf_p = document.createElement('p');
cf_p.id = "cf_p";
cf_p.innerText = p;
cf_p.style.display = "none";

var cf_av = document.createElement('img');
cf_av.id = "av";
cf_av.src = "//ad.holmesmind.com/adserver/av?p=" + p + "&type=1";
cf_av.style.display = "none";*/

documentInfo['windowTop'].body.appendChild(CFCreat(outDiv));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(aLink));

documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(CFClose));
documentInfo['windowTop'].getElementById(CFClose['id']).appendChild(CFCreat(closeImg));

documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(i));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(cf_p));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(cf_av));

documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(alogo));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(innerImg));
documentInfo['windowTop'].getElementById(alogo['id']).appendChild(CFCreat(cflogo));

documentInfo['windowTop'].getElementById(aLink['id']).appendChild(CFCreat(leftImgBox));
documentInfo['windowTop'].getElementById(aLink['id']).appendChild(CFCreat(rightImgBox));

documentInfo['windowTop'].getElementById(leftImgBox['id']).appendChild(CFCreat(left_img1));
documentInfo['windowTop'].getElementById(rightImgBox['id']).appendChild(CFCreat(right_img1));
documentInfo['windowTop'].getElementById(leftImgBox['id']).appendChild(CFCreat(left_img2));
documentInfo['windowTop'].getElementById(rightImgBox['id']).appendChild(CFCreat(right_img2));
documentInfo['windowTop'].getElementById(leftImgBox['id']).appendChild(CFCreat(left_img3));
documentInfo['windowTop'].getElementById(rightImgBox['id']).appendChild(CFCreat(right_img3));
documentInfo['windowTop'].head.appendChild(CFCreat(style));

let imgArr = [
    [left_img1['id'], right_img1['id']],
    [left_img2['id'], right_img2['id']],
    [left_img3['id'], right_img3['id']]
],
    imgView = 0,
    firstLoc = true;

function moveImg() {

    documentInfo['windowTop'].getElementById(imgArr[imgView][0]).className = 'leftprepare';
    documentInfo['windowTop'].getElementById(imgArr[imgView][1]).className = 'rightprepare';
    documentInfo['windowTop'].getElementById(innerImg['id']).style.transform = 'scale(1)';
    imgView = imgView < imgArr.length - 1 ? imgView + 1 : 0;

    setTimeout(function () {
        documentInfo['windowTop'].getElementById(imgArr[imgView][0]).className = 'leftShow';
        documentInfo['windowTop'].getElementById(imgArr[imgView][1]).className = 'rightShow';
        documentInfo['windowTop'].getElementById(aLink['id']).href = CLICK_URL + encodeURIComponent(data.images[0].redirect);
        setTimeout(function () {
            documentInfo['windowTop'].getElementById(innerImg['id']).src = data.images[2].image;
            documentInfo['windowTop'].getElementById(innerImg['id']).style.transform = 'scale(0.01)';
        }, 400);
    }, 1500);
};


setTimeout(function () {
    moveImg();
    setInterval(moveImg, 3000);
}, 800);
documentInfo['windowTop'].getElementById(CFClose['id']).addEventListener('click',
    function () {
        documentInfo['windowTop'].getElementById(outDiv['id']).remove();
    });
console.log('雙喜臨門(新增門內物件)-1210');