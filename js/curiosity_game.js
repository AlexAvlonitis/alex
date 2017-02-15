$(document).ready( function() {

$('#generated-code').hide();
$('#visited').hide();
checkCookie();

function setCookie(cname,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname+"=placed; "+expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("alexscookie");
  if (user != "") {
    $('#visited').show();
    $('#generated-code').hide();
    showVisited();
  } else {
    setCookie("alexscookie", 30);
    $('#visited').hide();
    $('#generated-code').show();
    showCode();
  }
}

function showVisited() {
  var expired = "You cannot view this page again"
  $('.visited').html(expired);
}

function showCode() {
  var code = Math.floor(Date.now() / 1000);
  $('.code').html(code);
}

});
