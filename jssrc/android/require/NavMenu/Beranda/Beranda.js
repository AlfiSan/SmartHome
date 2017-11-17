define(function() {
    return function(controller) {
        var Beranda = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "isMaster": true,
            "height": "60dp",
            "id": "Beranda",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "sknFlxMerah",
            "width": "100%"
        }, {}, {});
        Beranda.setDefaultUnit(kony.flex.DP);
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
            "onClick": controller.AS_Button_a0bbcd18d48c48fc94875079b63a5b68,
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
            "onClick": controller.AS_Button_bf75582d02b84fdb93d1703a0dcf78aa,
            "skin": "sknBtnTransparan",
            "top": "1dp",
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
        var btnRuang = new kony.ui.Button({
            "focusSkin": "sknBtnFokusMenu",
            "height": "100%",
            "id": "btnRuang",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_b739078ee663445980c36fb945cee76e,
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
        flxRuang.add(imgRuang, btnRuang);
        Beranda.add(flxHome, flxRutinitas, flxDevice, flxRuang);
        return Beranda;
    }
})