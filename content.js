// content.js
const axios = require('axios');
const cheerio = require('cheerio');

function detectDarkPatterns() {
  // Wait for the page to be fully loaded before detecting dark patterns
  document.addEventListener('DOMContentLoaded', async function () {
    try {
      // Fetch the current page's HTML content
      const response = await axios.get(window.location.href);
      const html = response.data;

      // Use cheerio to parse the HTML
      const $ = cheerio.load(html);

      // Get the full page content as text
      const pageContent = $('html').text();

      // Check for specific dark patterns (replace with your own patterns)
      const darkPatterns = [
        'amazon',
        'deceptive',
        'hidden fees',
        'limited time offer',
       ' Headphones'
        // Add more dark pattern phrases or conditions here
      ];

      const hasDarkPattern = darkPatterns.some(pattern => pageContent.includes(pattern));

      // Change text color to red if a dark pattern is found
      if (hasDarkPattern) {
        document.body.style.color = 'red';
      }

      // Send a response indicating whether a dark pattern was found
      chrome.runtime.sendMessage({ action: 'darkPatternsDetected', result: hasDarkPattern });
    } catch (error) {
      console.error('Error fetching or processing the page content:', error.message);
    }
  });
}

// Run the dark pattern detection logic
detectDarkPatterns();
