describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x0C609476442DC803721BD8F697609050CBbe814E/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'SPDX')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'CUSD')
  })

  it('loads the CREDIT and tokens', () => {
    cy.visit('/add/CREDIT/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'CREDIT')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SPDX')
  })

  it('loads the WCREDIT and tokens', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WCREDIT')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SPDX')
  })

  it('does not crash if CREDIT is duplicated', () => {
    cy.visit('/add/CREDIT/CREDIT')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'CREDIT')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'CREDIT')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x0C609476442DC803721BD8F697609050CBbe814E/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'SPDX')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'SPDX')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SPDX')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'CUSD')
    cy.visit('/add/CREDIT')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'CREDIT')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x0C609476442DC803721BD8F697609050CBbe814E-0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.url().should(
      'contain',
      '/add/0x0C609476442DC803721BD8F697609050CBbe814E/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288',
    )
  })

  it('redirects /add/CREDIT-token to /add/CREDIT/token', () => {
    cy.visit('/add/CREDIT-0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.url().should('contain', '/add/CREDIT/0x0C609476442DC803721BD8F697609050CBbe814E')
  })

  it('redirects /add/token-CREDIT to /add/token/CREDIT', () => {
    cy.visit('/add/0x0C609476442DC803721BD8F697609050CBbe814E-CREDIT')
    cy.url().should('contain', '/add/0x0C609476442DC803721BD8F697609050CBbe814E/CREDIT')
  })

  it('redirects /add/WCREDIT to /add/WCREDIT/token', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c-0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.url().should(
      'contain',
      '/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x0C609476442DC803721BD8F697609050CBbe814E',
    )
  })

  it('redirects /add/token-WCREDIT to /add/token/WCREDIT', () => {
    cy.visit('/add/0x0C609476442DC803721BD8F697609050CBbe814E-0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    cy.url().should(
      'contain',
      '/add/0x0C609476442DC803721BD8F697609050CBbe814E/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    )
  })
})
