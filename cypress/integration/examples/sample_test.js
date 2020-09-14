describe('Can add text to the box', function() {
    it('Tests the textarea', function() {
        cy.visit('localhost:3000/pizza')
        cy.get('#instructions')
            .type('these are instructions')
            .should('have.value', 'these are instructions')
    })
})

describe('can add multiple toppings', function() {
    it('selects multiple toppings', function () {
        cy.get('#mushrooms')
            .click()
            .get('#onions')
            .click()
            .get('#peppers')
            .click()
            .get('#mushrooms')
            .should('have.value', 'true')
            .get('#onions')
            .should('have.value', 'true')
            .get('#peppers')
            .should('have.value', 'true')
    })
})

describe('can submit the form', function () {
    it('submits the form', function () {
        cy.get('#name')
            .type('Mr Cypress')
            .get('#submit')
            .click()
            .get('orders')
})
})