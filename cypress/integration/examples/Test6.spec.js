/// <reference types="Cypress"  />

describe('Handling Web Table', function () 
{
    it('Table Handle', function () 
    {
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el,index, $list) => 
        {
            const course = $el.text()
            if(course.includes("Bugzilla"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('25')
                
            })
            }
        })

    })

})