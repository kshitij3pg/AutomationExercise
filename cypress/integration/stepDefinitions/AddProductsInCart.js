/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />
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
And("I Click on Products button",()=>{
    cy.get(locator.homepage.productButton).click()
})
var firstItem, secondItem, firstItemPrice, secondItemPrice
And("Add the first product in the cart and click on Continue Shopping button",()=>{
    cy.xpath("/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/p").invoke('text').as('itemName')
    //cy.get("img[src='/get_product_picture/1']").next().invoke('text').as('itemName')
    cy.get('@itemName').then((item)=>{
        firstItem=item
        cy.log(firstItem)
        //cy.get("img[src='/get_product_picture/1']").next().next().invoke('text').as('itemPrice')
        cy.xpath('html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/h2').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then((price)=>{
        firstItemPrice=price
        cy.log(firstItemPrice)
        })
    })
    cy.get(locator.productsPage.addFirstProduct).eq(0).click()
    cy.get(locator.productsPage.continueShopping).click()
})
And("I add second product in the cart and click on View Cart button",()=>{
    cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]/p').invoke('text').as('itemName')
    cy.get('@itemName').then((item)=>{
        secondItem=item
        cy.log(secondItem)
        cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]/h2').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then((price)=>{
            secondItemPrice=price
            cy.log(secondItemPrice)
            cy.get(locator.productsPage.addSecondProduct).eq(0).click()
        })
    })
    cy.get(locator.productsPage.viewCart).eq(0).click()
})
Then("I verify that both the products are added to the cart with their correct prices, quantity and total price",()=>{
    cy.verifyText(firstItem)
    cy.verifyText(secondItem)
    cy.verifyText(firstItemPrice)
    cy.verifyText(secondItemPrice)
    let firstItemTotal=firstItemPrice
    let secondItemTotal=secondItemPrice
    cy.verifyText(firstItemTotal)
    cy.verifyText(secondItemTotal)
})