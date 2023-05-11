Feature: Search Product
    I want to search products by their names

    Scenario: Search product by entering its name
    Given I navigate to the website
    When The home page opens I verify it
    And I Click on Products button and get directed to ALL PRODUCTS page
    And I enter the product name and click on Search Button
    And I verify that SEARCHED PRODUCTS text is visible
    Then I verify that all the products related to search are visible