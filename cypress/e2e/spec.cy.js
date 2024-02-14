/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {

    cy.intercept('*', (req) => {

      console.log('intercepted request', req);

      if (req.url.includes('data/1')) {
        req.alias = 'one';
      } else if (req.url.includes('data/2')) {
        req.alias = 'two';
      } else if (req.url.includes('data/3')) {
        req.alias = 'three';
      }
    })

    cy.visit('http://127.0.0.1:8080/')

    cy.wait(['@two', '@one', '@three']).then((interception) => {
      const responses = interception.map((i) => i.response.body.name);
        console.log('responses', responses);
      expect(responses).to.equal([2, 1, 3]);
    });
  })
})
