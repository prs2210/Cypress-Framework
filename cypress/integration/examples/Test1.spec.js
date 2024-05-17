/// <reference types="Cypress"  />

describe('My First Test suite', function()
{

it('My First Test case', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(3000)
    cy.get('.product').as('productLocator')
    cy.get('@productLocator').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)
    //Parent child chaining
    cy.get('.products').find('.product').should('have.length',4)

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('sf')
    })

    cy.get('.products').find('.product').each(($el, index, $list) => {

    const textVeg = $el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
        cy.wrap($el).find('.increment').click()
        cy.wrap($el).find('button').click()
    }
    })

    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

    //this is to print in logs
    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })
    
    const fText = cy.get('footer>p').then(function(footertexts){
        cy.log(footertexts.text())
    })


}   )

it('My Exercise',function()
{
    cy.visit(Cypress.env('url')+"seleniumPractise/#/")
    cy.get('.search-keyword').type('b')
    cy.wait(2000)
    cy.get('.products').find('.product').should('have.length',8)
    cy.get('.products').find('.product').eq(7).contains('ADD TO CART').click()
    cy.get('a.cart-icon').click()
    cy.wait(2000)
    cy.get(".action-block button[type='button']").contains('PROCEED TO CHECKOUT').click()
    cy.wait(2000)
    cy.get('.products').contains('Place Order').click()

})


}   )