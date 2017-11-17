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