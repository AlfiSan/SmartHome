define(function() {
    return function(controller) {
        var Ruangan = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "isMaster": true,
            "height": "60dp",
            "id": "Ruangan",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "sknFlxMerah",
            "width": "100%"
        }, {}, {});
        Ruangan.setDefaultUnit(kony.flex.DP);
        var flxHome = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHome",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flxHome.setDefaultUnit(kony.flex.DP);
        var imgHome = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgHome",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_home.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnHome = new kony.ui.Button({
            "focusSkin": "sknBtnFokusMenu",
            "height": "100%",
            "id": "btnHome",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_ge0f1e1c0ed84e3ab03c27c96b6987f1,
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
        flxHome.add(imgHome, btnHome);
        var flxRutinitas = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRutinitas",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flxRutinitas.setDefaultUnit(kony.flex.DP);
        var imgRutinitas = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgRutinitas",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_jam.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnRutinitas = new kony.ui.Button({
            "focusSkin": "sknBtnFokusMenu",
            "height": "100%",
            "id": "btnRutinitas",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_f97fe683223e49a58d1bc4dc1689f57d,
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
        flxRutinitas.add(imgRutinitas, btnRutinitas);
        var flxDevice = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDevice",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flxDevice.setDefaultUnit(kony.flex.DP);
        var imgDevice = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgDevice",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_device.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnDevice = new kony.ui.Button({
            "focusSkin": "sknBtnFokusMenu",
            "height": "100%",
            "id": "btnDevice",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_ffee6e13cf634d7c90b1aaf136620b74,
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
        flxDevice.add(imgDevice, btnDevice);
        var flxRuang = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRuang",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flxRuang.setDefaultUnit(kony.flex.DP);
        var imgRuang = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgRuang",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_ruangan.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnUser = new kony.ui.Button({
            "focusSkin": "sknBtnFokusMenu",
            "height": "100%",
            "id": "btnUser",
            "isVisible": true,
            "left": "0dp",
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
        flxRuang.add(imgRuang, btnUser);
        Ruangan.add(flxHome, flxRutinitas, flxDevice, flxRuang);
        return Ruangan;
    }
})