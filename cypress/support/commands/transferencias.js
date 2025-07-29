Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor ) => {
    //act
        cy.selecionarOpcaoComboBox("conta-origem", contaOrigem)
        cy.selecionarOpcaoComboBox("conta-destino", contaDestino)
        cy.get('#valor').click().type(valor)
        cy.contains('button','Transferir').click()
})