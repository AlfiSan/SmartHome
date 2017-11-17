function initializeFBox0cf76dbb5866d4f() {
    FBox0cf76dbb5866d4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "32%",
        "id": "FBox0cf76dbb5866d4f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0cf76dbb5866d4f.setDefaultUnit(kony.flex.DP);
    var imgDevice = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40dp",
        "id": "imgDevice",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "30dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDevice = new kony.ui.Label({
        "centerY": "50%",
        "height": "80%",
        "id": "lblDevice",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLbl120HitamReg",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "60%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    FBox0cf76dbb5866d4f.add(imgDevice, lblDevice);
}