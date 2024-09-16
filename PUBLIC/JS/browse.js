document.addEventListener("DOMContentLoaded", () => {
    
    const searchButton = document.querySelector(".search-bar button");
    const searchInput = document.querySelector(".search-bar input");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const recipes = document.querySelectorAll(".recipe-card");
        
        recipes.forEach(recipe => {
            const title = recipe.querySelector("h3").textContent.toLowerCase();
            const description = recipe.querySelector("p").textContent.toLowerCase();
            if (title.includes(query) || description.includes(query)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    });

    
    const categoryButtons = document.querySelectorAll(".category-item button");

    categoryButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const category = event.target.textContent.toLowerCase();
            filterRecipesByCategory(category);
        });
    });

    function filterRecipesByCategory(category) {
        const recipes = document.querySelectorAll(".recipe-card");
        
        recipes.forEach(recipe => {
            const categories = recipe.getAttribute("data-categories").split(",");
            if (categories.includes(category)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    }

    
    const recipes = document.querySelectorAll(".recipe-card");
    recipes[0].setAttribute("data-categories", "breakfast, quick & easy");
    recipes[1].setAttribute("data-categories", "lunch, vegetarian");
    recipes[2].setAttribute("data-categories", "dinner, desserts");
    

    
    const recipeCards = document.querySelectorAll(".recipe-card");

    recipeCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    
    categoryButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#ff6b6b";
            button.style.transition = "background-color 0.3s";
        });

        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "#333";
        });
    });
});
