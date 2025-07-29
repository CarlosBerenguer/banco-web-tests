describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //act
    cy.fazerLoginComCredenciaisValidas()

    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    cy.screenshot('apos cliar em entrar')
  })

  it('Login com senha inválida deve apresentar mensagem de erro', () => {
    //Act
    cy.fazerLoginComCredenciaisInvalidas()

    //assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})