function expandRunPopup() {
    var yourBlurId = document.getElementById('yourBlurId');
    yourBlurId.style.backdropFilter = `blur(10px)`;
    yourBlurId.style.width = `100%`;
    yourBlurId.style.height = `90%`;

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