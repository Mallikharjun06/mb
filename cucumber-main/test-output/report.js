$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "sign in Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login verification using Username Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "launch application",
  "keyword": "Given "
});
formatter.match({
  "location": "Logintest.launch_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username",
  "keyword": "When "
});
formatter.match({
  "location": "Logintest.enter_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "Logintest.enter_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Login",
  "keyword": "And "
});
formatter.match({
  "location": "Logintest.click_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage Display",
  "keyword": "Then "
});
formatter.match({
  "location": "Logintest.homepage_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click PIM empmodule",
  "keyword": "Then "
});
formatter.match({
  "location": "Logintest.click_pim_empmodule()"
});
formatter.result({
  "status": "passed"
});
});