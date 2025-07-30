# Banco Web Tests

## Objetivo

Este projeto tem como objetivo demonstrar para os alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript. O foco é apresentar boas práticas de organização, uso de custom commands e geração de relatórios.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e reutilizar ações comuns nos testes.
- **Relatórios**: Geração de relatórios detalhados com o `cypress-mochawesome-reporter`.
- **Dependências**: Todas as dependências estão listadas no arquivo `package.json`.

## Pré-requisitos

Para executar os testes, é necessário que as seguintes aplicações estejam rodando localmente:
- [Banco-API](https://github.com/juliodelimas/banco-api)
- [Banco-Web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se que o Banco-API e Banco-Web estão em execução.
2. Execute os testes via Cypress:
   ```bash
   npx cypress open
   ```
   ou em modo headless:
   ```bash
   npx cypress run
   ```
3. Para gerar o relatório:
   ```bash
   npx cypress run --reporter mochawesome
   ```

## Estrutura dos Testes

Os testes estão organizados na pasta `cypress/e2e`. Cada arquivo representa um cenário de teste relacionado às funcionalidades do Banco-Web.

### Custom Commands

Os comandos personalizados estão em `cypress/support/commands/common.js`. Exemplos:

- `verificarMensagemNoToast(mensagem)`: Verifica se uma mensagem específica aparece no toast.
- `selecionarOpcaoComboBox(seletor, usuario)`: Seleciona uma opção em um combo box baseado no usuário.

```javascript
// Exemplo de uso:
cy.verificarMensagemNoToast('Operação realizada com sucesso')
cy.selecionarOpcaoComboBox('destinatario', 'João')
```

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes e podem ser encontrados na pasta `mochawesome-report`.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com sugestões de melhorias ou correções.

---
Mentoria 2.0