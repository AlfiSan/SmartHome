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