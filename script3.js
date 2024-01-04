// Function to fetch country data from the Rest Countries API
async function fetchCountryData() {
    try {
      const apiUrl = 'https://restcountries.com/v3.1/all';
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch country data');
      }
  
      const countryData = await response.json();
      return countryData;
    } catch (error) {
      throw error;
    }
  }
  
  // Function to update the HTML with country information
  function updateCountryInfo(countryInfo) {
    const countryInfoContainer = document.querySelector('.country-info');
  
    // Check if the country data is valid
    if (!countryInfo || countryInfo.length === 0) {
      countryInfoContainer.textContent = 'Country data not available.';
      return;
    }
  
    // Display information for the first country (you can customize this part)
    const country = countryInfo[0];
    const name = country.name.common || 'N/A';
    const capital = country.capital[0] || 'N/A';
    const population = country.population || 'N/A';
    const region = country.region || 'N/A';
  
    // Update the HTML with country information
    const html = `
      <h2>Country Information</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Capital:</strong> ${capital}</li>
        <li><strong>Population:</strong> ${population}</li>
        <li><strong>Region:</strong> ${region}</li>
      </ul>
    `;
  
    countryInfoContainer.innerHTML = html;
  }
  
  // Main function to fetch and update country information
  async function getAndDisplayCountryInfo() {
    try {
      const countryInfo = await fetchCountryData();
      updateCountryInfo(countryInfo);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Call the main function to fetch and display country information when the page loads
  window.addEventListener('load', getAndDisplayCountryInfo);
  