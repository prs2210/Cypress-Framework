/// <reference types="Cypress"  />

describe('Handling Mouse Hover', function () 
{
    it('Mouse hover', function () 
    {
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.get('.mouse-hover-content').scrollIntoView().invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click({force:true})
        cy.url().should('not.include','top')

    })

})