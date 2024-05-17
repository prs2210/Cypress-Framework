/// <reference types="Cypress" />

describe('Practice test suite', function () 
{
    it('prctice-1', function () 
    {
        const prodName = ["Beans"]

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.search-keyword').type('be')
        cy.wait(1000)
        cy.get('.product').as('pro')
        cy.get('@pro').should('have.length',6)
        cy.get('.product:visible').should('have.length',5)
        
        //cy.get('@pro').contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) =>
        {
            const pdName = $el.find('h4.product-name').text()
            if(pdName.includes(prodName)){
                cy.wrap($el).find('.increment').click()
                cy.wrap($el).find("button[type='button']").click()
            }
        })

        


    })


})


