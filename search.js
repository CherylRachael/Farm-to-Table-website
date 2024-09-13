// scripts.js

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Dummy data for example
    const recipes = [
        { title: 'Fresh Tomato Salad', description: 'A delicious and fresh tomato salad made with locally sourced tomatoes.', link: '#'},
        { title: 'Grilled Corn on the Cob', description: 'Sweet and savory grilled corn, perfect for a summer barbecue.', link: '#'},
        { title: 'Farmhouse Vegetable Soup', description: 'A hearty and healthy soup made with fresh farm vegetables.', link: '#'}
    ];

    // Filter recipes based on query
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query));

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.className = 'recipe';
            recipeElement.innerHTML = `
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <a href="${recipe.link}">View Recipe</a>
            `;
            resultsContainer.appendChild(recipeElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No recipes found.</p>';
    }
});
