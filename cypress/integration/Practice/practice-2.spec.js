/// <reference types = 'Cypress' />

describe('Practice session-2', function()
{
    it('practice_2',function()
    {
        const coName = "India"

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.wait(1000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("[type='checkbox']").check(["option1","option2","option3"])

        cy.get('#dropdown-class-example').select('option1').should('contain','Option1')

        cy.get('#autocomplete').type('in')
        
        cy.get('.ui-menu-item-wrapper').each(($el,index,$list) =>
        {
            if($el.text()===coName){
                $el.click()
            }
        })

        cy.get('.radioButton').eq(1).check().should('be.checked')
        

    })
})