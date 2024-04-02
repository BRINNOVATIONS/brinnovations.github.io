var host=document.location.href;
var referrer=document.referrer;
var testUserAgent=navigator.userAgent;
var gameInTesting=[];
var isTesting=(isTesting)?isTesting:false;
var gameName=(gameName)?gameName:"";

if(testUserAgent.search("Vinebre")>=0||            	
    referrer.search("e-droid.net")>=0||referrer.search("appcreator24.com")>=0||
    referrer.search("cloudfront.net")>=0||referrer.search("amazonaws.com")>=0||location.href.search("marketjs-cloud2.com")>=0)
{
	//FOR TESTING LINK
}
else if(isTesting&&gameInTesting.indexOf(gameName)>=0)
	alert("Testing. This should be redirect");
else
	window.location.href = "http://games.e-droid.net/en/common/access-denied.html";
