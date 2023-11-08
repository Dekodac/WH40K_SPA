describe('Test_1_NavBar_On_HomePage', () => {

  it('should load the app', () => {
    // Visit the URL where your app is running
    cy.visit('http://localhost:5173/');
    
    // Check if the NavBar component is rendered
    cy.get('.navbar').should('exist');
    
  });
});

describe('Test_2_API_Getting_characters', () => {

  it('Should get the character information', () => {
    // Visit the URL where your app is running
    cy.visit('http://localhost:5173/');
});
});