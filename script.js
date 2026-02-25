function updateTime() {
  const timeElement = document.getElementById('current-time');
  const dateElement = document.getElementById('current-date');
  
  const now = new Date();
  
  // Format time
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false 
  };
  timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
  
  // Format date
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize on load
document.addEventListener('DOMContentLoaded', updateTime);
