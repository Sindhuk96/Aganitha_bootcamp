//fetching header file
const nav = document.getElementById("header");
const footer = document.getElementById("footer");
fetch("./header.html").then(res=>res.text()).then(data=>{
    nav.innerHTML=data;
})

fetch("./footer.html").then(res=>res.text()).then(data=>{
    footer.innerHTML=data;
})

let applyFilterButton=document.querySelector(".apply-filter");
let cardViewButton=document.querySelector(".cardview");
let tableViewButton=document.querySelector(".tableview");
let trialsContainer = document.querySelector('.trials');
let trailViewOptions = document.querySelector('.trailViewOptions');

let allTrialsData = []; // Store all trial data for reference
let containerTrials=[];

document.addEventListener("DOMContentLoaded", function () {
    // Show loading indicator
    showLoadingIndicator();
    closeManageModal();

    // Simulate data fetching with setTimeout
    setTimeout(() => {
        fetch("https://my.api.mockaroo.com/trials.json?key=bc2da090")
            .then(response => response.json())
            .then(data => {
                // Save the data for reference
                allTrialsData = data;
                containerTrials = data;

                // Process the data and create trial cards
                displayTrials(allTrialsData);

                // Hide loading indicator
                
               populateCheckboxModal(data);
            })
            .catch(error => {
                // Log the error
                console.error("Error fetching data:", error);

                // Hide loading indicator and inform the user about the error
                hideLoadingIndicator();
                trialsContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
            });
    }, 2000); // Simulate a delay of 2 seconds for data fetching (adjust as needed)
});

function showLoadingIndicator() {
    // Display loading spinner or message
    const loadContainer = document.createElement('div');
    loadContainer.classList.add('load');  
    loadContainer.innerHTML = '<p>Loading...</p>'; 
    trialsContainer.appendChild(loadContainer);
}

function hideLoadingIndicator() {
    trialsContainer.removeChild(document.querySelector(".load"));
}


function applyFilters() {
    const filters = {
        Disease_Type: document.getElementById('Disease_Type').value.toLowerCase(),
        Trial_Phase: document.getElementById('Trial_Phase').value.toLowerCase(),
        Location: document.getElementById('Location').value.toLowerCase(),
        Status: document.getElementById('Status').value.toLowerCase(),
        Funding_Source: document.getElementById('Funding_Source').value.toLowerCase(),
    };

    const filteredTrials = allTrialsData.filter(trial => {
        return Object.keys(filters).every(key => {
            const filterValue = filters[key];
            return filterValue === '' || (trial[key] && trial[key].toLowerCase().includes(filterValue));
        });
    });

    containerTrials=filteredTrials;
    displayTrials(filteredTrials);
}

function displayTrials(trials) {
    
    // Clear existing content
    trialsContainer.innerHTML = '';

    if (document.querySelector('.tableview').classList.contains('active')) {
        displayTableView(trials);
    } else {
        displayCardView(trials);
    }
}

function displayTableView(trials) {
    if (trials.length === 0) {
        trialsContainer.innerHTML = '<p>No matching trials found.</p>';
        return;
    }

    trialsContainer.innerHTML = '';

    // Add dropdown for sorting
    const sortDropdown = document.getElementById('sortTrialId');



    // Sort trials based on the selected option
    const sortedTrials = sortTrials(trials, sortDropdown.value);

    const table = document.createElement('table');
    const headers = Object.keys(sortedTrials[0]);

    // Create header row
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create data rows
    sortedTrials.forEach(trial => {
        const row = document.createElement('tr');
        headers.forEach(headerText => {
            const cell = document.createElement('td');
            cell.textContent = trial[headerText];
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    trialsContainer.appendChild(table);
}

function sortTrials(trials, sortOrder) {
    return trials.sort((a, b) => {
        switch (sortOrder) {
            case 'id_asc':
                return parseInt(a.Trial_ID) - parseInt(b.Trial_ID);
            case 'id_desc':
                return parseInt(b.Trial_ID) - parseInt(a.Trial_ID);
            case 'age_asc':
                return parseInt(a.age) - parseInt(b.age);
            case 'age_desc':
                return parseInt(b.age) - parseInt(a.age);
            default:
                return parseInt(a.Trial_ID) - parseInt(b.Trial_ID);
        }
    });
}

/*function displayCardView(trials) {
    // Create and display trial cards as before
    trialsContainer.innerHTML="";
    trials.forEach(trial => {
        const trialCard = createTrialCard(trial);
        trialsContainer.appendChild(trialCard);
    });
}*/

const trialsPerPage = 5; // Adjust as needed

function displayCardView(trials, currentPage = 1) {
    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * trialsPerPage;
    const endIndex = startIndex + trialsPerPage;

    // Create and display trial cards for the current page
    trialsContainer.innerHTML = "";
    const currentTrials = trials.slice(startIndex, endIndex);
    currentTrials.forEach(trial => {
        const trialCard = createTrialCard(trial);
        trialsContainer.appendChild(trialCard);
    });

    // Update the current page display
    document.getElementById("currentPage").textContent = `Page ${currentPage}`;
}

// Function to change the current page
function changePage(change) {
    const totalPages = Math.ceil(containerTrials.length / trialsPerPage);
    let currentPage = parseInt(document.getElementById("currentPage").textContent.split(" ")[1]);

    currentPage += change;

    // Ensure the current page is within bounds
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // Display trials for the new page
    displayCardView(containerTrials, currentPage);
}



function createTrialCard(trial) {
    const card = document.createElement('div');
    card.classList.add('trial-card');
    card.setAttribute('data-trial-id', trial.id);

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const title = document.createElement('h4');
    title.textContent = trial.Trial_title;
    cardHeader.appendChild(title);

    const button = document.createElement('button');
    button.textContent = 'Show Details';
    button.addEventListener('click', function () {
        toggleTrialDetailsDynamic(this);
    });
    cardHeader.appendChild(button);

    card.appendChild(cardHeader);

    const collapsibleContent = document.createElement('div');
    collapsibleContent.classList.add('collapsible-content', 'collapsed');

    // Add details for each trial
    const details = ['Objectives', 'Methodology', 'Location', 'Outcome_Success_Rate'];
    details.forEach(detail => {
        const p = document.createElement('h5');
        p.textContent = `${detail}: ${trial[detail]}`;
        collapsibleContent.appendChild(p);
    });

    card.appendChild(collapsibleContent);

    return card;
}

function toggleTrialDetailsDynamic(button) {
    const card = button.parentNode.parentNode; // Adjust this line based on your HTML structure
    const collapsibleContent = card.querySelector('.collapsible-content');
    collapsibleContent.classList.toggle('collapsed');

    // Update the button text based on the current visibility state
    const buttonText = collapsibleContent.classList.contains('collapsed') ? 'Show Details' : 'Hide Details';
    button.textContent = buttonText;
}


/*function toggleTrialDetailsDynamic(button) {
    
    const collapsibleContent = button.nextElementSibling;
    collapsibleContent.classList.toggle('collapsed');

    // Update the button text based on the current visibility state
    const buttonText = collapsibleContent.classList.contains('collapsed') ? 'Show Details' : 'Hide Details';
    button.textContent = buttonText;
}*/

applyFilterButton.addEventListener("click",applyFilters);
cardViewButton.addEventListener("click", function () {
    displayCardView(containerTrials);
});

tableViewButton.addEventListener("click", function () {
    displayTableView(applyManageChanges());
});

const sortDropdown = document.getElementById('sortTrialId');

sortDropdown.addEventListener('change', function () {
    const sortedTrials = sortTrials(applyManageChanges(), this.value);
    displayTableView(sortedTrials);
});

function openManageModal() {
    const modal = document.getElementById('manageModal');
    modal.style.display = 'block';
}

function closeManageModal() {
    const modal = document.getElementById('manageModal');
    modal.style.display = 'none';
}

function populateCheckboxModal(data) {
    const trialProperties = Object.keys(data[0]);
    const trialPropertiesContainer = document.querySelector('.trial-properties');

    trialProperties.forEach(property => {
        const label = document.createElement('label');
        label.setAttribute('for', property);
        label.textContent = property;

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', property);
        checkbox.checked = true; // By default, check all checkboxes
        label.appendChild(checkbox);

        trialPropertiesContainer.appendChild(label);
    });
}

function applyManageChanges() {
    const checkboxes = document.querySelectorAll('.trial-properties input[type="checkbox"]');
    const selectedProperties = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    // Display trials with selected properties
    const filteredTrials = containerTrials.map(trial => {
        const filteredTrial = {};
        selectedProperties.forEach(property => {
            filteredTrial[property] = trial[property];
        });        
        return filteredTrial;
    });

    // Display trials with selected properties in table view
    displayTableView(filteredTrials);

    // Close the modal
    closeManageModal();
}

// Add this function to redirect to the data visualization page
function redirectToVisualization() {
    window.location.href = 'graph.html';
}


