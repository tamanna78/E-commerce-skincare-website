// Example skincare product data
const skincareProducts = [
  { id: 1, name: 'Hydrating Face Cream', description: 'A moisturizing cream for daily use.' },
  { id: 2, name: 'Vitamin C Serum', description: 'A serum to brighten and even out skin tone.' },
  { id: 3, name: 'Sunscreen SPF 50', description: 'Broad-spectrum sunscreen for all skin types.' },
  { id: 4, name: 'Exfoliating Cleanser', description: 'A cleanser with gentle exfoliating properties.' },
  { id: 5, name: 'Anti-Aging Night Cream', description: 'A night cream to reduce signs of aging.' }
];

// Function to perform the search
function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = skincareProducts.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
  displayResults(results);
}

// Function to display the search results
function displayResults(results) {
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = ''; // Clear previous results
  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No products found.</p>';
      return;
  }
  results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.className = 'product-item';
      resultItem.innerHTML = `<strong>${result.name}</strong>: ${result.description}`;
      resultsContainer.appendChild(resultItem);
  });
}

// Event listeners for search input and button
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      performSearch();
  }
});
