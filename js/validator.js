$("#formToValidate").validate({
  rules: {
    website: {
      required: true
    },
    fullName: {
      required: true
    },
    emailAddress: {
      required: true,
      email: true
    },
    password: {
      required: true
    },
    cardNumber: {
      required: true,
      creditcard: true
    },
    securityCode: {
      required: true,
      number: true
    }
  },
  messages: {
    website: '<img src="img/warning.png" class="errorMsg">' +
    'Enter domain name</i>',
    fullName: '<img src="img/warning.png" class="errorMsg">' +
    'Enter full name</i>',
    emailAddress: '<img src="img/warning.png" class="errorMsg">' +
    'Enter email address</i>',
    password: '<img src="img/warning.png" class="errorMsg">' +
    'Enter password</i>',
    cardNumber: '<img src="img/warning.png" class="errorMsg">' +
    'Enter valid card number</i>',
    securityCode: '<img src="img/warning.png" class="errorMsg">' +
    'field is required</i>'
  },
  messages: {
    website: '<img src="img/warning.png" class="errorMsg">' +
    'Enter domain name</i>',
    fullName: '<img src="img/warning.png" class="errorMsg">' +
    'Enter full name</i>',
    emailAddress: '<img src="img/warning.png" class="errorMsg">' +
    'Enter email address</i>',
    password: '<img src="img/warning.png" class="errorMsg">' +
    'Enter password</i>',
    cardNumber: '<img src="img/warning.png" class="errorMsg">' +
    'Enter valid card number</i>',
    securityCode: '<img src="img/warning.png" class="errorMsg">' +
    'field is required</i>'
  },
  errorPlacement: function (error, element) {
    if (element.attr("name") === "cardNumber") {
      error.insertAfter("#amex");
    } else if (element.attr("name") === "securityCode") {
      error.insertAfter("#creditCardYear");
    } else {
      error.insertAfter(element);
    }
  }
});
