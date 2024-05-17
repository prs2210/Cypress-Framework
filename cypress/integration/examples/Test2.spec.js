/// <reference types="Cypress"  />

describe('My First Test suite', function()
{
    it('My Exercise',function()
{
    cy.visit(Cypress.env('url')+"seleniumPractise/#/")
    cy.get('.search-keyword').type('b')
    cy.wait(2000)
    cy.get('.products').find('.product').should('have.length',8)
    cy.get('.products').find('.product').each(($el, index, $list) => {
        const ProName = $el.find('h4.product-name').text()
        if(ProName.includes('Strawberry'))
        {
            cy.wrap($el).contains('ADD TO CART').click()
            cy.wrap($el).get('a.cart-icon').click()
            cy.wrap($el).get(".action-block button[type='button']").contains('PROCEED TO CHECKOUT').click()
            cy.wait(2000)
            cy.wrap($el).get('p.product-name').should('have.text',ProName)
            cy.wrap($el).get('.products').contains('Place Order').click()
        }

    })

})

})