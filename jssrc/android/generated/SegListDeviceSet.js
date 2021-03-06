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
    var flxNama = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxNama",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxNama.setDefaultUnit(kony.flex.DP);
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
        "left": "35%",
        "skin": "sknLbl120HitamReg",
        "text": "Lampu",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnSelect = new kony.ui.Button({
        "focusSkin": "sknBtnTransparanFokus",
        "height": "100%",
        "id": "btnSelect",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_i0eeef07a45a4b7ebe12d8258dca7893,
        "skin": "sknBtnTransparan",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxNama.add(imgDevice, lblIdDevice, btnSelect);
    var switchOn = new kony.ui.Switch({
        "centerY": "50%",
        "height": "70%",
        "id": "switchOn",
        "isVisible": true,
        "left": "6%",
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "sknSwitchMerah",
        "width": "30%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxRowList.add(flxNama, switchOn);
}