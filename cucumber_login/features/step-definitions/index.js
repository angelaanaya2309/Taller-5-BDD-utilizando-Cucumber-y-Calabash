var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
  });

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = $('.cajaLogIn');
  
   var mailInput = cajaLogIn.$('input[name="correo"]');
   mailInput.click();
   mailInput.keys(email);
  
   var passwordInput = cajaLogIn.$('input[name="password"]');
   passwordInput.click();
   passwordInput.keys(password);
  });

  When('I try to login', () => {
    var cajaLogIn = $('.cajaLogIn');
    cajaLogIn.$('button=Ingresar').click();
  });
  
  Then('I expect to see {string}', error => {
   $('.aviso.alert.alert-danger').waitForDisplayed(5000);
   var alertText = browser.$('.aviso.alert.alert-danger').getText();
   expect(alertText).to.include(error);  
  });

  Then('I expect to see successful login', () => {
    //$('.btn-group').waitForExist(5000);
    $('[title="cuenta"]').waitForExist(5000);
   });