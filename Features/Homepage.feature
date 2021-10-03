Feature: Homepage Login

Scenario: Homepage  login
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
And click the login page
When Enter the Emailadress and password
#And click the help and do the all operation
And close the  browser 

Scenario Outline: Data Driven
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
And click the login page
When Enter the "<Emailadress>" and "<password>"
And close the  browser 

Examples:
|	Emailadress					||   password  |
|	ppatra9437@gmail.com		||  Payal@45   |
|	pranjal123@gmail.com 		||	Mama@123   |


Scenario: Search page
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then Enter the Search product
And click the add to cart
And close the  browser

Scenario: Help page
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click on help
And enter your problem and get your solution
And close the  browser

Scenario: Giftcard page
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click on Giftcards
And click the wedding cards
Then enter the money and submit buttom
Then enter your details and click the confirm buttom
And close the  browser



Scenario: Trackorder page
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click on Trackorder
Then enter the ordernumber and phone number
And click the submit
And close the  browser


Scenario: customerview
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click on customerview
And store the customer review
And close the  browser

Scenario: check the assertion
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click the footer section
And check the asserstion
And close the  browser

Scenario: check the assertion in stores 
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click the stores
And check the assertion of one product
And close the  browser

Scenario: footer navigate to all the available links present in the footer section
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then navigate to diffrent page
And close the  browser

Scenario: click the sales
Given Initialize the browser with chrome
And navigate to website_
And click the popup window 
Then click the available sales
And print all the attribute
And close the  browser
