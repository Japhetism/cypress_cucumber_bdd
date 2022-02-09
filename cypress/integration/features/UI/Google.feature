@UI
Feature: Navigating to Google.com and verifying title
  
  I want to open a search engine
  
  @focus @smoke @test
  Scenario: Opening a search engine Page
    Given I open the Google web url
    Then I verify title of the web page as 'Google'