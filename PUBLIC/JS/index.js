
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        } 
        
    });
});


document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.closest('a').getAttribute('href');
        if (href.startsWith('#')) {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = href; 
        }
    });
});


document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert('Thank you for subscribing!'); 
        emailInput.value = ''; 
    } else {
        alert('Please enter a valid email address.');
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.querySelectorAll('.feature-item, .recipe-item').forEach(item => {
    item.addEventListener('click', function() {
        alert('You clicked on: ' + this.querySelector('h3').innerText);
    });
});
