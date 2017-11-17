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