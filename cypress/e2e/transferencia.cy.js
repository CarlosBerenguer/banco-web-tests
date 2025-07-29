describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    it('Deve transferir quando informo dados e valores validos', () => {
        //act
        cy.realizarTransferencia("Maria Oliveira", "Carlos Berenguer", 11)
                
        //assert
        cy.verificarMensagemNoToast("Transferência realizada!")
    })
    it('Deve mostrar erro quando realizar transferencias com valor maior que 5000,00 sem token', () => {
        //act
        cy.realizarTransferencia("Maria Oliveira", "Carlos Berenguer", 5000.01)
        
        //assert
        cy.verificarMensagemNoToast("Saldo insuficiente para realizar a transferência.")
    })
})