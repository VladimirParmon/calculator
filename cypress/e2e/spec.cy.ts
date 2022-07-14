/// <reference types="cypress" />
import { darkTheme, lightTheme } from '../../src/constants/constants';
import { hexToRgb } from '../../src/utils/colorConverter';

describe('app is launched and working', () => {
  it('opens the main page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="header"]');
    cy.get('[data-cy="display"]');
    cy.get('[data-cy="numpad"]');
    cy.get('[data-cy="history"]');
    cy.url().should('include', '/main');
    cy.get('[data-cy="main-page-layout"]').should(
      'have.css',
      'background-color',
      hexToRgb(lightTheme.primary)
    );
  });

  it('can open settings and change theme', () => {
    cy.contains('Settings').click();
    cy.url().should('include', '/settings');

    cy.get('[data-cy="select"]').click();
    cy.contains('Dark theme').click();

    cy.contains('Home').click();
    cy.get('[data-cy="main-page-layout"]').should(
      'have.css',
      'background-color',
      hexToRgb(darkTheme.primary)
    );
  });
});

describe('calculator functionality', () => {
  context('this should be ok as it is', () => {
    it('can add numbers', () => {
      cy.contains('1').click();
      cy.contains('+').click();
      cy.contains('2').click();
      cy.contains('=').click();
      cy.get('[data-cy="display"]').should((element) => {
        expect(element).to.contain('3');
      });
    });

    it('displays history', () => {
      cy.get('[data-cy="history"]')
        .children('span')
        .should('have.length', 1)
        .eq(0)
        .should((span) => {
          expect(span).to.contain('1+2');
        });
    });
  });
  //TODO: context('Bad input should invoke alert with an error
  //TODO: message "Invalid input"', () => { "6*" or "2-)" or "4/0" })
});

describe('Delete history functionality', () => {
  it('can delete history', () => {
    cy.contains('Settings').click();
    cy.contains('Clear All History').click();

    cy.contains('Home').click();
    cy.get('[data-cy="history"]')
      .children('span')
      .should('have.length', 1)
      .eq(0)
      .should((span) => {
        expect(span).to.contain('Nothing to show yet');
      });
  });
});
