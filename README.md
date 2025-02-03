<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DiskTrackSim - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #eee;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>DiskTrackSim - Disk Scheduling Algorithm Simulator</h1>

    <h2>Overview</h2>
    <p>DiskTrackSim is a web-based tool designed to simulate and compare different disk scheduling algorithms. It provides visualizations and performance metrics for First Come First Serve (FCFS), Shortest Seek Time First (SSTF), SCAN, C-SCAN, LOOK, and C-LOOK algorithms.</p>

    <h2>Features</h2>
    <ul>
        <li>User-friendly web interface using <strong>HTML, Tailwind CSS</strong>.</li>
        <li>Real-time graph visualization with <strong>Chart.js</strong>.</li>
        <li>Supports multiple disk scheduling algorithms.</li>
        <li>Allows user input for disk request sequence and head position.</li>
        <li>Comparison of algorithms based on seek time.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> HTML, Tailwind CSS, JavaScript</li>
        <li><strong>Visualization:</strong> Chart.js</li>
    </ul>

    <h2>Installation & Usage</h2>
    <pre>
    git clone https://github.com/your-username/DiskTrackSim.git
    cd DiskTrackSim
    </pre>
    <p>Open <code>index.html</code> in a web browser.</p>
    <p>Enter disk request sequence, initial head position, and choose an algorithm.</p>
    <p>Click <strong>Run Algorithm</strong> to see the results.</p>

    <h2>How It Works</h2>
    <ol>
        <li>User inputs: Disk request sequence (comma-separated values), initial head position, and selects a scheduling algorithm.</li>
        <li>The algorithm computes the seek sequence.</li>
        <li>Results are displayed as:
            <ul>
                <li>Graphical representation.</li>
                <li>Seek sequence.</li>
                <li>Total head movements.</li>
            </ul>
        </li>
    </ol>

    <h2>Algorithms Implemented</h2>
    <ul>
        <li>FCFS (First Come First Serve)</li>
        <li>SSTF (Shortest Seek Time First)</li>
        <li>SCAN (Elevator Algorithm)</li>
        <li>C-SCAN (Circular SCAN)</li>
        <li>LOOK</li>
        <li>C-LOOK</li>
    </ul>

    <h2>Screenshots</h2>
    <p><em>Add images or GIFs of the project interface here.</em></p>

    <h2>Future Enhancements</h2>
    <ul>
        <li>Implement additional disk scheduling algorithms.</li>
        <li>Improve UI responsiveness.</li>
        <li>Add dark mode.</li>
        <li>Display a comparison table for all algorithms.</li>
    </ul>

    <h2>Contributing</h2>
    <p>Feel free to fork this repository and submit pull requests for enhancements or bug fixes.</p>

    <h2>License</h2>
    <p>This project is licensed under the <strong>MIT License</strong>.</p>

    <h2>Contact</h2>
    <p>For any queries or suggestions, reach out at <strong>your-email@example.com</strong>.</p>
</body>
</html>

