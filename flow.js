console.log('v1');
navigator.userAgent.match("ClickForce SDK Dev") ? "" : frameElement.parentNode.parentNode.style.display = "none";

var i = document.createElement("img");
i.setAttribute("src", iu);
i.setAttribute("width", 0);
i.setAttribute("height", 0);
i.setAttribute("style", "display:none;");
document.body.appendChild(i);

setTimeout(function () {

    var CF = new CFCreatElement(FLOAT_HOVER);

    create(CF, ...data.images);

    setTimeout(function () {

        var padding = ((CF.data.screenW - CF.data.windowTop.document.getElementById('Img1').width) / 2);
        var fixedboxH = parseFloat(CF.data.windowTop.document.getElementById(CF.elements.divId).style.height
            .replace("px", ""));
        var DivH = CF.screenH * 0.3;
        var imgCardH = CF.data.windowTop.document.getElementById("Img1").height;
        imgCardH = imgCardH != 0 ? imgCardH : CF.data.windowTop.document.getElementById("Img2").height;
        var imgcardHC = document.getElementsByClassName('CFImg');
        console.log(imgcardHC);
        var transY = DivH - imgCardH * 2.5;
        console.log(-transY);

        var a = fixedboxH - (imgCardH * 2.4);
        CF.cssSelect({
                __transformcss1__: `translateY(-115px)scale(2.5)rotate(0deg) !important`,
                __transformcss2__: 'translateY(-115px)scale(2.5)rotate(0deg) !important',
                __transformcss3__: 'translateY(-115px)scale(2.5)rotate(0deg) !important',
                __transformcss4__: 'translateY(-115px)scale(2.5)rotate(0deg) !important',
                leftPadding1: padding + "px",
                leftPadding2: padding + "px",
                leftPadding3: padding + "px",
                leftPadding4: padding + "px",
            }

        )
    }, 300);
}, 500);

function create(CF, imgA, imgB, imgC, imgD, banner) {
    var cf_p = document.createElement('p');
    cf_p.id = 'cf_p';
    cf_p.innerHTML = p;
    cf_p.style.display = 'none';
    document.body.appendChild(cf_p);

    CF.createBasicElements({
        clickUrl: CLICK_FUNCTION_URL_4 + encodeURIComponent(banner.redirect),
        AV: "https://ad.holmesmind.com/adserver/av?p=" + p + "&type=1",
        bottomImgUrl: banner.image,
    });

    var z = (CF.screenH * 0.3) / CF.screenW;
    let cfAdsUrl = location.hostname,
        cfAdsHeight = '',
        cfAdsBottom = '0px';
    if (cfAdsUrl.search('taiwan.sharelife.tw') == 0 || cfAdsUrl.search('iwoman.sharelife.tw') == 0 || cfAdsUrl.search('tchouse.sharelife.tw') == 0 || cfAdsUrl.search('lohas.sharelife.tw') == 0 || cfAdsUrl.search('bnb.sharelife.tw') == 0 || cfAdsUrl.search('esports.sharelife.tw') == 0) {
        cfAdsBottom = '44px';
        window.top.document.getElementById('CFDiv').style.bottom = '44px';
        window.top.document.getElementById('CFDiv').classList.add('ad-bottom');
    } else if (cfAdsUrl.search('www.foxsports.com.tw') == 0) {
        if ((screen.width / screen.height > 0.5)) {
            cfAdsHeight = '22%';
        } else {
            cfAdsHeight = '60px';
        }
    } else {
        cfAdsBottom = '0';
    }

    CF.createImage([{
            src: imgA.image,
            style: `z-index:4444;
            position:absolute;
            width:${150 * z}px;
            height:${cfAdsHeight};
            bottom:20px;
            left:15%;
            border-radius:5px;
            transform:rotate(50deg);`,
            id: CF.elements.imgId + '1',
            className: `${ CF.elements.class } ImgMove1`,
            href: CLICK_URL + encodeURIComponent(imgA.redirect),

        },
        {
            src: imgB.image,
            style: `z-index:3333;
            position:absolute;
            width:${150 * z}px;
            height:${cfAdsHeight};
            bottom:20px;
            left:30%;
            border-radius:5px;
            transform:rotate(50deg);`,
            id: CF.elements.imgId + '2',
            className: CF.elements.class,
            href: CLICK_FUNCTION_URL_1 + encodeURIComponent(imgB.redirect),
        },
        {
            src: imgC.image,
            style: `z-index:4444;
            position:absolute;
            width:${150 * z}px;
            height:${cfAdsHeight};
            bottom:20px;
            left:45%;
            border-radius:5px;
            transform:rotate(-50deg);`,
            id: CF.elements.imgId + '3',
            className: CF.elements.class,
            href: CLICK_FUNCTION_URL_2 + encodeURIComponent(imgC.redirect),
        },
        {
            src: imgD.image,
            style: `z-index:3333;
            position:absolute;
            width:${ 150 * z }px;
            height:${cfAdsHeight};
            bottom:20px;
            left:65%;
            border-radius:5px;
            transform:rotate(-50deg);`,
            id: CF.elements.imgId + '4',
            className: CF.elements.class,
            href: CLICK_FUNCTION_URL_3 + encodeURIComponent(imgD.redirect),
        }
    ]);

    var alogo = document.createElement('a');
    alogo.id = "alogo";
    alogo.href = "http://www.clickforce.com.tw";
    alogo.target = "_blank";
    var cflogo = document.createElement('img');
    cflogo.src = "//banner-cfnetwork.cdn.hinet.net/cf.png";
    cflogo.setAttribute('style', `position:fixed; bottom:${cfAdsBottom}; right:0; z-index:9999999; width:23px !important; height:20px !important;`);
    alogo.appendChild(cflogo);
    navigator.userAgent.match("ClickForce SDK Dev") ? '' : window.top.document.body.appendChild(alogo);

}



setTimeout(function () {
    window.top.document.getElementById('DivClose').addEventListener('click', function () {
        window.top.document.getElementById('alogo').style.display = 'none';
    });
}, 1500);

/* logo */
/*var cf_logo = frameElement.parentNode.parentNode.children[1].children[3].children[0];*/
setTimeout(function () {
    var cf_logo = document.getElementsByClassName('cflogo')[0];
    if (cf_logo) {
        cf_logo.style = 'display: none';
    } else {
        window.top.document.getElementById('alogo').style.display = 'none';
    }
}, 700);