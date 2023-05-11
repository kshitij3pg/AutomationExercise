/// <reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
var locator, data
Given("I navigate to the website",()=>{
    cy.openAutomationExercise()
    cy.fixture('locators.json').then((locators)=>{
        locator=locators
    })
    cy.fixture('data.json').then((d)=>{
        data=d
    })
})
When("The home page opens I verify it",()=>{
    cy.verifyPage(data.homepage.url)  
})
And("I Click on Products button and get directed to ALL PRODUCTS page",()=>{
    cy.get(locator.homepage.productButton).click()
    cy.verifyPage(data.productsPage.url)
})
And("I enter the product name and click on Search Button",()=>{
    cy.searchProduct(locator,data)
})
And("I verify that SEARCHED PRODUCTS text is visible",()=>{
    cy.verifyText(data.productsPage.text)
})
Then("I verify that all the products related to search are visible",()=>{
    cy.checkItem(locator)
})