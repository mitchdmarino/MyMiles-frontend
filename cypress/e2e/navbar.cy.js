describe('Clicking the navbar links', () => {
  it('navigates to the correct pages', () => {
    cy.visit('http://localhost:3000')

    const pages = ['home', 'history', 'signup', 'login']

    pages.forEach(page => {
      cy.get(`[data-testId="${page}Nav"]`).click()
      if (page === 'home') {
        cy.location('pathname').should('eq', '/')

        cy.get(`[data-testId=${page}]`).should('exist')
      } else {
        cy.location('pathname').should('eq', `/${page}`)

        cy.get(`[data-testId=${page}]`).should('exist')
      }
    })
  })
})
