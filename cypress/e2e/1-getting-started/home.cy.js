/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe('Test rota /home', ()=>{
    it('deve acessar a página corretamente', () => {
        const text = faker.lorem.words
        cy.visit("http://localhost:3000/home")
    
        cy.get('input[placeholder="como você está?"').type('muito bem');
    
        cy.get(`button:first`).click()
    })

    it('deve logar e enviar o texto', ()=>{
        cy.visit("http://localhost:3000/");
      
        cy.get('input[placeholder="email"]').type("a@a.com")
      
        cy.get('input[placeholder="senha"]').type("a")
      
        cy.get(`button:first`).click();
      
        cy.url().should("be.equal", "http://localhost:3000/home");

        cy.get('input[placeholder="como você está?"').type('muito bem');
    
        cy.get(`button:first`).click()

        cy.visit("http://localhost:3000/diagnostic")

      })

      it('deve sair do aplicativo', ()=>{
        cy.visit("http://localhost:3000/");
      
        cy.get('input[placeholder="email"]').type("a@a.com")
      
        cy.get('input[placeholder="senha"]').type("a")
      
        cy.get(`button:first`).click();
      
        cy.url().should("be.equal", "http://localhost:3000/home");

        cy.get('input[placeholder="como você está?"').type('muito bem');
    
        cy.get(`button:first`).click()

        cy.visit("http://localhost:3000/diagnostic")

        cy.get(`button:last`).click()

        cy.visit("http://localhost:3000/")

      })

      it('devevoltar para home', ()=>{
        cy.visit("http://localhost:3000/");
      
        cy.get('input[placeholder="email"]').type("a@a.com")
      
        cy.get('input[placeholder="senha"]').type("a")
      
        cy.get(`button:first`).click();
      
        cy.url().should("be.equal", "http://localhost:3000/home");

        cy.get('input[placeholder="como você está?"').type('muito bem');
    
        cy.get(`button:first`).click()

        cy.visit("http://localhost:3000/diagnostic")

        cy.get(`button:first`).click()

        cy.visit("http://localhost:3000/home")

      })
})