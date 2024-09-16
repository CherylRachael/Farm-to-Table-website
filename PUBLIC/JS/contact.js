document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      
      if (validateForm()) {
        
        handleSubmit();
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      
      if (nameInput.value.trim() === "") {
        isValid = false;
        showError(nameInput, "Name is required.");
      } else {
        showSuccess(nameInput);
      }
  
      
      if (emailInput.value.trim() === "") {
        isValid = false;
        showError(emailInput, "Email is required.");
      } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        showError(emailInput, "Please enter a valid email address.");
      } else {
        showSuccess(emailInput);
      }
  
      
      if (messageInput.value.trim() === "") {
        isValid = false;
        showError(messageInput, "Message is required.");
      } else {
        showSuccess(messageInput);
      }
  
      return isValid;
    }
  
    function showError(input, message) {
      const formGroup = input.parentElement;
      formGroup.classList.add("error");
      const small = formGroup.querySelector("small");
      if (small) {
        small.textContent = message;
      } else {
        const errorText = document.createElement("small");
        errorText.textContent = message;
        formGroup.appendChild(errorText);
      }
    }
  
    function showSuccess(input) {
      const formGroup = input.parentElement;
      formGroup.classList.remove("error");
      const small = formGroup.querySelector("small");
      if (small) {
        formGroup.removeChild(small);
      }
    }
  
    function isValidEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    }
  
    function handleSubmit() {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };
  
      
      console.log("Form submitted:", formData);
      alert("Thank you for contacting us!");
  
      
      form.reset();
    }
  });
  