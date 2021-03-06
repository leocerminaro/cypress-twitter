/// <reference types="Cypress" />

// import { baseUrl } from "../../cypress.json";


describe('Funcionalidade: Clicar nos botões', () => {
    //Entrar toda vez na tela inicial
    beforeEach(() => {
        cy.EnterPage();
    })

    it('Clicar em Inscreva-se', () => {
        cy.get('body').then(($body) => {
            //Seletor do botão de Inscreva-se sendo clicado
            if ($body.find('.StaticLoggedOutHomePage-buttons > .EdgeButton--primary').length) {
                cy.get('.StaticLoggedOutHomePage-buttons > .EdgeButton--primary').click()
            } else if($body.find('[data-testid=signupButton]')) {
                cy.get('[data-testid=signupButton]').click()
            }
            //Após clicar, verificar a URL
            cy.url().should('eq', 'https://twitter.com/i/flow/signup')
        })
    })

    it('Clicar em entrar', () => {
        //Seletor do botão de Login sendo clicado
        cy.get('[data-testid=loginButton]').click()
        //Após clicar, verificar a URL
        cy.url().should('eq', 'https://twitter.com/login')
    })
})