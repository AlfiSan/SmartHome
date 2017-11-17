//Type your code here
var KonyMain = java.import("com.konylabs.android.KonyMain");  
var context = KonyMain.getActivityContext();

function getWifiModule() {
	var ERR_WIFI_NOT_WPA = 1;
	var ERR_CONFIG_WIFI = 2;
	var ERR_CANNOT_DISCONNECT = 3;
	var ERR_CANNOT_CONNECT = 4;
	var ERR_SSID_NOT_FOUND = 5;

	var KonyMain = java.import('com.konylabs.android.KonyMain');
	var WifiManager = java.import('android.net.wifi.WifiManager');
	var Context = java.import('android.content.Context');
	var List = java.import('java.util.List');
	var ScanResult = java.import('android.net.wifi.ScanResult');
	var WifiConfiguration = java.import('android.net.wifi.WifiConfiguration');

	var context1 = KonyMain.getActivityContext();
	var wifi = context1.getSystemService(Context.WIFI_SERVICE);

	function isEnabled() {
		return wifi.isWifiEnabled();
	}

	function setEnabled(enabled) {
		wifi.setWifiEnabled(enabled);
	}

	function loadWifiList() {
		var scanResults = wifi.getScanResults();
		var results = [];
      	var arrList = [];
		for (var i = 0; i < scanResults.size(); i++) {
			results.push({
				SSID: scanResults.get(i).SSID,
				BSSID: scanResults.get(i).BSSID,
				capabilities: scanResults.get(i).capabilities,
				frequency: scanResults.get(i).frequency,
				level: scanResults.get(i).level,
				timestamp: scanResults.get(i).timestamp
			});
        	arrList[i] = [scanResults.get(i).SSID,scanResults.get(i).SSID];
		}
      	//frmMain.lstSSID.masterData = arrList;
		return results;
	}

	function connect(ssid, password) {
		var scanResults = loadWifiList();
		var connected = ERR_SSID_NOT_FOUND;

		for (var i = 0; i < scanResults.length; i++) {
			if (ssid === scanResults[i].SSID) {
				connected = connectTo(scanResults[i], password);
			}
		}

		return connected;
	}

	function connectTo(ssidInfo, password) {
		var conf = new WifiConfiguration();
		conf.SSID = '"' + ssidInfo.SSID + '"';
		conf.BSSID = ssidInfo.BSSID;

		if (ssidInfo.capabilities.indexOf('WPA') >= 0) {
			conf.preSharedKey = '"' + password + '"';
		} else {
			// Batalkan jika SSID tidak menggunakan WPA password
			return ERR_WIFI_NOT_WPA;
		}

		var wifiConfigList = wifi.getConfiguredNetworks();
		var updateNetwork = -1;
		for (var i = 0; i < wifiConfigList.size(); i++) {
			var wifiConfig = wifiConfigList.get(i);
			if (wifiConfig.SSID === conf.SSID) {
				conf.networkId = wifiConfig.networkId;
				updateNetwork = wifi.updateNetwork(conf);
			}
		}

		if (updateNetwork === -1) {
			// Jika belum terkonfigurasi, tambah configurasi
			updateNetwork = wifi.addNetwork(conf);
		}

		if (updateNetwork === -1) {
			// Batalkan jika tidak bisa terkonfig
			return ERR_CONFIG_WIFI;
		}

		var disconnected = wifi.disconnect();
		if (!disconnected) {
			// Batalkan jika tidak bisa disconnect wifi sebelumnya
			return ERR_CANNOT_DISCONNECT;
		}

		var enableNetwork = wifi.enableNetwork(updateNetwork, true);
		if (!enableNetwork) {
			// Tidak bisa terkoneksi
			return ERR_CANNOT_CONNECT;
		}

		return 0;
	}

	function disconnect() {
		wifi.disconnect();
	}

	return {
		isEnabled: isEnabled,
		setEnabled: setEnabled,
		loadWifiList: loadWifiList,
		connect: connect,
		disconnect: disconnect
	};
}

function getListDevices(username){
  var devurl = "http://api-kony.conexhub.id/getAllDevices.php?email="+username;
  var devRequest = new kony.net.HttpRequest();
  devRequest.open(constants.HTTP_METHOD_GET, devurl, false);
  devRequest.send();
  kony.application.dismissLoadingScreen();

  var resp = JSON.parse(devRequest.response);
  var data = resp.data;
  //alert(data.length);
  
  if(data.length>0){
    
    
    var i=0;
    for(i=0;i<data.length;i++){
      var nama = data[i].devname;
      var gbr = data[i].icongbr;
      //frmMainMenu.lblRuang.text = nama;
      //frmMainMenu.flxLampu.isVisible = true;
      createFlexDevice(i, nama, gbr);
    }
    
    //alert("Jumlah device :"+data.length);
    frmMainMenu.flxBelum.isVisible = false;
    frmMainMenu.flxSudah.isVisible = true;
  }else{
    frmMainMenu.flxBelum.isVisible = true;
    frmMainMenu.flxSudah.isVisible = false;
  }
}

function createFlexDevice(each,title,gambar){
  	//flxLampu
  	var flxKat1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxDev1"+each,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "skin": "sknFlxShadowWhite",
        "top": "0%",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    flxKat1.setDefaultUnit(kony.flex.DP);
  	//lblRuang
  	var lblRuang = new kony.ui.Label({
        "id": "lblTitle" + each,
        "isVisible": true,
        "skin": "sknLblHitam80Reg",
        "text": title,
        "top": "65%",
        "width": "80%",
      	"height": "20%",
      	"centerX":"45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
  	var imgDev1 = new kony.ui.Image2({
        "centerY": "40%",
      	"centerX": "50%",
        "height": "50dp",
        "id": "imgDev1" + each,
        "isVisible": true,
        "left": "0",
        "skin": "slImage",
        "src": gambar,
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
  	
  	flxKat1.add(imgDev1,lblRuang);
  	frmMainMenu.flxListDevice.add(flxKat1);
}