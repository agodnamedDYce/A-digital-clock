// Function to update clock and date
function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    const dateElement = document.getElementById('date-display');
    const now = new Date();
    
    // Format time as HH:MM:SS
    const time = now.toLocaleTimeString();
    
    // Format date in words (e.g., Monday, September 30, 2024)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
  
    clockElement.textContent = time;
    dateElement.textContent = date;
  }
  
  // Run updateClock every second
  setInterval(updateClock, 1000);
  
  // Initial call to set the clock and date
  updateClock();
  
  // Hamburger menu toggle
  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show-menu');
  }
  