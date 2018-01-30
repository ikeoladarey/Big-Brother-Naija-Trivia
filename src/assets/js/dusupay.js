/*!
 * DusuPay widget v1.0.1 (https://www.dusupay.com/js/widget.js)
 * Copyright since 2015 .
 * Author Namanya Hillary namanyahillary@gmail.com
 * Still keeping it as simple
 */

function dusupaysetbtn(){
  var dp_x = document.getElementById('dusupay-btn');
  var	dp_atts = dp_x.attributes;
  var denv = dp_x.getAttribute('dusupay_environment');
  denv = (denv=='sandbox')? 'http://sandbox.' : ((denv=='localhost')? 'localhost' : 'https://');
  var dd = denv +'dusupay.com';
  if(denv=='localhost') dd = 'http://localhost/dusupay';
  var dp = '/dusu_payments/dusupay';
  var	dp_q ='?ref=' + document.location.origin;
  for(var i=0;i<dp_atts.length; i++){if(dp_atts[i].name=='src' || dp_atts[i].name=='type' || dp_atts[i].name=='id') continue;dp_param = dp_atts[i].name + '=' + encodeURIComponent(dp_atts[i].value);dp_q += '&' + dp_param;}
  //dp_q = encodeURI(dp_q);
  var d = document.createElement('iframe');
  console.log(dd + dp + dp_q);
  document.body.innerHTML +='<div id="dusupay-close-iframe" onclick="dusupaycloseiframe();"><span>&times;</span></div>';
  document.body.innerHTML += '<iframe src="' + dd + dp + dp_q + '" id="dusupay_pop" name="dusupay" style="z-index: 9999;display: block;border: 0px none transparent;overflow-x: hidden;overflow-y: auto;visibility: hidden;margin: 0px;padding: 0px;-webkit-tap-highlight-color: transparent;position: fixed;left: 0px;top: 0px;width: 100%;max-width: 100%;height: 100%;background: rgba(0, 0, 0, 0.00392157);"></iframe>';
  var st = '#dusupay-close-iframe{position: fixed;z-index:999999;visibility: visible;background: rgb(255, 255, 255);float: right;right: 10px;top: 10px;width: 0.9em;height: 0.95em;cursor: pointer;-webkit-border-radius: 50%;border-radius: 50%;font: normal 1.5em/normal Arial, Helvetica, sans-serif;color: #fff;background: #c9c9c9;text-align: center;text-shadow: 1px 1px 1px rgb(106, 106, 110);-webkit-box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.5) inset;box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.5) inset;line-height:22px;}';
  st += '@media (min-width: 320px) {#dusupay-close-iframe {right: 45%;top: 0px;}}';
  st += '@media (min-width: 600px) {#dusupay-close-iframe {right: 4%;top: 25px;}}';
  st += '@media (min-width: 768px) {#dusupay-close-iframe {right: 4%;top: 37px;}}';
  st += '@media (min-width: 800px) {#dusupay-close-iframe {right: 10%;top: 37px;}}';
  st += '@media (min-width: 980px) {#dusupay-close-iframe {right: 14%;top: 37px;}}';
  st += '@media (min-width: 992px) {#dusupay-close-iframe {right: 36%;top: 37px;}}';
  st += '@media (min-width: 1200px) {#dusupay-close-iframe {right: 36%;top: 37px;}}';
  st += '@media (min-width: 1440px) {#dusupay-close-iframe {right: 37%;top: 37px;}}';
  st += '@media (min-width: 1600px) {#dusupay-close-iframe {right: 38%;top: 37px;}}';
  st += '@media (min-width: 1920px) {#dusupay-close-iframe {right: 41%;top: 52px;}}';
  document.body.innerHTML +='<style>' + st + '</style>';
  document.getElementById('dusupay_pop').onload= function() {dusupayshowiframe();};
}
function dusupayshowiframe(){
  document.getElementById("dusupay_pop").style.visibility = "visible";
  document.getElementById("dusupay-close-iframe").style.visibility = "visible";
}
function dusupaycloseiframe(){
  var x = document.getElementById("dusupay_pop");x.style.visibility = "hidden";x.remove();
  var x = document.getElementById("dusupay-close-iframe");x.remove();
  dusupayevent();
}
function dusupayevent(){
  document.getElementById('dusupay-btn').onclick = function(){return dusupaysetbtn();};
}
