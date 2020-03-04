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

When('I open the Register screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});
  
  When(/^I fill with (.*), (.*), (.*) and (.*)$/ , (nombre, apellido, email, password) => {
    
    $('.cajaSignUp').waitForExist(5000);
    var cajaSignUp = $('.cajaSignUp');
  
    var nombreInput = cajaSignUp.$('input[name="nombre"]');
    nombreInput.click();
    nombreInput.keys(nombre);
    
     var apellidoInput = cajaSignUp.$('input[name="apellido"]');
     apellidoInput.click();
     apellidoInput.keys(apellido);
  
     var mailInput = cajaSignUp.$('input[name="correo"]');
     mailInput.click();
     mailInput.keys(email);
    
     var passwordInput = cajaSignUp.$('input[name="password"]');
     passwordInput.click();
     passwordInput.keys(password);

     var checkMaestria = cajaSignUp.$('input[type="checkbox"]');
     checkMaestria.click();

     var select=cajaSignUp.$('[name="idPrograma"]');
     select.click();
     var option=select.$('[value="13"]');
     option.click();

     var checkAcepto = cajaSignUp.$('input[name="acepta"]');
     checkAcepto.click();
     //passwordInput.keys(password);

    });

    When('I try to Register', () => {
      var cajaSignUp = $('.cajaSignUp');
      cajaSignUp.$('button=Registrarse').click();
    });

  Then('I expect to see in register {string}', error => {
    $('.sweet-alert ').isDisplayed(5000);
    var alertText = browser.$('.sweet-alert ').getText();
    expect(alertText).to.include(error);
     });