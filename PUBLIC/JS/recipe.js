// recipe.js

document.addEventListener("DOMContentLoaded", function () {
    // Save Recipe Button
    const saveButton = document.querySelector(".cta button:nth-child(1)");
    saveButton.addEventListener("click", function () {
      alert("Recipe saved to your favorites!");
    });
  
    // Print Recipe Button
    const printButton = document.querySelector(".cta button:nth-child(2)");
    printButton.addEventListener("click", function () {
      window.print();
    });
  
    // Subscribe Button
    const subscribeButton = document.querySelector(".cta button:nth-child(3)");
    subscribeButton.addEventListener("click", function () {
      const email = prompt("Enter your email to subscribe:");
      if (email) {
        alert(`Thank you for subscribing with ${email}!`);
      }
    });
  
    // User Reviews Section
    const reviewsSection = document.querySelector(".user-engagement");
    const reviewsTitle = reviewsSection.querySelector("h2");
    const reviewForm = document.createElement("form");
    reviewForm.innerHTML = `
      <h3>Leave a Review</h3>
      <label for="review">Your Review:</label>
      <textarea id="review" required></textarea>
      <br />
      <label for="rating">Your Rating:</label>
      <select id="rating" required>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
      <br />
      <button type="submit">Submit Review</button>
    `;
    reviewsSection.appendChild(reviewForm);
  
    reviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const reviewText = document.getElementById("review").value;
      const reviewRating = document.getElementById("rating").value;
  
      const reviewItem = document.createElement("div");
      reviewItem.innerHTML = `
        <p><strong>Rating:</strong> ${reviewRating}</p>
        <p><strong>Review:</strong> ${reviewText}</p>
        <hr />
      `;
      reviewsSection.insertBefore(reviewItem, reviewForm);
  
      // Clear the form
      reviewForm.reset();
    });
  });
  