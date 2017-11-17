function frmRutinitasPagi_ClosePopUp(eventobject) {
    return AS_Button_a22e49826f644235a6ed95b15e04424e(eventobject);
}

function AS_Button_a22e49826f644235a6ed95b15e04424e(eventobject) {
    frmRutinitasPagi.flxPopUpSudah.setVisibility(false);
    frmRutinitasPagi.Menu.setEnabled(true);
    frmRutinitasPagi.flxMain.setEnabled(true);
    frmRutinitasPagi.Rutinitas.setEnabled(true);
}