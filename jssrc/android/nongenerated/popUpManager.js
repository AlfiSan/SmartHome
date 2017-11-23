function PopAlert(show, title, strContent) {
    if (show) {
        alertPopUp.containerHeight = strContent.length / alertPopUp.containerWeight * 200;
        alertPopUp.lblTitle.text = title;
        alertPopUp.TxtIsiLabel.text = strContent;
        alertPopUp.show();
    } else {
        alertPopUp.dismiss();
    }
} //Type your code here