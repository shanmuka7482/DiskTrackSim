# DiskTrackSim - Disk Scheduling Algorithm Simulator

## Overview
DiskTrackSim is a web-based tool designed to simulate and compare different disk scheduling algorithms. It provides visualizations and performance metrics for First Come First Serve (FCFS), Shortest Seek Time First (SSTF), SCAN, C-SCAN, LOOK, and C-LOOK algorithms.

## Features
- User-friendly web interface using **HTML, Tailwind CSS**.
- Real-time graph visualization with **Chart.js**.
- Supports multiple disk scheduling algorithms.
- Allows user input for disk request sequence and head position.
- Comparison of algorithms based on seek time.

## Technologies Used
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Visualization**: Chart.js

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/DiskTrackSim.git
   cd DiskTrackSim
   ```
2. Open `index.html` in a web browser.
3. Enter disk request sequence, initial head position, and choose an algorithm.
4. Click **Run Algorithm** to see the results.

## How It Works
1. User inputs:
   - Disk request sequence (comma-separated values).
   - Initial head position.
   - Selects a scheduling algorithm.
2. The algorithm computes the seek sequence.
3. Results are displayed as:
   - Graphical representation.
   - Seek sequence.
   - Total head movements.

## Algorithms Implemented
- **FCFS (First Come First Serve)**
- **SSTF (Shortest Seek Time First)**
- **SCAN (Elevator Algorithm)**
- **C-SCAN (Circular SCAN)**
- **LOOK**
- **C-LOOK**

## Screenshots
_Add images or GIFs of the project interface here._

## Future Enhancements
- Implement additional disk scheduling algorithms.
- Improve UI responsiveness.
- Add dark mode.
- Display a comparison table for all algorithms.

## Contributing
Feel free to fork this repository and submit pull requests for enhancements or bug fixes.

## License
This project is licensed under the **MIT License**.

## Contact
For any queries or suggestions, reach out at **your-email@example.com**.

