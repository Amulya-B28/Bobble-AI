// Show the pop-up automatically when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
  };

  // Close the pop-up when the user clicks the close button
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
