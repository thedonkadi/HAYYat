// Function to fetch and display news articles
async function loadNews() {
    try {
        // Append a timestamp to the request to prevent caching
        const response = await fetch('news_data.json?t=' + new Date().getTime());
        const data = await response.json();

        const department = 'Sports Department';
        const newsSection = document.getElementById('news-cards');
        newsSection.innerHTML = '';  // Clear any existing content

        // Function to create a news card
        function createNewsCard(news, cardClass) {
            const card = document.createElement('div');
            card.className = `card ${cardClass}`;
            card.innerHTML = `
                <h2>${news.newspaperName}</h2>
                <p><strong>Date:</strong> ${news.date}</p>
                <p><strong>Location:</strong> ${news.location}</p>
                <p><a href="${news.newspaperLink}" target="_blank">${news.articleLink}</a></p>
            `;
            newsSection.appendChild(card);
        }

        // Display Positive News
        if (data[department] && data[department].positive) {
            data[department].positive.forEach(news => createNewsCard(news, 'positive'));
        }

        // Display Neutral News
        if (data[department] && data[department].neutral) {
            data[department].neutral.forEach(news => createNewsCard(news, 'neutral'));
        }

        // Display Negative News
        if (data[department] && data[department].negative) {
            data[department].negative.forEach(news => createNewsCard(news, 'negative'));
        }

    } catch (error) {
        console.error('Error fetching the news data:', error);
    }
}

// Load news when the page is ready
document.addEventListener('DOMContentLoaded', loadNews);
