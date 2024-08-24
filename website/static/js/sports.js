// Function to fetch and display news articles
async function loadNews() {
    try {
        const response = await fetch('/static/news_data.json');
        const data = await response.json();

        // Assuming 'Sports Department' is the key for sports news
        const department = 'Sports Department'; // Change this to match the actual key for sports news

        const newsSection = document.getElementById('news-cards');
        newsSection.innerHTML = ''; // Clear any existing content

        // Display Positive News
        if (data[department] && data[department].positive) {
            data[department].positive.forEach(news => {
                const card = document.createElement('div');
                card.className = 'card positive';
                card.innerHTML = `
                    <h2>${news.newspaperName}</h2>
                    <p><strong>Date:</strong> ${news.date}</p>
                    <p><strong>Location:</strong> ${news.location}</p>
                    <p><a href="${news.newspaperLink}" target="_blank">${news.articleLink}</a></p>
                `;
                newsSection.appendChild(card);
            });
        }

        // Display Neutral News
        if (data[department] && data[department].neutral) {
            data[department].neutral.forEach(news => {
                const card = document.createElement('div');
                card.className = 'card neutral';
                card.innerHTML = `
                    <h2>${news.newspaperName}</h2>
                    <p><strong>Date:</strong> ${news.date}</p>
                    <p><strong>Location:</strong> ${news.location}</p>
                    <p><a href="${news.newspaperLink}" target="_blank">${news.articleLink}</a></p>
                `;
                newsSection.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error fetching the news data:', error);
    }
}

// Load news when the page is ready
document.addEventListener('DOMContentLoaded', loadNews);
