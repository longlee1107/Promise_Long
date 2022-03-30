async function _searchArticles() {
    await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=d174720f7f28494eb86e576061f0cc64')
        .then(response => response.json())
        .then(data => {
            let ulArticles = document.querySelector('.articles');
            data.articles.forEach(article => {
                if (article.title.toLowerCase().includes(document.querySelector('input[name="search"]').value.toLowerCase())) {
                    let liArticle = document.createElement('li');
                    liArticle.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}">Read more</a>
                    `;
                    ulArticles.appendChild(liArticle);
                    console.log(ulArticles);
                } else {
                    console.log('No results');
                }
            });
            data.articles.forEach(article => {
                if (document.querySelector('input[name="search"]').value === null) {
                    ulArticles.innerHTML = '';
                }
            });
        })
}