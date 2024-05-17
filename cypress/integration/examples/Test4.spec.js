/// <reference types="Cypress"  />

describe('My First Test suite', function()
{
it('Alert Control-1',function()
{
    cy.visit(Cypress.env('url')+"AutomationPractice/")
    cy.get('input#name').type('Pankaj Shinde')
    cy.get('#alertbtn').click()
    cy.get('input#name').type('Pankaj Shinde')
    cy.get('#confirmbtn').click()

    cy.on('window:alert',(str) =>
    {
        //Mocha
        expect(str).to.equal('Hello Pankaj Shinde, share this practice page and share your knowledge')
    })

})

it('Alert Control-2',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('input#name').type('Pankaj Shinde')
    cy.get('#confirmbtn').click()
    cy.on('window:alert',(str) =>
    {
        //Mocha
        expect(str).to.equal('Hello Pankaj Shinde, Are you sure you want to confirm?')
    })

})

})