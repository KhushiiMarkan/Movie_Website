document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const videoFrame = document.getElementById('video');

    // Variable to keep track of whether the video is playing
    let isPlaying = false;
    const videoId = "qGb5aKEYR8Q"; // Updated video ID
    const originalSrc = `https://www.youtube.com/embed/${videoId}`; // Updated original video URL without autoplay or mute

    playButton.addEventListener('click', () => {
        if (!isPlaying) {
            // Start the video with autoplay
            videoFrame.src = `${originalSrc}?autoplay=1&controls=1;` // Start playing
            videoFrame.style.display = "block"; // Show video
            // playButton.innerHTML = '<i class="bi bi-pause-fill"></i>'; // Change icon to pause
        } else {
            // Stop the video
            videoFrame.src = ""; // Reset src to empty to stop the video
            videoFrame.style.display = "none"; // Hide video
            // playButton.innerHTML = '<i class="bi bi-play-fill"></i>'; // Change icon back to play
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
    if (selectedSeats.length > 0 && selectedDate && selectedTime) { // Ensure date and time are selected
        const totalPrice = selectedSeats.length * seatPrice;
        const subtotal = totalPrice + 169; // Calculate subtotal

        // Store selected seats, total price, date, time, and subtotal in localStorage
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        localStorage.setItem('totalPrice', totalPrice);
        localStorage.setItem('selectedDate', selectedDate);
        localStorage.setItem('selectedTime', selectedTime);
        localStorage.setItem('subtotal', subtotal);

        // Redirect to the next page (display.html)
        window.location.href = 'munjya display.html';
    } else {
        alert('Please select at least one seat, a date, and a time.');
    }
});
