var globalUser = "";
var globalPass = "";
var globalToken = "";
//Type your code here
function loginUser(username, password){
  	globalUser = username;
  	globalPass = password;
  	var log_url="http://api-kony.conexhub.id/login.php?email="+username+"&password="+calcMD5(password);
  	//alert(log_url);
  	
  	
    var request = new kony.net.HttpRequest();
  	request.open(constants.HTTP_METHOD_GET, log_url, false);
  	//request.setRequestHeader("X-Access-Token", globalToken);
  	//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  	request.send();
  	kony.application.dismissLoadingScreen();
  
  	//alert(request.response);
  
  	var result = JSON.parse(request.response);
  	
  	if(result){
      //alert("|data.data.nama:"+result.data.nama); //correct
      var nama = result.data.nama;
      var token = result.data.token;
      var lastlog = result.data.lastlog;
      
      var newDate = new Date();
      var currDate = newDate.getHours();
      var hari = "";
      if(currDate <=11){
        hari = "Selamat Pagi";
      }else if(currDate <=14){
      	hari = "Selamat Siang";
      }else if(currDate <=18){
		hari = "Selamat Sore";
      }else if(currDate <=24){
		hari = "Selamat Malam";
      }
      
      //update last login
      
      var lastLogURL = "http://api-kony.conexhub.id/upd-lastlog.php?kolom="+username;
      var lasLogRequest = new kony.net.HttpRequest();
      lasLogRequest.open(constants.HTTP_METHOD_GET, lastLogURL, false);
      lasLogRequest.send();
      kony.application.dismissLoadingScreen();
      
      //cek usia token
      var tokenurl = "http://api-kony.conexhub.id/check-token-date.php?email="+username;
      var tokenRequest = new kony.net.HttpRequest();
      tokenRequest.open(constants.HTTP_METHOD_GET, tokenurl, false);
      tokenRequest.send();
      kony.application.dismissLoadingScreen();
      
      var tknres = JSON.parse(tokenRequest.response);
      var tknsts = tknres.data.status;
      var tknage = tknres.data.usia;
      //alert("Usia token : "+tknage+"-"+tknsts+"-"+JSON.stringify(tknres));
      
      if(tknsts==="old"){getTokenModegi(username, password);}
      
      getListDevices(username);
      
      frmMainMenu.lblHello.text = "Hello "+nama;
      frmMainMenu.lblInfo.text = hari+" yang ceria";
      frmMainMenu.show();
    }else{
      alert ("Login failed");
    }
}

function getTokenModegi(username, password){
	var loguser = username; if(loguser===""){loguser = globalUser;}
  	var logpass = password; if(logpass===""){logpass = globalPass;}
  	var userplus = loguser+":"+logpass;
  	var loguserpass = base64_encode(userplus);
  	var headers = {"Authorization":"Basic "+loguserpass};
  	var data ={};
  	//alert("user:"+loguser+"|pass:"+logpass+"|userplus:"+userplus+"|enc:"+loguserpass);
  	//alert(JSON.stringify(headers));
  
  	var loginto = kony.sdk.getCurrentInstance().getIntegrationService("SmartLiving");
    kony.application.showLoadingScreen("loadskin","Loading Please Wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "706970"});
    loginto.invokeOperation("authenticate", headers, data, operationSuccess, operationFailure);
  
  	function operationSuccess(response) {
        //alert(response.data);
      	kony.application.dismissLoadingScreen();
      	var aksestoken = response.data.token;
      	//alert(aksestoken);
      	globalToken = response.data.token;
      
      	var tokenURL = "http://api-kony.conexhub.id/upd-token.php?email="+username+"&token="+aksestoken;
      	//alert(tokenURL);
        var tokenRequest = new kony.net.HttpRequest();
        tokenRequest.open(constants.HTTP_METHOD_GET, tokenURL, false);
        tokenRequest.send();
        kony.application.dismissLoadingScreen();
      	//alert ("Token update done");
      	//frmMyPage.lblNama.text = response.data.name;
      	//frmMyPage.txtToken.text = response.data;
      	//frmMyPage.show();
    }
  	function operationFailure(error) {
        alert(" Auth gagal. ");
      	kony.application.dismissLoadingScreen();
    }
}