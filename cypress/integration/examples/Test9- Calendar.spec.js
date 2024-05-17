/// <reference types="Cypress"  />

describe('Handle Canlendar', function () {

    it('Calendar Handling', function () {

        const monthname = "August"
        const day = "15"
        const year = "2030"

        cy.visit(Cypress.env('url')+"seleniumPractise/#/")
        cy.get("a[href='#/offers']").invoke('removeAttr','target').click()
        cy.url().should('include','offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__decade-view__years').each(($el, index, $list) => {
            cy.get('.react-calendar__tile').contains(year).click()
            cy.get('.react-calendar__year-view__months__month').contains(monthname).click()
            cy.get('.react-calendar__tile').contains(day).click()
        })


    })

})