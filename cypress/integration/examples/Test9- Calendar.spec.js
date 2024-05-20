/// <reference types="Cypress"  />

describe('Handle Canlendar', function () {

    it('Calendar Handling', function () {

        const monthNumber = "6"
        const day = "15"
        const year = "2030"
        const expectedList = [monthNumber,day,year];

        cy.visit(Cypress.env('url')+"seleniumPractise/#/")
        cy.get("a[href='#/offers']").invoke('removeAttr','target').click()
        cy.url().should('include','offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__tile').contains(year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        cy.get('.react-calendar__tile').contains(day).click()

        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
            {
                cy.wrap($el).invoke('val').should('eq',expectedList[index]);
            })


    })

})