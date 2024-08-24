document.addEventListener('DOMContentLoaded', function() {
    // Fetch news data from the JSON file
    fetch('news_data.json')
        .then(response => response.json())
        .then(data => {
            // Get the sports news data
            const sportsNews = data.entertainment;

            // Select the sections for positive and negative news
            const positiveCard = document.querySelector('.positive-news ul');
            const negativeCard = document.querySelector('.negative-news ul');

            // Function to populate news cards
            function populateNewsCard(cardElement, newsArray) {
                newsArray.forEach(news => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = news.url;
                    link.target = '_blank';
                    link.textContent = news.headline;
                    listItem.appendChild(link);
                    cardElement.appendChild(listItem);
                });
            }

            // Filter and populate the news based on sentiment
            const positiveNews = sportsNews.filter(news => news.sentiment === 'positive');
            const negativeNews = sportsNews.filter(news => news.sentiment === 'negative');

            populateNewsCard(positiveCard, positiveNews);
            populateNewsCard(negativeCard, negativeNews);
        })
        .catch(error => console.error('Error fetching news:', error));
});
