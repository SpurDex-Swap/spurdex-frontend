describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x0C609476442DC803721BD8F697609050CBbe814E-0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.url().should(
      'contain',
      '/remove/0x0C609476442DC803721BD8F697609050CBbe814E/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288',
    )
  })

  it('credit-spdx remove', () => {
    cy.visit('/remove/CREDIT/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CREDIT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SPDX')
  })

  it('spdx-credit remove', () => {
    cy.visit('/remove/0x0C609476442DC803721BD8F697609050CBbe814E/CREDIT')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SPDX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CREDIT')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x0C609476442DC803721BD8F697609050CBbe814E/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SPDX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CUSD')
  })

  it('does not crash if CREDIT is duplicated', () => {
    cy.visit('/remove/CREDIT/CREDIT')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CREDIT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CREDIT')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x0C609476442DC803721BD8F697609050CBbe814E/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SPDX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SPDX')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x0C609476442DC803721BD8F697609050CBbe814E')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SPDX')
  })
})
