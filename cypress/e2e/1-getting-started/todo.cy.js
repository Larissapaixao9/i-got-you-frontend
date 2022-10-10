/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

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

it('deve ir para sign-up e criar usuario', ()=>{
  const user ={
    name:faker.name.firstName(),
    email:faker.internet.email(),
    password:'password',
    confirm_password:'password'
  }
  cy.visit("http://localhost:3000/");

  cy.get('#cadastro').click()

  cy.url().should("be.equal", "http://localhost:3000/sign_up");

  cy.get('input[placeholder="email"]').type(user.email);

  cy.get('input[placeholder="nome"]').type(user.name);

  cy.get('input[placeholder="senha"]').type(user.password);

  cy.get('input[placeholder="confirmar senha"]').type(user.confirm_password);

  cy.get('button').click()

  cy.url().should("be.equal", "http://localhost:3000/");

})

it('deve logar corretamente', ()=>{
  cy.visit("http://localhost:3000/");

  cy.get('input[placeholder="email"]').type("a@a.com")

  cy.get('input[placeholder="senha"]').type("a")

  cy.get(`button:first`).click();

  cy.url().should("be.equal", "http://localhost:3000/home");
})
})

