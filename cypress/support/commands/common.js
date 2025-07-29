Cypress.Commands.add('verificarMensagemNoToast', (mensagem) => {
  cy.get('.toast')
    .should('be.visible')
    .should('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoComboBox', (seletor, usuario) => {
  cy.get(`label[for="${seletor}"]`).parent().as(`campo-${seletor}`)
  cy.get(`@campo-${seletor}`).click().contains(`${usuario} com saldo de R$`).click()
})