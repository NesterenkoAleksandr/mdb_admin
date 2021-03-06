const initToggleBtn = () => {
    const toggle = document.getElementById('toggle-button');

    toggle.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar-fixed');
        const div = document.createElement('div');

        div.id = 'sidenav-overlay';
        div.addEventListener('click', () => {
            div.parentNode.removeChild(div);
            sidebar.classList.toggle('toggled');
        });
        document.body.appendChild(div);

        sidebar.classList.toggle('toggled');
    });
}

const initMainChart = () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Orange', 'Green', 'Purple'],
            datasets: [{
                label: '# of Votes',
                data: [12, 14, 17, 8, 16, 5],
                backgroundColor: ['red', 'blue', 'yellow', 'orange', 'green', 'purple'],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

const initLineChart = () => {
    const ctxL = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(105, 0, 132, .2)',
                    ],
                    borderColor: [
                        'rgba(200, 99, 132, .7)',
                    ],
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: [
                        'rgba(0, 137, 132, .2)',
                    ],
                    borderColor: [
                        'rgba(0, 10, 130, .7)',
                    ],
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        },
        options: {
            resposive: true
        }
    });
}

const initPieChart = () => {
    const ctxP = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            datasets: [{
                data: [350, 320, 280, 100, 40],
                backgroundColor: ['red', 'blue', 'yellow', 'orange', 'green'],
                hoverBackgroundColor: ['green', 'orange', 'gray', 'blue', 'red']
            }]
        },
        options: {
            resposive: true
        }
    });
}

const initRadarChart = () => {
    const ctxR = document.getElementById('radarChart').getContext('2d');
    const radarChart = new Chart(ctxR, {
        type: 'radar',
        data: {
            labels: ['First', 'First', 'First', 'First', 'First', 'First', 'First'],
            datasets: [{
                label: "My First dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'red',
                ],
                borderWidth: 2
            }, {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: [
                    'rgba(0, 250, 220, .2)',
                ],
                borderColor: [
                    'green',
                ],
                borderWidth: 2
            }]
        }
    });
}

const initDoughnutChart = () => {
    const ctxD = document.getElementById('doughnutChart').getContext('2d');
    const doughnutChart = new Chart(ctxD, {
        type: 'doughnut',
        data: {
            labels: ['First', 'First', 'First', 'First', 'First'],
            datasets: [{
                data: [300, 50, 100, 40, 120],
                backgroundColor: ['red', 'blue', 'yellow', 'orange', 'green'],
                hoverBackgroundColor: ['green', 'orange', 'gray', 'red', 'blue']
            }]
        },
        options: {
            resposive: true
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Init animations
    new WOW().init();

    initToggleBtn();

    // Init charts
    // Main chart
    initMainChart();

    // Pie chart
    initPieChart();

    // Line chart
    initLineChart();

    // Radar chart
    initRadarChart();

    // Doughnut chart
    initDoughnutChart();
});