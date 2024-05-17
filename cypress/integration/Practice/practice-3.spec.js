/// <reference types="Cypress" />

describe('practice session-3', function()
{
    it('pract-3', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#name').type('Pankaj')
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    cy.on('window:alert').should('have')


})

})