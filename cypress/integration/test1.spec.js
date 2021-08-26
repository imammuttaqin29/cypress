/// <reference types="cypress"/>
Cypress.config('pageLoadTimeout')
describe('Test Case Login', () => {
    
    it('1. User can login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
        })
        cy.visit('/automation-practice-form ')
        cy.get('input[id="firstName"]').type('Imam')
        cy.get('input[id="lastName"]').type('Muttaqin')
        cy.get('input[id="userEmail"]').type('imammuthaqien@gmail.com')
        cy.contains('Male').click()
        cy.get('input[id="userNumber"]').type('08976564234')
        cy.contains('Sports').click()
        cy.contains('Reading').click()
        cy.get('textarea[id="currentAddress"]').type('jalan yang benar')
        cy.get('button[id="submit"]').click()
    })
})