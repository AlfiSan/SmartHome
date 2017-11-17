function addWidgetsfrmAturLampu() {
    frmAturLampu.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxBg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var Devices = new NavMenu.Devices({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Devices",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxMerah"
    }, {}, {});
    var Menu = new FlxTitleBack.Menu({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Menu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxPutihTitleBorder"
    }, {}, {});
    Menu.btnBack.onClick = AS_Button_i64592392d724074baea3039eee51418;
    Menu.lblTitle.text = "Lampu";
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "60dp",
        "clipBounds": true,
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var flxGambar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxGambar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGambar.setDefaultUnit(kony.flex.DP);
    var imgLampu = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "130dp",
        "id": "imgLampu",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_lampuon.png",
        "width": "200dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNama = new kony.ui.Label({
        "centerX": "50%",
        "height": "15%",
        "id": "lblNama",
        "isVisible": true,
        "skin": "sknLblHitam130Med",
        "text": "Lampu 1A ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxGambar.add(imgLampu, lblNama);
    var flxAturCahaya = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxAturCahaya",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAturCahaya.setDefaultUnit(kony.flex.DP);
    var SliderLampu = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "SliderLampu",
        "isVisible": true,
        "leftSkin": "skinSliderMerah",
        "max": 100,
        "min": 0,
        "rightSkin": "slSliderRightBlue",
        "selectedValue": 50,
        "step": 1,
        "thumbImage": "slider_ios7.png",
        "width": "80%",
        "zIndex": 1
    }, {}, {
        "thickness": 3
    });
    flxAturCahaya.add(SliderLampu);
    var flxJadwal = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "49%",
        "horizontalScrollIndicator": true,
        "id": "flxJadwal",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxJadwal.setDefaultUnit(kony.flex.DP);
    var segJadwal = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnSelect": "",
            "lblIdDevice": "Aktif",
            "lblJam": "07.00",
            "switchOn": {
                "selectedIndex": 0
            }
        }, {
            "btnSelect": "",
            "lblIdDevice": "Non Aktif",
            "lblJam": "09.00",
            "switchOn": {
                "selectedIndex": 1
            }
        }, {
            "btnSelect": "",
            "lblIdDevice": "Non Aktif",
            "lblJam": "11.00",
            "switchOn": {
                "selectedIndex": 1
            }
        }, {
            "btnSelect": "",
            "lblIdDevice": "Non Aktif",
            "lblJam": "12.00",
            "switchOn": {
                "selectedIndex": 1
            }
        }, {
            "btnSelect": "",
            "lblIdDevice": "Non Aktif",
            "lblJam": "13.00",
            "switchOn": {
                "selectedIndex": 1
            }
        }, {
            "btnSelect": "",
            "lblIdDevice": "Non Aktif",
            "lblJam": "15.00",
            "switchOn": {
                "selectedIndex": 1
            }
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segJadwal",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxRowJadwal,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646450",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnSelect": "btnSelect",
            "flxNama": "flxNama",
            "flxRowJadwal": "flxRowJadwal",
            "lblIdDevice": "lblIdDevice",
            "lblJam": "lblJam",
            "switchOn": "switchOn"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxJadwal.add(segJadwal);
    flxIsi.add(flxGambar, flxAturCahaya, flxJadwal);
    flxMain.add(Devices, Menu, flxIsi);
    frmAturLampu.add(flxMain);
};

function frmAturLampuGlobals() {
    frmAturLampu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAturLampu,
        "enabledForIdleTimeout": false,
        "id": "frmAturLampu",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknMerah"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};