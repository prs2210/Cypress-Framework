/// <reference types="Cypress"  />

describe('My First Test suite', function()
{
    it('Web Controls UI',function()
{
    cy.visit(Cypress.env('url')+"AutomationPractice/")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.wait(2000)
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option1','option2','option3'])

    //Static dropdown
    cy.get('fieldset select').select('option1').should('have.value','option1')

    //Dynamic dropdown
    cy.get('input#autocomplete').type("ind")
    
    cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
        if($el.text()==='India')
        {
            $el.click()
        }

    })
    cy.get('input#autocomplete').should('have.value','India')

})

it.only('My Exercise',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#displayed-text').should('be.visible')
    cy.get('input[value="Hide"]').click()
    cy.get('#displayed-text').should('be.hidden')
    cy.get('input[value="Show"]').click()
    cy.get('#displayed-text').should('be.visible')

    cy.get('[value="radio1"]').check().should('be.checked')

})

})