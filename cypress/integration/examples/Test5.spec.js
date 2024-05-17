/// <reference types="Cypress"  />

describe('Handling Child Windows', function () 
{
    it('should handle child window', function () 
    {
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        //cy.get('#opentab').click()

        cy.origin('https://www.qaclickacademy.com/', () => 
        {
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('div.mt-50 h2').should('have.text','Welcome to QAClick Academy ')
            cy.url().should('include','qaclickacademy')
        })
        

    })

})