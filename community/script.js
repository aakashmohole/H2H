 // Function to toggle the speed dial menu visibility
 function toggleSpeedDialMenu() {
    // Get the speed dial menu by its ID
    const menu = document.getElementById('speed-dial-menu-default');
    
    // Toggle the 'hidden' class on the menu (this hides or shows it)
    menu.classList.toggle('hidden');
    
    // Optionally update aria-expanded based on the menu visibility
    const button = document.querySelector('[aria-controls="speed-dial-menu-default"]');
    const isExpanded = !menu.classList.contains('hidden');
    button.setAttribute('aria-expanded', isExpanded.toString());
}

// Add event listener to the button that controls the menu
document.querySelector('[data-dial-toggle="speed-dial-menu-default"]').addEventListener('click', toggleSpeedDialMenu);


// Search function for Q&A
function searchQuestions() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let items = document.querySelectorAll('.qna-item');
  
    items.forEach(function(item) {
      let questionText = item.querySelector('.text-lg').innerText.toLowerCase();
      if (questionText.indexOf(input) !== -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Toggle answer visibility on question click
  document.querySelectorAll('.qna-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('open');
    });
  });
  
  // Handle form submission (This can be linked to a server for storing questions)
  document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const question = document.getElementById('question').value;
    if (question) {
      // Here, you can make an AJAX call to send the question to the server (if needed)
      alert('Your question has been submitted!');
  
      // Optionally, clear the form
      document.getElementById('question').value = '';
    }
  });
  