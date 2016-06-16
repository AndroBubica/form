/* callback for show password*/
var showPassword = function () {
  var isChecked = !$('#revealPassword input:checked').length;
  var passwordInput = $('#password');
  isChecked
    ? passwordInput.attr('type', 'text')
    : passwordInput.attr('type', 'password');
};

var onLoad = function() {
  document.getElementById("revealPassword").style.visibility = 'visible';
  var radioButton = document.getElementsByName("creditCard");
  radioButton[0].required = false;
  for (var i = 0; i < radioButton.length; ++i) {
    radioButton[i].style.visibility = 'hidden';
  }
  document.getElementById("submit").disabled = true;
};

/* on load if javascript is enable take appropriate action*/
onLoad();

/* reveal password on click */
$("#jsShowPassword").on('click', function () {
  showPassword();
});

/* reveal password on space or enter */
$("#jsShowPassword").on('keypress', function (e) {
  if (e.keyCode === 32 || e.keyCode === 13) {
    e.preventDefault();
    this.click();
  }
});

/* safari */
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  var scriptTag = document.createElement('script');
  scriptTag.src = 'js/validator.js';
  $("body").append(scriptTag);
}

/* Credit card validation */
$(function() {
  $ ('#cardNumber').validateCreditCard (function (result) {
    if (result.card_type && result.length_valid && result.valid) {
      $('#'+result.card_type.name).css('opacity', 1);
      document.getElementById("submit").disabled = false;

    } else {
      $('img').css('opacity', 0.5);
      document.getElementById("submit").disabled = true;
    }
  },{ accept: ['visa', 'mastercard', 'discover', 'amex'] });
});



