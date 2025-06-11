
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const videoFrame = document.getElementById('video');

    // Variable to keep track of whether the video is playing
    let isPlaying = false;
    const videoId = "ge6BKalmxsE"; // New Video ID for the updated trailer
    const originalSrc = `https://www.youtube.com/embed/${videoId}`;// Original video URL without autoplay or mute

    playButton.addEventListener('click', () => {
        if (!isPlaying) {
            // Start the video with autoplay and sound
            videoFrame.src = `${originalSrc}?autoplay=1&mute=0`; // Play with sound
            videoFrame.style.display = "block"; // Show video
        } else {
            // Stop the video
            videoFrame.src = ""; // Reset src to empty to stop the video
            videoFrame.style.display = "none"; // Hide video
        }
        isPlaying = !isPlaying; // Toggle the playing state
    });
    
});


    // Time selection functionality
    const timePoints = document.querySelectorAll('.right_card .crd li h6:nth-child(2)');
    let selectedTime = ''; // Variable to store selected time
    
    timePoints.forEach(timePoint => {
        timePoint.addEventListener('click', () => {
            // Remove selected class from all time points
            timePoints.forEach(tp => tp.classList.remove('h6_active'));
    
            // Add selected class to the clicked time point
            timePoint.classList.add('h6_active');
    
            // Store the selected time
            selectedTime = timePoint.textContent; // Get the time text
            console.log(`Selected Time: ${selectedTime}`);
        });
    });
    
    
        // Date selection functionality
        const datePoints = document.querySelectorAll('.date_point');
        let selectedDate = '';
    
        datePoints.forEach(datePoint => {
            datePoint.addEventListener('click', () => {
                // Remove selected class from all date points
                datePoints.forEach(dp => dp.classList.remove('h6_active'));
                
                // Add selected class to the clicked date point
                datePoint.classList.add('h6_active');
    
                // Store the selected date
                selectedDate = datePoint.textContent; // Get the date number
                console.log(`Selected Date: ${selectedDate}`);
            });
        });

// Define the booked seats and seat price
const bookedSeats = [2, 5, 12, 18, 22]; // Example booked seats
const seatPrice = 200; // Set seat price
let selectedSeats = [];

// Get all seat elements
const seats = document.querySelectorAll('.seat');
const arrowBtn = document.getElementById('arrowBtn');

// Update the UI for booked seats and allow selection
seats.forEach((seat, index) => {
    const seatNumber = index + 1;

    // Mark booked seats as unavailable
    if (bookedSeats.includes(seatNumber)) {
        seat.classList.add('booked'); // Add class to indicate seat is booked
    } else {
        // Allow available seats to be selected
        seat.addEventListener('click', () => toggleSeatSelection(seat, seatNumber));
    }
});

// Function to toggle seat selection
function toggleSeatSelection(seat, seatNumber) {
    if (seat.classList.contains('selected')) {
        // Deselect seat
        seat.classList.remove('selected');
        selectedSeats = selectedSeats.filter(num => num !== seatNumber);
    } else {
        // Select seat
        seat.classList.add('selected');
        selectedSeats.push(seatNumber);
    }
}

// Function to navigate to the next page and pass seat data
arrowBtn.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        const totalPrice = selectedSeats.length * seatPrice;

        // Store selected seats and total price in localStorage
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        localStorage.setItem('totalPrice', totalPrice);

        // Redirect to the next page (display.html)
        window.location.href = 'ulajh display.html';
    } else {
        alert('Please select at least one seat.');
    }
});
