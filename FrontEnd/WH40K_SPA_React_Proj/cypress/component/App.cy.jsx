describe('App Tests', () => {
  it('should load the app', () => {
    // Visit the URL where your app is running
    cy.visit('http://localhost:3000');
    
    // Check if the NavBar component is rendered
    cy.get('.navbar').should('exist');
    
    // Check if the CharacterContext.Provider is rendered
    cy.get('[data-testid=character-context-provider]').should('exist');
  });

  it('should fetch characters', () => {
    // Stub the network request to return a known set of characters
    cy.intercept('GET', 'http://0.0.0.0:3000/characters/', {
      fixture: 'characters.json' // Create a fixture file with sample data
    });

    // Visit the URL where your app is running
    cy.visit('http://localhost:3000');

    // Check if characters are displayed
    cy.get('.character').should('have.length', 5); // Assuming characters are rendered with a class 'character'
  });


});
