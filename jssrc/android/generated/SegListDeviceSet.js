function initializeSegListDeviceSet() {
    flxRowList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxRowList",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    flxRowList.setDefaultUnit(kony.flex.DP);
    var imgDevice = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40dp",
        "id": "imgDevice",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblIdDevice = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "lblIdDevice",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLbl120HitamReg",
        "text": "Lampu",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxRowList.add(imgDevice, lblIdDevice);
}