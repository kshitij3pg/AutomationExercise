Feature: Add Products in Cart
    I want to add products in Cart and verify them

    Scenario: Add Product in Cart and Verify the product details in the cart
    Given I navigate to the website
    When The home page opens I verify it
    And I Click on Products button
    And Add the first product in the cart and click on Continue Shopping button
    And I add second product in the cart and click on View Cart button
    Then I verify that both the products are added to the cart with their correct prices, quantity and total price