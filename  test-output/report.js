$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage Login",
  "description": "",
  "id": "homepage-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Homepage  login",
  "description": "",
  "id": "homepage-login;homepage--login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click the login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the Emailadress and password",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And click the help and do the all operation"
    }
  ],
  "line": 10,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 3596615400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1509691800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18851014600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_login_page()"
});
formatter.result({
  "duration": 200218900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_Emailadress_and_password()"
});
formatter.result({
  "duration": 11897024500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 834404000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Data Driven",
  "description": "",
  "id": "homepage-login;data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click the login page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the \"\u003cEmailadress\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "homepage-login;data-driven;",
  "rows": [
    {
      "cells": [
        "Emailadress",
        "",
        "password"
      ],
      "line": 21,
      "id": "homepage-login;data-driven;;1"
    },
    {
      "cells": [
        "ppatra9437@gmail.com",
        "",
        "Payal@45"
      ],
      "line": 22,
      "id": "homepage-login;data-driven;;2"
    },
    {
      "cells": [
        "pranjal123@gmail.com",
        "",
        "Mama@123"
      ],
      "line": 23,
      "id": "homepage-login;data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Data Driven",
  "description": "",
  "id": "homepage-login;data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click the login page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the \"ppatra9437@gmail.com\" and \"Payal@45\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1620003600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1401978800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18931211400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_login_page()"
});
formatter.result({
  "duration": 155468600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ppatra9437@gmail.com",
      "offset": 11
    },
    {
      "val": "Payal@45",
      "offset": 38
    }
  ],
  "location": "stepDefination.enter_the_and(String,String)"
});
formatter.result({
  "duration": 12145955700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 836880900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Data Driven",
  "description": "",
  "id": "homepage-login;data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click the login page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the \"pranjal123@gmail.com\" and \"Mama@123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1484703500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1654620100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18913810600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_login_page()"
});
formatter.result({
  "duration": 159191400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pranjal123@gmail.com",
      "offset": 11
    },
    {
      "val": "Mama@123",
      "offset": 38
    }
  ],
  "location": "stepDefination.enter_the_and(String,String)"
});
formatter.result({
  "duration": 12350838900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 766012100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search page",
  "description": "",
  "id": "homepage-login;search-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter the Search product",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click the add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1630031300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1426122200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18914686600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_search_product()"
});
formatter.result({
  "duration": 6957520400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_add_to_cart()"
});
formatter.result({
  "duration": 10623093200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 804712200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Help page",
  "description": "",
  "id": "homepage-login;help-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "click on help",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "enter your problem and get your solution",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1519463000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1486309100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 19078336200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_help()"
});
formatter.result({
  "duration": 997962100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_your_problem_and_get_your_solution()"
});
formatter.result({
  "duration": 1981630000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 771308900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Giftcard page",
  "description": "",
  "id": "homepage-login;giftcard-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click on Giftcards",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "click the wedding cards",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "enter the money and submit buttom",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "enter your details and click the confirm buttom",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1568986300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1598598200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18913218600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_giftcards()"
});
formatter.result({
  "duration": 3161801200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_wedding_cards()"
});
formatter.result({
  "duration": 497163800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_money_and_submit_buttom()"
});
formatter.result({
  "duration": 309927300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_your_details_and_click_the_confirm_buttom()"
});
formatter.result({
  "duration": 1516303600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 795386500,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Trackorder page",
  "description": "",
  "id": "homepage-login;trackorder-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on Trackorder",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "enter the ordernumber and phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "click the submit",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1522190000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1454120000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18888062500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_trackorder()"
});
formatter.result({
  "duration": 3455846500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.enter_the_ordernumber_and_phone_number()"
});
formatter.result({
  "duration": 317707500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_submit()"
});
formatter.result({
  "duration": 152904800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 792870200,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "customerview",
  "description": "",
  "id": "homepage-login;customerview",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "click on customerview",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "store the customer review",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1530327400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1345558800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18904867700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_on_customerview()"
});
formatter.result({
  "duration": 1180754400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.store_the_customer_review()"
});
formatter.result({
  "duration": 44444500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 799896500,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "check the assertion",
  "description": "",
  "id": "homepage-login;check-the-assertion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "click the footer section",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "check the asserstion",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1396086000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1372181900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18915247300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_footer_section()"
});
formatter.result({
  "duration": 1670667900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_the_asserstion()"
});
formatter.result({
  "duration": 671773600,
  "error_message": "java.lang.AssertionError: expected [CNBC TV 18 - Young turks] but found [CNBC TV 18 - Young Turks]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat com.cucumber.StepDefination.stepDefination.check_the_asserstion(stepDefination.java:282)\r\n\tat ✽.And check the asserstion(./Features/Homepage.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 80,
  "name": "check the assertion in stores",
  "description": "",
  "id": "homepage-login;check-the-assertion-in-stores",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "click the stores",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "check the assertion of one product",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1894968000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1346784600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18999277700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_stores()"
});
formatter.result({
  "duration": 2940130700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_the_assertion_of_one_product()"
});
formatter.result({
  "duration": 2501368100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 881573600,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "footer navigate to all the available links present in the footer section",
  "description": "",
  "id": "homepage-login;footer-navigate-to-all-the-available-links-present-in-the-footer-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "navigate to diffrent page",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1476456600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 2323594400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18885607800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_diffrent_page()"
});
formatter.result({
  "duration": 37293110700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1029221300,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "click the sales",
  "description": "",
  "id": "homepage-login;click-the-sales",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "navigate to website_",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "click the popup window",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "click the available sales",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "print all the attribute",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "close the  browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 1715893600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.navigate_to_website_()"
});
formatter.result({
  "duration": 1809863000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_popup_window()"
});
formatter.result({
  "duration": 18898618500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.click_the_available_sales()"
});
formatter.result({
  "duration": 1527577000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.print_all_the_attribute()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.close_the_browser()"
});
formatter.result({
  "duration": 921929100,
  "status": "passed"
});
});