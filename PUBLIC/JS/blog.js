document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.textContent = 'Load More Articles';
    loadMoreBtn.classList.add('load-more');
    document.querySelector('.blog-articles').appendChild(loadMoreBtn);

    loadMoreBtn.addEventListener('click', loadMoreArticles);

    function loadMoreArticles() {
        const articles = [
            {
                imgSrc: '/PUBLIC/IMAGES/article3.jpg',
                title: 'Title of Blog Post 3',
                description: 'Brief description or excerpt of the blog post. It should be enticing enough to make readers want to click and read more.',
                link: 'article3.html'
            },
            {
                imgSrc: '/PUBLIC/IMAGES/article4.jpg',
                title: 'Title of Blog Post 4',
                description: 'Brief description or excerpt of the blog post. It should be enticing enough to make readers want to click and read more.',
                link: 'article4.html'
            }
        ];

        const articlesContainer = document.querySelector('.blog-articles');
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <img src="${article.imgSrc}" alt="Article Image" />
                <h2><a href="${article.link}">${article.title}</a></h2>
                <p>${article.description}</p>
                <a href="${article.link}" class="read-more">Read More</a>
            `;
            articlesContainer.insertBefore(articleElement, loadMoreBtn);
        });
    }
});
