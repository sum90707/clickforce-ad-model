let documentInfo = {
        'sc': 'script',
        'ht': 'html',
        'bd': 'body',
        'windowTop': window.top.document,
        'screenHight': window.top.screen.height,
        'screenWidth': window.top.screen.width,
        'positionLeft': (window.top.screen.width - 320) / 2,
    },

    /*DSP模板素材json格式
    data = {
        images: [{
                image: '//banner-cfnetwork.cdn.hinet.net/image/creative/20201203/QIY/peace-1920x1080.gif',
                redirect: 'https://www.clickforce.com.tw',
                size: '108'
            },
            {
                image: '//banner-cfnetwork.cdn.hinet.net/image/creative/20201203/QIY/wolf-1920X1080.gif',
                redirect: 'https://www.clickforce.com.tw',
                size: '108'
            },
            {
                image: '//banner-cfnetwork.cdn.hinet.net/image/creative/20201203/QIY/life-1920x1080.gif,
                redirect: 'https://www.clickforce.com.tw',
                size: 'size id'
            }
        ]
    },*/


    cfClick = {
        'CLICK_URL': CLICK_URL,
    };

documentInfo['imgWidth'] = documentInfo['screenWidth'] > 425 ? 425 : documentInfo['screenWidth'];

console.log(documentInfo['screenWidth']);
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
                    thisFrame.frameElement.style.display = 'none';
                    documentInfo['creatDom'] = thisFrame.frameElement.parentNode;
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

getParent(window);

let outDiv = {
        'id': 'outDiv',
        'elementType': 'div',
        'style': {
            'height': `${documentInfo['imgWidth'] * 9 / 16}px`,
            'width': `100%`,
            'text-align': 'center',
            'z-index': '9999999',
            'position': 'fixed',
            'bottom': `0px`,
        }
    },

    cfifm = {
        'id': 'cfifm',
        'elementType': 'iframe',
        'scrolling': 'no',
        'style': {
            'height': `100%`,
            'width': `${documentInfo['imgWidth']}px`,
            'border': '0',
            'position': 'relative',
            'left': `0px`
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
            'display': 'flex',
            'justify-content': 'center'
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

    i = {
        'elementType': 'img',
        'src': iu,
        'width': '0',
        'height': '0',
        'style': {
            'display': 'none'
        }
    },

    av = {
        'elementType': 'img',
        'id': 'av',
        'src': '//ad.doublemax.net/adserver/av?p=' + p + '&type=1',
        'style': {
            'display': 'none'
        }
    };




let iframeText = `
    <!DOCTYPE ${documentInfo['ht']}>
    <${documentInfo['ht']} lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #cfDiv {}

            .imgContainer {
                position: relative;
                width: ${documentInfo['imgWidth']}px;
                height: ${documentInfo['imgWidth'] * 9 / 16}px;
            }

            .img-left {
                max-width: ${documentInfo['imgWidth']}px;
                position: absolute;
                top: 0;
                display: block;
            }

            .img-right {
                max-width: ${documentInfo['imgWidth']}px;
                position: absolute;
                top: 0;
                display: block;
                clip: rect(0px, ${(documentInfo['imgWidth']) * 0.48}px, 250px, 0px);
                animation: clipC 2s linear;
            }

            .middle-button {
                height: ${(documentInfo['imgWidth'] * 9 / 16) * 0.1}px;
                width: 40px;
                bottom: 0px;
                position: relative;
                margin-left: -22px;
                border: 3px solid #fff;
                -webkit-border-radius: 1000px;
                -moz-border-radius: 1000px;
                border-radius: 8px;
                -webkit-box-shadow: 0 0 12px rgba(51, 51, 51, .5);
                -moz-box-shadow: 0 0 12px rgba(51, 51, 51, .5);
                box-shadow: 0 0 12px rgba(51, 51, 51, .5);
                z-index: 40;
                cursor: pointer;
                
            }
            .headerdivider { 
                border: 1px solid #fff;
                width: 0px; 
                height: ${(documentInfo['imgWidth'] * 9 / 16) * 0.45}px; 
                position: relative; 
                top: 0px; 
            } 
            .headerdividerD { 
                border: 1px solid #fff;
                width: 0px; 
                height: ${(documentInfo['imgWidth'] * 9 / 16) * 0.45}px; 
                position: relative; 
                bottom: 0px; 
            } 
            .delimiter{
                display: block;
                position:absolute;
                top:0px;
                height: ${(documentInfo['imgWidth'] * 9 / 16)}px; 
                left: ${(documentInfo['imgWidth']) * 0.48}px;
                animation: buttonC 2s linear;
            }

            #left{
                height: ${(documentInfo['imgWidth'] * 9 / 16) * 0.1}px;
                width: 20px;
                left: 0px;
                top: 0px;
                position: absolute;
                font-size: 23px;
                display: flex;
                align-items: center;
                animation: 1.0s leftMove;
                animation-iteration-count:infinite;
                color: white;


               
            }

            #right{
                height: ${(documentInfo['imgWidth'] * 9 / 16) * 0.1}px;
                width: 20px;
                right: -7px;
                top: 0px;
                position: absolute;
                font-size: 23px;
                display: flex;
                align-items: center;
                animation: 1.0s rightMove;
                animation-iteration-count:infinite;
                color: white;
            }
            

            @keyframes clipC{
                0%{
                    clip: rect(0px, ${(documentInfo['imgWidth']) / 2}px, 250px, 0px);
                }
                25%{
                    clip: rect(0px, 30px, 250px, 0px);
                }
                75%{
                    clip: rect(0px, ${(documentInfo['imgWidth']) - 30}px, 250px, 0px);
                }
                100%{
                    clip: rect(0px, ${(documentInfo['imgWidth']) * 0.48}px, 250px, 0px);
                }
            }
            @keyframes buttonC{
                0%{
                    left:${((documentInfo['imgWidth']) / 2)}px;
                }
                25%{
                    left:30px;
                }
                75%{
                    left:${documentInfo['imgWidth'] - 30}px;
                }
                100%{
                    left:${((documentInfo['imgWidth']) * 0.48)}px;
                }
            }

            @keyframes clipRight{
                0%{
                    clip: rect(0px, 0px, 250px, 0px);
                }
                100%{
                    clip: rect(0px, ${(documentInfo['imgWidth'])}px, 250px, 0px);
                }
            }

            @keyframes buttonRignt{
                0%{
                    left:0px;
                }
                100%{
                    left:${(documentInfo['imgWidth'])}px;
                    opacity : 0;
                }
            }

            @keyframes clipLeft{
                0%{
                    clip: rect(0px,  ${(documentInfo['imgWidth'])}px, 250px, 0px);
                }
                100%{
                    clip: rect(0px, 0px, 250px, 0px);
                }
            }

            @keyframes buttonLeft{
                0%{
                    left:${(documentInfo['imgWidth'])}px;
                }
                100%{
                    left: 0px;
                    opacity : 0;
                }
            }

            @keyframes leftMove {
                0% {
                    transform: translate3d(0px, 0px, 0px);
                }
                50% {
                    transform: translate3d(5px, 0px, 0px);
                }
                100% {
                    transform: translate3d(0px, 0px, 0px);
                }
            }   
            @keyframes rightMove {
                0% {
                    transform: translate3d(0px, 0px, 0px);
                }
                50% {
                    transform: translate3d(-5px, 0px, 0px);
                }
                100% {
                    transform: translate3d(0px, 0px, 0px);
                }
            }


        </style>
    </head>

    <${documentInfo['bd']} style="margin: 0">
        <a href='${cfClick['CLICK_URL'] + data.images[0].redirect}' id='cfclick' target='_blank'>
            <div id="cfDiv">
                <div class="imgContainer">
                    <img class="img-left"
                        src="${data.images[0].image}"
                        alt="">
                    <img class="img-right"
                        src="${data.images[1].image}"
                        alt="">
                </div>

                <div class="delimiter">
                    <div class="headerdivider"></div> 
                    <div class="middle-button">

                        <div id = 'right'>❯</div>
                        <div id = 'left'>❮</div>
                        
                    </div>
                    <div class="headerdividerD"></div> 
                </div>
                
            </div>
        </a>
        <${documentInfo['sc']}>
            var cfDiv = document.getElementById('cfDiv'),
                imgRight = document.getElementsByClassName('img-right')[0],
                imgleft = document.getElementsByClassName('img-left')[0],
                middleBut = document.querySelector('#cfDiv > div.delimiter'),
                CreativeWidth = ${documentInfo['imgWidth']},
                CreativeHeight = ${(documentInfo['imgWidth'] * 9 / 16)};

            cfDiv.setAttribute('style', 'width:' + CreativeWidth + 'px; height:' + CreativeHeight + 'px; position: absolute;overflow: hidden;');
            middleBut.addEventListener('mousedown', dragStart);
            middleBut.addEventListener('touchstart', dragStart);


            let area = {
                left: cfDiv.offsetLeft,
                /*right: cfDiv.offsetLeft + cfDiv.offsetWidth,*/
                right: ${documentInfo['imgWidth']},
            };

            function dragStart(e) {
                e.preventDefault();
                
                eX = e.clientX ? e.clientX : e.touches[0].clientX;
                eY = e.clientY ? e.clientY : e.touches[0].clientY;
                startX = eX - middleBut.offsetLeft;
                startY = eY - middleBut.offsetTop;

                document.addEventListener('mousemove', move);
                document.addEventListener('mouseup', stop);
                document.addEventListener('touchmove', move);
                document.addEventListener('touchend', stop);
            }

            function move(e) {
                /*計算出拖曳物件最左上角座標*/
            
                eX = e.clientX ? e.clientX : e.touches[0].clientX;
                eY = e.clientY ? e.clientY : e.touches[0].clientY;
                
                x = eX - startX;
                y = eY - startY;

                x = Math.max(Math.min(x, area.right), area.left);
                y = Math.max(Math.min(y, area.bottom), area.top);
                middleBut.style.left = x + 'px';
                middleBut.style.top = y + 'px';
                imgRight.setAttribute('style', 'clip: rect(0px, '+x+'px, 250px, 0px);');
                checkMove(x);
            };

            function stop() {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', stop);
                document.addEventListener('touchmove', move);
                document.addEventListener('touchend', stop);
            };


            function removeAllEvent(){
                middleBut.removeEventListener('mousedown', dragStart);
                middleBut.removeEventListener('touchstart', dragStart);
                document.removeEventListener('touchmove', move);
                document.removeEventListener('touchend', stop);
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', stop);
                    
            };
            function linkHomePage(){
                document.querySelector('#cfclick').click();
            };
            function checkMove(checkValue){
                if(checkValue<30){
                    imgRight.src = '${data.images[2].image}';
                    imgRight.style.animation = 'clipRight 2s linear';
                    middleBut.style.animation = 'buttonRignt 2s linear';
                    imgRight.style.animationFillMode = 'forwards';
                    middleBut.style.animationFillMode = 'forwards';
                    removeAllEvent();
                }else if(checkValue>${documentInfo['imgWidth'] - 30}){
                    imgleft.src = '${data.images[2].image}';
                    imgRight.style.animation = 'clipLeft 2s linear';
                    middleBut.style.animation = 'buttonLeft 2s linear';
                    imgRight.style.animationFillMode = 'forwards';
                    middleBut.style.animationFillMode = 'forwards';
                    removeAllEvent();
                };
            }

            
        </${documentInfo['sc']}>
    </${documentInfo['bd']}>
    </${documentInfo['ht']}>`;

documentInfo['windowTop'].body.appendChild(CFCreat(outDiv));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(cfifm));


documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(i));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(av));
documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(alogo));
documentInfo['windowTop'].getElementById(alogo['id']).appendChild(CFCreat(cflogo));


window.top.onload = function () {
    console.log('看到的吃大便');
    documentInfo['windowTop'].getElementById(cfifm['id']).contentWindow.document.open();
    documentInfo['windowTop'].getElementById(cfifm['id']).contentWindow.document.write(iframeText);
    documentInfo['windowTop'].getElementById(cfifm['id']).contentWindow.document.close();
    documentInfo['windowTop'].getElementById(outDiv['id']).appendChild(CFCreat(CFClose));
    documentInfo['windowTop'].getElementById(CFClose['id']).appendChild(CFCreat(closeImg));
    documentInfo['windowTop'].getElementById(CFClose['id']).addEventListener('click',
        function () {
            documentInfo['windowTop'].getElementById(outDiv['id']).remove();
        });
};
console.log('1210-1');