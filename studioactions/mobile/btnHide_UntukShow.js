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