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