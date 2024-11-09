function calculateFCFSSeekTime(sequence, headPosition) {
  let totalSeekTime = 0;
  let currentPosition = headPosition;
  eachReqSeekTime = []
  sequence.forEach(request => {
    
    const seekDistance = Math.abs(request - currentPosition);
    eachReqSeekTime.push(seekDistance)
    totalSeekTime += seekDistance;

    currentPosition = request;
  });

  result = {
    seektimes: eachReqSeekTime,
    total: totalSeekTime
  }

  return result;
}

function calculateSSTFSeekTime(sequence, headPosition) {
  let totalSeekTime = 0;
  let currentPosition = headPosition;
  let remainingRequests = [...sequence];
  let eachReqSeekTime = [];

  while (remainingRequests.length > 0) {
    // Find the closest request
    let closestIndex = 0;
    let minSeekDistance = Math.abs(remainingRequests[0] - currentPosition);

    for (let i = 1; i < remainingRequests.length; i++) {
      const seekDistance = Math.abs(remainingRequests[i] - currentPosition);
      if (seekDistance < minSeekDistance) {
        minSeekDistance = seekDistance;
        closestIndex = i;
      }
    }

    // Move to the closest request
    eachReqSeekTime.push(minSeekDistance);
    totalSeekTime += minSeekDistance;
    currentPosition = remainingRequests[closestIndex];
    remainingRequests.splice(closestIndex, 1);
  }

  return { seektimes: eachReqSeekTime, total: totalSeekTime };
}

function calculateSCANSeekTime(sequence, headPosition, direction = "right", diskEnd = 199) {
  let totalSeekTime = 0;
  let currentPosition = headPosition;
  let eachReqSeekTime = [];
  
  // Sort the requests and split into two parts (left and right of the head)
  const left = sequence.filter(request => request < currentPosition).sort((a, b) => b - a);
  const right = sequence.filter(request => request >= currentPosition).sort((a, b) => a - b);

  const scanOrder = direction === "right" ? [...right, diskEnd, ...left] : [...left.reverse(), 0, ...right];
  
  scanOrder.forEach(request => {
    const seekDistance = Math.abs(request - currentPosition);
    eachReqSeekTime.push(seekDistance);
    totalSeekTime += seekDistance;
    currentPosition = request;
  });

  return { seektimes: eachReqSeekTime, total: totalSeekTime };
}

function calculateCSCANSeekTime(sequence, headPosition, direction = "right", diskEnd = 199) {
  let totalSeekTime = 0;
  let currentPosition = headPosition;
  let eachReqSeekTime = [];

  // Sort the requests and split into two parts (left and right of the head)
  const left = sequence.filter(request => request < currentPosition).sort((a, b) => b - a);
  const right = sequence.filter(request => request >= currentPosition).sort((a, b) => a - b);

  const cscanOrder = direction === "right"
    ? [...right, diskEnd, 0, ...left.reverse()]
    : [...left.reverse(), 0, diskEnd, ...right];

  cscanOrder.forEach(request => {
    const seekDistance = Math.abs(request - currentPosition);
    eachReqSeekTime.push(seekDistance);
    totalSeekTime += seekDistance;
    currentPosition = request;
  });

  return { seektimes: eachReqSeekTime, total: totalSeekTime };
}

function GraphGenerator() {

  sequence = document.getElementById("Sequence").value
  head_pos = parseInt(document.getElementById("head_position").value,10)
  dir = document.getElementById("direction").value

  if(!sequence || !head_pos || !dir){
    console.log("provide proper inputs.")
    return
  }

  seqStr = sequence.split(/\s*,\s*/);
  seq = seqStr.map(i => parseInt(i,10))
  console.log(seq, "--",typeof(head_pos))

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
              alert(`${label} - Value: ${value}`);
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
  