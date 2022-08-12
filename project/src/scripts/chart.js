const myCanvas = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(myCanvas, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        datasets: [{
            label: 'Asistencias',
            data: [13, 19, 3, 5, 2],
            borderColor: '#FF7700',
            backgroundColor: '#FF7700',
            pointStyle: 'circle',
            pointRadius: 5,
        }],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        family: 'Roboto, sans-serif',
                    }
                }
            }
        }
    }
});