//actions.js file 
function AS_Button_a0bbcd18d48c48fc94875079b63a5b68(eventobject) {
    frmRutinitas.show();
}

function AS_Button_a539c5b777b44b6a87e6cc1119504dcf(eventobject) {
    frmRutinitas.show();
}

function AS_Button_b739078ee663445980c36fb945cee76e(eventobject) {
    frmRuangan.show();
}

function AS_Button_bf75582d02b84fdb93d1703a0dcf78aa(eventobject) {
    frmPeralatan.show();
}

function AS_Button_c8f7fb27479e4637bc8e00c91c3c002d(eventobject) {
    frmPeralatan.show();
}

function AS_Button_d5a2b06534754e9b9f71e932398cdf23(eventobject) {
    frmMainMenu.show();
}

function AS_Button_db1d36836dbb431385d3857b5e1e0fdd(eventobject) {}

function AS_Button_f97fe683223e49a58d1bc4dc1689f57d(eventobject) {
    frmRutinitas.show();
}

function AS_Button_ffee6e13cf634d7c90b1aaf136620b74(eventobject) {
    frmPeralatan.show();
}

function AS_Button_ge0f1e1c0ed84e3ab03c27c96b6987f1(eventobject) {
    frmMainMenu.show();
}

function AS_Button_hd9644a3ac164e8593d2513c122538f0(eventobject) {
    frmRuangan.show();
}

function AS_Button_i68a466bf8744814af59d7e7bf605cd7(eventobject) {
    frmRuangan.show();
}

function AS_Button_j0eee3501abc45079c7d787726d161b0(eventobject) {
    frmMainMenu.show();
}

function alertPopUp_Close(eventobject) {
    return AS_Button_a13c27371a3040f28e9b78db3de968a2(eventobject);
}

function AS_Button_a13c27371a3040f28e9b78db3de968a2(eventobject) {
    PopAlert(false, "", "");
}

function AS_Button_ab255b3c977d496b9d930501ab4d1f3c(eventobject) {
    frmRuangDapur.show();
}

function AS_Button_be3c600c66394780be3947624369d6cd(eventobject) {
    frmRutinitasPagi.flxPopUpSudah.setVisibility(false);
    frmRutinitasPagi.Menu.setEnabled(true);
    frmRutinitasPagi.flxMain.setEnabled(true);
    frmRutinitasPagi.Rutinitas.setEnabled(true);
}

function AS_Button_c50f8e24e41d424b807b16d66553191a(eventobject) {
    frmBangunPagi.show();
}

function AS_Button_c78a1b9eef0544aaa1cb9e19ff80280e(eventobject) {
    frmSerialNumber.show();
}

function AS_Button_d9cafa8402ad4d839770b0ff849e72aa(eventobject) {
    frmSerialNumber.show();
}

function AS_Button_f1051baef21c40a7ac57ec154fbd5518(eventobject) {
    frmRutinitasPagi.show();
}

function AS_Button_fa5c4373d3cb48ec93734e3ac4355711(eventobject) {
    frmBangunPagi.show();
}

function AS_Button_ibbf05481de34758ac4cc43d062eb275(eventobject) {
    frmRuangKeluarga.show();
}

function AS_Button_jc35577ac9424171b12cc7d0de253892(eventobject) {
    frmBangunPagi.show();
}

function AS_TextField_cc99ff95595b49cdba5d33ac8583ca21(eventobject, changedtext) {
    function ___ide_onBeginEditing_c53d6d7b1a8647108407fedc60c60226_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___ide_onBeginEditing_c53d6d7b1a8647108407fedc60c60226_Callback
    });
}

function AS_TextField_de0186cf6af047d082f98b5241d57256(eventobject, changedtext) {
    function ___ide_onEndEditing_c2fa95a73f044dbb9e6575c71a4fe241_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "0dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___ide_onEndEditing_c2fa95a73f044dbb9e6575c71a4fe241_Callback
    });
}

function btnHide_UntukShow(eventobject) {
    return AS_Button_f8b63462b1b2465bb9c1e5cba34d0b1a(eventobject);
}

function AS_Button_f8b63462b1b2465bb9c1e5cba34d0b1a(eventobject) {
    frmLogin.txtPassText.text = frmLogin.txtPassword.text;
    frmLogin.btnHide.setVisibility(false);
    frmLogin.btnShow.setVisibility(true);
    frmLogin.txtPassword.setVisibility(false);
    frmLogin.txtPassText.setVisibility(true);
}

function btnLogin_KeFormMain(eventobject) {
    return AS_Button_d46dcf03688f4a7ea17eb8ac794d3f1e(eventobject);
}

function AS_Button_d46dcf03688f4a7ea17eb8ac794d3f1e(eventobject) {
    loginUser("agusari@gmail.com", "5ct3lk0m");
}

function btnShow_UntukHide(eventobject) {
    return AS_Button_d0b091294e874aa7bf0d2d050965214d(eventobject);
}

function AS_Button_d0b091294e874aa7bf0d2d050965214d(eventobject) {
    frmLogin.txtPassword.text = frmLogin.txtPassText.text;
    frmLogin.btnHide.setVisibility(true);
    frmLogin.btnShow.setVisibility(false);
    frmLogin.txtPassword.setVisibility(true);
    frmLogin.txtPassText.setVisibility(false);
}

function frmAddDevice_Back(eventobject) {
    return AS_Button_b85665b192fb4ebfa6b041e8d581ceb5(eventobject);
}

function AS_Button_b85665b192fb4ebfa6b041e8d581ceb5(eventobject) {
    frmPeralatan.show();
}

function frmAddDevice_btnAdd(eventobject) {
    return AS_Button_g9cf14d9d7534baa8c6d6b7735845046(eventobject);
}

function AS_Button_g9cf14d9d7534baa8c6d6b7735845046(eventobject) {
    frmPeralatanPopUp.show();
}

function frmBangunPagi_Back(eventobject) {
    return AS_Button_j30ce38a62694cedaf591525494d65e8(eventobject);
}

function AS_Button_j30ce38a62694cedaf591525494d65e8(eventobject) {
    frmRutinitasPagi.show();
}

function frmLampu_back(eventobject) {
    return AS_Button_d78fd06473544daa8fcc26687102d72e(eventobject);
}

function AS_Button_d78fd06473544daa8fcc26687102d72e(eventobject) {
    frmPeralatan.show();
}

function frmLampu_btnBack(eventobject) {
    return AS_Button_i64592392d724074baea3039eee51418(eventobject);
}

function AS_Button_i64592392d724074baea3039eee51418(eventobject) {
    frmLampu.show();
}

function frmLampu_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_bd11931ac12f4fa4abb6f4fdc0aee235(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_bd11931ac12f4fa4abb6f4fdc0aee235(eventobject, sectionNumber, rowNumber) {
    frmAturLampu.show();
}

function frmMainMenu_KePopUpTambah(eventobject) {
    return AS_Button_a4cffafd014e4a719967be03175836a1(eventobject);
}

function AS_Button_a4cffafd014e4a719967be03175836a1(eventobject) {
    frmPeralatanPopUp.show();
}

function frmMain_kePagi(eventobject) {
    return AS_Button_ead41d66366f40fe91a6b674ea059f03(eventobject);
}

function AS_Button_ead41d66366f40fe91a6b674ea059f03(eventobject) {
    frmRutinitasPagi.show();
}

function frmPeralatanPopUp_btnGateway(eventobject) {
    return AS_Button_aaed6ceab9b640debc4e7ccfa52569b5(eventobject);
}

function AS_Button_aaed6ceab9b640debc4e7ccfa52569b5(eventobject) {
    PopAlert(true, "Alert", "Menu masih pengembangan");
}

function frmPeralatanPopUp_Keluar(eventobject) {
    return AS_Button_d38d361e60644df68fa10be127795202(eventobject);
}

function AS_Button_d38d361e60644df68fa10be127795202(eventobject) {
    frmMainMenu.show();
}

function frmPeralatanPopUp_keQrCode(eventobject) {
    return AS_Button_hade7a020d0a40eb9e6fcb17d0c00048(eventobject);
}

function AS_Button_hade7a020d0a40eb9e6fcb17d0c00048(eventobject) {
    frmQrCode.show();
}

function frmPeralatanPopUp_keScanWifi(eventobject) {
    return AS_Button_b42f87f3ad1142b2885053a4ac100aa6(eventobject);
}

function AS_Button_b42f87f3ad1142b2885053a4ac100aa6(eventobject) {
    frmScanWifi.show();
}

function frmPeralatanPopUp_keSerial(eventobject) {
    return AS_Button_fa284a35ab9647438ac20d74206c2ce5(eventobject);
}

function AS_Button_fa284a35ab9647438ac20d74206c2ce5(eventobject) {
    frmSerialNumber.show();
}

function frmPeralatan_keAddDevice(eventobject) {
    return AS_Button_bd6b26989fe542df92b59016d94a4af3(eventobject);
}

function AS_Button_bd6b26989fe542df92b59016d94a4af3(eventobject) {
    frmAddDevice.show();
}

function frmPeralatan_KeLampu(eventobject) {
    return AS_Button_ceb6548d6ad348499496029bb41238bf(eventobject);
}

function AS_Button_ceb6548d6ad348499496029bb41238bf(eventobject) {
    frmLampu.show();
}

function frmPilihAlarDariWifi_kePeralatan(eventobject) {
    return AS_Button_db7a7ce5e2814a9d8aa55bdad3c0bb0b(eventobject);
}

function AS_Button_db7a7ce5e2814a9d8aa55bdad3c0bb0b(eventobject) {
    checkWifi2();
}

function frmPilihAlatDariWifi_back(eventobject) {
    return AS_Button_f516fef7f18d4f1bb0bb6184c74af3f2(eventobject);
}

function AS_Button_f516fef7f18d4f1bb0bb6184c74af3f2(eventobject) {
    frmScanWifi.show();
}

function frmPilihWifiDevice_back(eventobject) {
    return AS_Button_d18748ec91354ed89665e0eca1610482(eventobject);
}

function AS_Button_d18748ec91354ed89665e0eca1610482(eventobject) {
    frmPilihAlatDariWifi.show();
}

function frmPilihWifi_btnHideUntukShow(eventobject) {
    return AS_Button_a346c7003f3048f089083c787a914250(eventobject);
}

function AS_Button_a346c7003f3048f089083c787a914250(eventobject) {
    frmPilihWifiDevice.txtPassText.text = frmPilihWifiDevice.txtPassword.text;
    frmPilihWifiDevice.btnHide.setVisibility(false);
    frmPilihWifiDevice.btnShow.setVisibility(true);
    frmPilihWifiDevice.txtPassword.setVisibility(false);
    frmPilihWifiDevice.txtPassText.setVisibility(true);
}

function frmPilihWifi_btnShowUntukHide(eventobject) {
    return AS_Button_fae37848a0714b639f59b016a262f08d(eventobject);
}

function AS_Button_fae37848a0714b639f59b016a262f08d(eventobject) {
    frmPilihWifiDevice.txtPassword.text = frmPilihWifiDevice.txtPassText.text;
    frmPilihWifiDevice.btnHide.setVisibility(true);
    frmPilihWifiDevice.btnShow.setVisibility(false);
    frmPilihWifiDevice.txtPassword.setVisibility(true);
    frmPilihWifiDevice.txtPassText.setVisibility(false);
}

function frmQrCode_BackToPopUp(eventobject) {
    return AS_Button_i07c635bcfd34676b19c5380f29b710c(eventobject);
}

function AS_Button_i07c635bcfd34676b19c5380f29b710c(eventobject) {
    frmPeralatanPopUp.show();
}

function frmQrCode_btnScanQr(eventobject) {
    return AS_Button_b991c6ca7ec643bd99ff44debb30d607(eventobject);
}

function AS_Button_b991c6ca7ec643bd99ff44debb30d607(eventobject) {
    function onScanComplete(result) {
        PopAlert(true, "Result", JSON.stringify(result));
        //   alert(JSON.stringify(result));
        frmPeralatan.show();
    }
    qrScan.scanNow(onScanComplete);
}

function frmRuangan_btnDapur(eventobject) {
    return AS_Button_cd686dde5523476c9454d7ccb88c0b3a(eventobject);
}

function AS_Button_cd686dde5523476c9454d7ccb88c0b3a(eventobject) {
    frmRuangDapur.show();
}

function frmRuangan_btnKeluarga(eventobject) {
    return AS_Button_e3bc2652df464db69b3d1796efa2e634(eventobject);
}

function AS_Button_e3bc2652df464db69b3d1796efa2e634(eventobject) {
    frmRuangKeluarga.show();
}

function frmRuangan_btnRtidur(eventobject) {
    return AS_Button_e021d19c685649fd9390c706cc5dc252(eventobject);
}

function AS_Button_e021d19c685649fd9390c706cc5dc252(eventobject) {
    frmRuangTidur.show();
}

function frmRuangan_keKamarMandi(eventobject) {
    return AS_Button_hf5909ce84f74e77815fa0b34b1cf46e(eventobject);
}

function AS_Button_hf5909ce84f74e77815fa0b34b1cf46e(eventobject) {
    frmRuangMandi.show();
}

function frmRuangDapur_Back(eventobject) {
    return AS_Button_d432f2627fea434fbca5ff842b8eeac3(eventobject);
}

function AS_Button_d432f2627fea434fbca5ff842b8eeac3(eventobject) {
    frmRuangan.show();
}

function frmRuangKeluarga_back(eventobject) {
    return AS_Button_a7516bb361ba4c08a2bb2da1e1909e43(eventobject);
}

function AS_Button_a7516bb361ba4c08a2bb2da1e1909e43(eventobject) {
    frmRuangan.show();
}

function frmRuangTidur_back(eventobject) {
    return AS_Button_e14945501370402ab248e819364a6580(eventobject);
}

function AS_Button_e14945501370402ab248e819364a6580(eventobject) {
    frmRuangan.show();
}

function frmRutinitasMalam_Back(eventobject) {
    return AS_Button_c7f2ca9b5cda427dbab3718a4c801a65(eventobject);
}

function AS_Button_c7f2ca9b5cda427dbab3718a4c801a65(eventobject) {
    frmRutinitas.show();
}

function frmRutinitasPagi_ClosePopUp(eventobject) {
    return AS_Button_a22e49826f644235a6ed95b15e04424e(eventobject);
}

function AS_Button_a22e49826f644235a6ed95b15e04424e(eventobject) {
    frmRutinitasPagi.flxPopUpSudah.setVisibility(false);
    frmRutinitasPagi.Menu.setEnabled(true);
    frmRutinitasPagi.flxMain.setEnabled(true);
    frmRutinitasPagi.Rutinitas.setEnabled(true);
}

function frmRutinitasPagi_InfoBangun(eventobject) {
    return AS_Button_cc1b793a4c474887aeaa8cb7efa6056f(eventobject);
}

function AS_Button_cc1b793a4c474887aeaa8cb7efa6056f(eventobject) {
    frmRutinitasPagi.flxPopUpSudah.setVisibility(true);
    frmRutinitasPagi.Menu.setEnabled(false);
    frmRutinitasPagi.flxMain.setEnabled(false);
    frmRutinitasPagi.Rutinitas.setEnabled(false);
}

function frmRutinitasPagi_keBangun(eventobject) {
    return AS_Button_c693a0b60b9d4d2f96af47a4ffbb89f2(eventobject);
}

function AS_Button_c693a0b60b9d4d2f96af47a4ffbb89f2(eventobject) {
    frmBangunPagi.show();
}

function frmRutinitasPagi_kePagi(eventobject) {
    return AS_Button_e78f2d933096482fa9a237be27097ea8(eventobject);
}

function AS_Button_e78f2d933096482fa9a237be27097ea8(eventobject) {
    frmRutinitas.show();
}

function frmRutinitasPagi_postShowDisable(eventobject) {
    return AS_Form_c3b74f8d70014d2ea00d80c05a9068f2(eventobject);
}

function AS_Form_c3b74f8d70014d2ea00d80c05a9068f2(eventobject) {
    if (frmRutinitasPagi.flxPopUp.isVisible == true) {
        frmRutinitasPagi.Menu.setEnabled(false);
        frmRutinitasPagi.flxMain.setEnabled(false);
        frmRutinitasPagi.Rutinitas.setEnabled(false);
    } else if (frmRutinitasPagi.flxPopUp.isVisible == false) {
        frmRutinitasPagi.Menu.setEnabled(true);
        frmRutinitasPagi.flxMain.setEnabled(true);
        frmRutinitasPagi.Rutinitas.setEnabled(true);
    }
}

function frmRutinitasSiang_BackRutinitas(eventobject) {
    return AS_Button_jc1e9ace10234670824fd6d11f3d84c8(eventobject);
}

function AS_Button_jc1e9ace10234670824fd6d11f3d84c8(eventobject) {
    frmRutinitas.show();
}

function frmRutinitasSore_Back(eventobject) {
    return AS_Button_a400fbc7c5b64a66b8dd99571b3fe46e(eventobject);
}

function AS_Button_a400fbc7c5b64a66b8dd99571b3fe46e(eventobject) {
    frmRutinitas.show();
}

function frmRutinitasSore_KeSore(eventobject) {
    return AS_Button_cd0c794a5b9b469e9c81fc81b5613c6f(eventobject);
}

function AS_Button_cd0c794a5b9b469e9c81fc81b5613c6f(eventobject) {
    frmRutinitasSore.show();
}

function frmRutinitas_KeMalam(eventobject) {
    return AS_Button_h6ae6a66507e48e68bd02a8d1f09b094(eventobject);
}

function AS_Button_h6ae6a66507e48e68bd02a8d1f09b094(eventobject) {
    frmRutinitasMalam.show();
}

function frmRutinitas_KePagi(eventobject) {
    return AS_Button_e5e6b410b2aa49858f3ce1bf5ad84356(eventobject);
}

function AS_Button_e5e6b410b2aa49858f3ce1bf5ad84356(eventobject) {
    frmRutinitasPagi.show();
}

function frmRutinitas_KeSiang(eventobject) {
    return AS_Button_be6f44ba68eb4c199043983a2debd62e(eventobject);
}

function AS_Button_be6f44ba68eb4c199043983a2debd62e(eventobject) {
    frmRutinitasSiang.show();
}

function frmScanWifi_back(eventobject) {
    return AS_Button_f706ced29b69464eac37724ab730a18d(eventobject);
}

function AS_Button_f706ced29b69464eac37724ab730a18d(eventobject) {
    frmPeralatanPopUp.show();
}

function frmScanWifi_kePilihAlatDariWifi(eventobject) {
    return AS_Button_f79b6a47fd294fcc89e376eb5930759d(eventobject);
}

function AS_Button_f79b6a47fd294fcc89e376eb5930759d(eventobject) {
    checkWifi();
}

function frmSerialNumber_backToPopUp(eventobject) {
    return AS_Button_ebbc828797d7407db10aa20a942b8009(eventobject);
}

function AS_Button_ebbc828797d7407db10aa20a942b8009(eventobject) {
    frmPeralatanPopUp.show();
}

function frmSerialNumber_Ok(eventobject) {
    return AS_Button_f3ea05c769b7450c81f16e377d1420d4(eventobject);
}

function AS_Button_f3ea05c769b7450c81f16e377d1420d4(eventobject) {
    frmPeralatan.show();
}

function SegListDevice_btnSelect(eventobject, context) {
    return AS_Button_i0eeef07a45a4b7ebe12d8258dca7893(eventobject, context);
}

function AS_Button_i0eeef07a45a4b7ebe12d8258dca7893(eventobject, context) {
    frmAturLampu.show();
}

function txtPassword_BeginEdit(eventobject, changedtext) {
    return AS_TextField_gda4469386f84f479131fe9d358233d2(eventobject, changedtext);
}

function AS_TextField_gda4469386f84f479131fe9d358233d2(eventobject, changedtext) {
    function MOVE_ACTION____a9da4c51a79b4bc8969f9386eeb42219_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____a9da4c51a79b4bc8969f9386eeb42219_Callback
    });
}

function txtPassword_Done(eventobject, changedtext) {
    return AS_TextField_e0afc4eb15454b4cb883d7c8e7d3f824(eventobject, changedtext);
}

function AS_TextField_e0afc4eb15454b4cb883d7c8e7d3f824(eventobject, changedtext) {
    function MOVE_ACTION____c12b07d55aa14dc9a1ccb846f78567e4_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "0dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____c12b07d55aa14dc9a1ccb846f78567e4_Callback
    });
}

function txtPassword_End(eventobject, changedtext) {
    return AS_TextField_jcffa8cf5cae42dabfc0246b36d930c5(eventobject, changedtext);
}

function AS_TextField_jcffa8cf5cae42dabfc0246b36d930c5(eventobject, changedtext) {
    function MOVE_ACTION____bdf6e6aa65784a43bbdd06138d44f30c_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "0dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____bdf6e6aa65784a43bbdd06138d44f30c_Callback
    });
}

function txtPassword_Start(eventobject, x, y) {
    return AS_TextField_f49656fbbe194ccdad3c9891ddfe08ac(eventobject, x, y);
}

function AS_TextField_f49656fbbe194ccdad3c9891ddfe08ac(eventobject, x, y) {
    function MOVE_ACTION____c60e8fcb775149beb975637cd00837e4_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____c60e8fcb775149beb975637cd00837e4_Callback
    });
}

function txtUsername_BeginType(eventobject, changedtext) {
    return AS_TextField_cb33c5b781c44381a4b93ed9e8e45345(eventobject, changedtext);
}

function AS_TextField_cb33c5b781c44381a4b93ed9e8e45345(eventobject, changedtext) {
    function MOVE_ACTION____ae5132cb8b704922b57fbc76f0ac9e5f_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____ae5132cb8b704922b57fbc76f0ac9e5f_Callback
    });
}

function txtUsername_EndType(eventobject, changedtext) {
    return AS_TextField_f821c3bdb807485cabe09491201c9ef1(eventobject, changedtext);
}

function AS_TextField_f821c3bdb807485cabe09491201c9ef1(eventobject, changedtext) {
    function MOVE_ACTION____ee8357ae68ed4d4581ddff75b06a2fb8_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "0dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____ee8357ae68ed4d4581ddff75b06a2fb8_Callback
    });
}

function txtUsername_Start(eventobject, x, y) {
    return AS_TextField_a5b914fd74214f28862aae27098f6258(eventobject, x, y);
}

function AS_TextField_a5b914fd74214f28862aae27098f6258(eventobject, x, y) {
    function MOVE_ACTION____h1cfcc6cae564c1ca4e32e8196168680_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____h1cfcc6cae564c1ca4e32e8196168680_Callback
    });
}

function txtUser_Begin(eventobject, changedtext) {
    return AS_TextField_a08a17f727574c7f838371bffbc38a68(eventobject, changedtext);
}

function AS_TextField_a08a17f727574c7f838371bffbc38a68(eventobject, changedtext) {
    function MOVE_ACTION____c9a1efb1c8d04c80a527b755f451f8da_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____c9a1efb1c8d04c80a527b755f451f8da_Callback
    });
}