  
// Function to fetch a random quote from the Quotes Free API
async function fetchRandomQuote() {
    try {
      const apiUrl = 'https://type.fit/api/quotes';
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch a quote');
      }
  
      const quotes = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    } catch (error) {
      throw error;
    }
  }
  
  // Function to update the HTML with the random quote
  function updateRandomQuote(quote) {
    const quoteContainer = document.querySelector('.quote');
  
    // Create a new paragraph element for the quote
    const quoteParagraph = document.createElement('p');
    quoteParagraph.textContent = `"${quote.text}" - ${quote.author || 'Unknown'}`;
  
    // Replace the previous quote with the new one
    quoteContainer.innerHTML = '';
    quoteContainer.appendChild(quoteParagraph);
  }
  
  // Function to handle the "New Quote" button click event
  async function handleNewQuoteButtonClick() {
    try {
      const quote = await fetchRandomQuote();
      updateRandomQuote(quote);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Add a click event listener to the "New Quote" button
  document.getElementById('new-quote-btn').addEventListener('click', handleNewQuoteButtonClick);
  
  // Initial load: Fetch and display a random quote
  handleNewQuoteButtonClick();
  