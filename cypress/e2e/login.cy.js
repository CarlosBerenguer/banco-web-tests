describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //arrange
    //cy.visit('http://localhost:4000')

    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button','Entrar').click()

    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com senha inválida deve apresentar mensagem de erro', () => {
    //arrange
    //cy.visit('http://localhost:4000')

    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('1234567')
    cy.get('#login-section > .btn').click()

    //assert
    cy.get('.toast')
      .should('be.visible')
      .should('have.text', 'Erro no login. Tente novamente.')
  })
})