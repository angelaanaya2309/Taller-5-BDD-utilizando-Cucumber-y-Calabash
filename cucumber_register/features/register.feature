Feature: Register into losestudiantes
    As an user I want to register user within losestudiantes website

Scenario Outline: Register Students

  Given I go to losestudiantes home screen
    When I open the Register screen
    And I fill with <nombre>, <apellido>, <email> and <password>
    And I try to Register
    Then I expect to see in register <error>

    Examples:
     |nombre     |apellido  | email                          |password| error                                  |
     |angela     | anaya    |angela.anaya.castaneda@gmail.com|12345678| "Ocurrió un error activando tu cuenta" |
     |angela     | anaya    |angela.anaya2309@gmail.com          |12345678| "Registro exitoso!" |