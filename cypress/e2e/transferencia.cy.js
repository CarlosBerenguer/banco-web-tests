describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })

        cy.contains('button', 'Entrar').click()
    })
    it('Deve transferir quando informo dados e valores validos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-origem').click().contains('Maria Oliveira com saldo de R$').click()
        cy.get('@campo-conta-destino').click().contains('Carlos Berenguer com saldo de R$').click()
        cy.get('#valor').click().type('11')
        cy.contains('button','Transferir').click()
        cy.contains('div', "Transferência realizada!").should('be.visible')
    })
})