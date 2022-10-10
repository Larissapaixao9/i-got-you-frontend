/// <reference types="cypress" />

describe('Testa rota /', () => {
  it('deve acessar a página corretamente', () => {
    const login = {
      email: "b@b.com",
      password: "b",
    }
    cy.visit("http://localhost:3000/")

    cy.get('input[placeholder="email"').type(login.email);

    cy.get('input[placeholder="senha"').type(login.password);

    cy.intercept("POST", "http://localhost:3000/sign-in").as("signin")

    cy.get(`button:first`).click()
})

it('deve retornar erro se não existir cadastro', () => {
  const login = {
    email: "b@b.com",
    password: "b",
  }
  cy.visit("http://localhost:3000/")

  cy.get('input[placeholder="email"').type(login.email);

  cy.get('input[placeholder="senha"').type(login.password);

  cy.intercept("POST", "http://localhost:3000/sign-in").as("signin")

  cy.get(`button:first`).click()

  cy.on("window:alert", (text) => {
    expect(text).to.contains("Error creating email ou senha não encontrado")
  })
})
})

