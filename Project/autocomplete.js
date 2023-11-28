const filterFields = ['Disease_Type', 'Trial_Phase', 'Location', 'Status', 'Funding_Source'];

// Fetch data from Mockaroo URL
async function fetchData() {
    try {
        const response = await fetch('https://my.api.mockaroo.com/trials.json?key=bc2da090');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function initializeAutocomplete(inputElement, values) {
    const autocompleteList = document.createElement('ul');
    autocompleteList.className = 'autocomplete-list';

    inputElement.insertAdjacentElement('afterend', autocompleteList);

    inputElement.addEventListener('input', function () {
        const inputText = this.value.toLowerCase();

        const suggestions = values.filter(item => item.toLowerCase().includes(inputText));

        // Show suggestions
        showSuggestions(suggestions);
    });

    function showSuggestions(suggestions) {
        autocompleteList.innerHTML = '';

        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;

            li.addEventListener('click', function () {
                inputElement.value = suggestion;
                autocompleteList.style.display = 'none';
            });

            autocompleteList.appendChild(li);
        });

        // Show/hide autocomplete list based on suggestions
        autocompleteList.style.display = suggestions.length > 0 ? 'block' : 'none';
    }
}

function populateAutocompleteOnFocus() {
    filterFields.forEach(async field => {
        const inputElement = document.getElementById(field);
        const data = await fetchData();
        const values = [...new Set(data.map(item => item[field]))];
        initializeAutocomplete(inputElement, values);
    });
}

// Populate autocomplete lists on page load
populateAutocompleteOnFocus();
