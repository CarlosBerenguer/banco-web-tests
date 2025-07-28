describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.screenshot("após visitar pagina")
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {

    //act
    cy.fixture('credenciais').then(credenciais =>{
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos preencher dados validos')

    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    cy.screenshot('apos cliar em entrar')
  })

  it('Login com senha inválida deve apresentar mensagem de erro', () => {

    //act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
      
    cy.get('#login-section > .btn').click()

    //assert
    cy.get('.toast')
      .should('be.visible')
      .should('have.text', 'Erro no login. Tente novamente.')
  })
})