const nav = document.getElementById("header");
const footer = document.getElementById("footer");
fetch("./header.html").then(res => res.text()).then(data => {
    nav.innerHTML = data;
});

fetch("./footer.html").then(res => res.text()).then(data => {
    footer.innerHTML = data;
});

let alldata = [];
let ctx = document.getElementById('mainCanvas').getContext('2d');
let currentChart = null;

async function fetchData() {
    try {
        const response = await fetch('https://my.api.mockaroo.com/trials.json?key=bc2da090');
        const data = await response.json();
        alldata = data;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to create a pie chart
function createPieChart() {
    const phases = [...new Set(alldata.map(item => item.Trial_Phase))];
    const counts = phases.map(phase => alldata.filter(item => item.Trial_Phase === phase).length);

    window.myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: phases,
            datasets: [{
                data: counts,
                backgroundColor: phases.map(() => `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.7)`),
            }],
        },
    });
}

// Function to create a stacked bar graph
function createStackedBarGraph() {
    const years = [...new Set(alldata.map(item => item.Start_Year))];
    const diseaseTypes = [...new Set(alldata.map(item => item.Disease_Type))];

    const datasets = diseaseTypes.map((type, index) => {
        const counts = years.map(year => alldata.filter(item => item.Disease_Type === type && item.Start_Year === year).length);
        return {
            label: type,
            data: counts,
            backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.7)`,
        };
    });

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: datasets,
        },
        options: {
            scales: {
                x: { stacked: true },
                y: { stacked: true },
            },
        },
    });
}

// Function to create a line graph showing total candidates with age over the years
function createTotalCandidatesLineGraph() {
    // Extract unique years
    const years = [...new Set(alldata.map(item => item.Start_Year))];

    // Prepare dataset for total candidates with age
    const totalCandidatesDataset = {
        label: 'Total Candidates with Age',
        data: [],
        borderColor: 'rgba(75, 192, 192, 0.7)',
        fill: false,
    };

    // Populate dataset with values
    years.forEach(year => {
        const yearData = alldata.filter(item => item.Start_Year === year);
        const totalCandidates = yearData.filter(item => item.age !== null).length;
        totalCandidatesDataset.data.push(totalCandidates);
    });

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [totalCandidatesDataset],
        },
    });
}

function setOnclickBehavior(chartType) {
    document.getElementById(chartType).onclick = function () {
        currentChart = chartType;
        displayChart();
    };
}

// Function to display the selected chart
function displayChart() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas

    // Destroy the previous chart instance
    if (window.myChart) {
        window.myChart.destroy();
    }

    switch (currentChart) {
        case 'pie':
            createPieChart();
            break;
        case 'bar':
            createStackedBarGraph();
            break;
        case 'line':
            createTotalCandidatesLineGraph();
            break;
        default: createPieChart();
            break;
    }
}

/*function drawIntroductoryText() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    ctx.fillStyle = '#000'; // Set the text color
    ctx.font = '14px Arial'; // Set the font size and type
    ctx.textAlign = 'left'; // Set the text alignment
    const textLines = [
        'On clicking pie chart image, the distribution of trials across different phases is shown.',
        'On clicking stacked bar graph, the number of trials per disease type over the years comparison is shown.',
        'On clicking Line graphs, depicting trends in participant demographics like age over time is shown.'
    ];

    const lineHeight = 20; // Adjust this based on your font size and line spacing

    textLines.forEach((line, index) => {
        ctx.fillText(line, 20, 40 + index * lineHeight);
    });
}*/

document.addEventListener("DOMContentLoaded", async function () {
    await fetchData(); // Wait for data to be fetched
    currentChart = 'pie';
    displayChart();
    setOnclickBehavior('pie');
    setOnclickBehavior('bar');
    setOnclickBehavior('line');
});
