//actions.js file 
function AS_Button_a04eac3047754d25ad0bb0b71347ea06(eventobject) {
    frmPeralatan.show();
}

function AS_Button_a2081592ab0a4f9b80fcdef6c4f06173(eventobject) {
    frmMainMenu.show();
}

function AS_Button_ab5b1a0f2b7d432b9e266dcc2093d20c(eventobject) {
    frmRutinitas.show();
}

function AS_Button_ba3419c2aca641248b5c204187651fe5(eventobject) {
    frmRutinitas.show();
}

function AS_Button_bf46a3a5e1fe474ea99001e149d78fe7(eventobject) {
    frmMainMenu.show();
}

function AS_Button_bfaa7b2ec04e472ea2beea82f334f0fb(eventobject) {
    frmRutinitas.show();
}

function AS_Button_cfb7f8898f814443afe8327d75833f2c(eventobject) {
    frmRutinitas.show();
}

function AS_Button_d21d14678a304037bd66135b2a87e9bd(eventobject) {}

function AS_Button_d71ad11a8f7244b39432136cc2a0fc71(eventobject) {
    frmPeralatan.show();
}

function AS_Button_d8f41702e7cc49c88b7764a01a7daa20(eventobject) {}

function AS_Button_e672a973e0414df481759b454dd9d65e(eventobject) {}

function AS_Button_fedf71980c3a40f8aa9e44f5377c9d35(eventobject) {
    frmRutinitas.show();
}

function AS_Button_g25d7ba83a2e457db0c59c4b09724aae(eventobject) {
    frmPeralatan.show();
}

function AS_Button_h0ef810a35ee46ecb7a1d78bf4838f5a(eventobject) {
    frmPeralatan.show();
}

function AS_Button_h89d346c025c4002b9a90006b7850a7d(eventobject) {
    frmMainMenu.show();
}

function AS_Button_hf89efc88ebd471c930ae70ab7b3e40c(eventobject) {}

function AS_Button_i02826c0321946b389ba7aaccafa5174(eventobject) {
    frmPeralatan.show();
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
    frmMainMenu.show();
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

function frmMain_kePagi(eventobject) {
    return AS_Button_ead41d66366f40fe91a6b674ea059f03(eventobject);
}

function AS_Button_ead41d66366f40fe91a6b674ea059f03(eventobject) {
    frmRutinitasPagi.show();
}

function frmPeralatan_KeLampu(eventobject) {
    return AS_Button_ceb6548d6ad348499496029bb41238bf(eventobject);
}

function AS_Button_ceb6548d6ad348499496029bb41238bf(eventobject) {
    frmLampu.show();
}

function frmRutinitas_KePagi(eventobject) {
    return AS_Button_e5e6b410b2aa49858f3ce1bf5ad84356(eventobject);
}

function AS_Button_e5e6b410b2aa49858f3ce1bf5ad84356(eventobject) {
    frmRutinitasPagi.show();
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