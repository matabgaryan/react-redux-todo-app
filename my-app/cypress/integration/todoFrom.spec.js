describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  const todoInputClassName = 'form-control text-capitalize todo-input'

  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', todoInputClassName)
  });

  it('accepts input', () => {
    const inputValue = 'New Task'

    cy.get(`.todo-input`)
      .type(inputValue)
      .should('have.value', inputValue)
  });

  context('Form submission', () => {
    beforeEach(() => {
      cy.server()
    })

    it('Adds a new todo on submit', () => {
      const itemText = 'New task'
      cy.get('.todo-input')
        .type(itemText)
        .type('{enter}')
      cy.get('.list-group li')
        .should('have.length', 2)
        .and('contain', itemText)
    })
  })

})
