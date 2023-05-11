//Command to open automation exercise website
Cypress.Commands.add('openAutomationExercise',()=>{
    cy.visit('https://automationexercise.com/')
})
//Command to verify url
Cypress.Commands.add('verifyPage',(url)=>{
    cy.url().should('eq',url)
})
//Command to search product
Cypress.Commands.add('searchProduct',(locator,data)=>{
    cy.get(locator.productsPage.searchLabel).type(data.productsPage.productName)
    cy.get(locator.productsPage.searchButton).click()
})
//Command to verify text
Cypress.Commands.add('verifyText',(text)=>{
    cy.log(typeof text)
    cy.contains(text).should('have.text',text)
})
//Command to check element
Cypress.Commands.add('checkItem',(locator)=>{
    cy.get(locator.productsPage.productImageWrapper).should('exist')
})