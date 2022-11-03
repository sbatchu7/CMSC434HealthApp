function expandRunPopup() {
    var yourBlurId = document.getElementById('yourBlurId');
    yourBlurId.style.backdropFilter = `blur(10px)`;
    yourBlurId.style.width = `100%`;
    yourBlurId.style.height = `69%`;

    var yourPopuId = document.getElementById('yourPopuId');
    yourPopuId.style.width = `90%`;
    yourPopuId.style.height = `90%`;

    var yourPopupTitle = document.getElementById('yourPopupTitle');
    yourPopupTitle.style.width = `60%`;
    yourPopupTitle.style.height = `100%`;
    yourPopupTitle.style.fontSize = '35px';
}

function closeRunPopup() {
    var yourBlurId = document.getElementById('yourBlurId');
    yourBlurId.style.backdropFilter = `blur(0px)`;
    yourBlurId.style.width = `0%`;
    yourBlurId.style.height = `0%`;

    var yourPopuId = document.getElementById('yourPopuId');
    yourPopuId.style.width = `0%`;
    yourPopuId.style.height = `0%`;

    var yourPopupTitle = document.getElementById('yourPopupTitle');
    yourPopupTitle.style.width = `0%`;
    yourPopupTitle.style.height = `0%`;
    yourPopupTitle.style.fontSize = '0px';
}

function expandSitUpPopup() {
    var yourSitUpBlurId = document.getElementById('yourSitUpBlurId');
    yourSitUpBlurId.style.backdropFilter = `blur(10px)`;
    yourSitUpBlurId.style.width = `100%`;
    yourSitUpBlurId.style.height = `69%`;

    var yourSitUpPopuId = document.getElementById('yourSitUpPopuId');
    yourSitUpPopuId.style.width = `90%`;
    yourSitUpPopuId.style.height = `90%`;

    var yourSitUpPopupTitle = document.getElementById('yourSitUpPopupTitle');
    yourSitUpPopupTitle.style.width = `60%`;
    yourSitUpPopupTitle.style.height = `100%`;
    yourSitUpPopupTitle.style.fontSize = '35px';
}

function closeSitUpPopup() {
    var yourSitUpBlurId = document.getElementById('yourSitUpBlurId');
    yourSitUpBlurId.style.backdropFilter = `blur(0px)`;
    yourSitUpBlurId.style.width = `0%`;
    yourSitUpBlurId.style.height = `0%`;

    var yourSitUpPopuId = document.getElementById('yourSitUpPopuId');
    yourSitUpPopuId.style.width = `0%`;
    yourSitUpPopuId.style.height = `0%`;

    var yourSitUpPopupTitle = document.getElementById('yourSitUpPopupTitle');
    yourSitUpPopupTitle.style.width = `0%`;
    yourSitUpPopupTitle.style.height = `0%`;
    yourSitUpPopupTitle.style.fontSize = '0px';
}