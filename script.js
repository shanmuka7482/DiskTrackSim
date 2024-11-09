function GraphGenerator() {
    var x = document.getElementById("Grap_container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    const chartConfigs = [
      {
        elementId: 'chart1',
        label: 'FCFS Seek Times',
        data: [12, 15, 10, 20, 14],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        elementId: 'chart2',
        label: 'SSTF Seek Times',
        data: [10, 8, 6, 5, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        elementId: 'chart3',
        label: 'SCAN Seek Times',
        data: [14, 12, 9, 11, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        elementId: 'chart4',
        label: 'C-SCAN Seek Times',
        data: [13, 16, 8, 9, 15],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
      }
    ];
  
    chartConfigs.forEach(config => {
      const ctx = document.getElementById(config.elementId).getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line', // or 'bar' for a bar chart
        data: {
          labels: ['Process 1', 'Process 2', 'Process 3', 'Process 4', 'Process 5'], // Example processes
          datasets: [{
            label: config.label,
            data: config.data,
            backgroundColor: config.backgroundColor,
            borderColor: config.borderColor,
            borderWidth: 2,
            fill: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, 
          onClick: (event, elements) => {
            if (elements.length > 0) {
              const elementIndex = elements[0].index;
              const label = config.label;
              const value = config.data[elementIndex];
              alert(`Clicked on ${label} - Value: ${value}`);
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Seek Time (ms)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Processes'
              }
            }
          }
        }
      });
    });
  }
  