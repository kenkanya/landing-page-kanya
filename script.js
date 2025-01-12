// Toggle surprise message
document.getElementById('surpriseButton').addEventListener('click', () => {
    const surpriseDiv = document.querySelector('.surprise');
    surpriseDiv.classList.toggle('hidden');
  });
  
  // Create floating love hearts
  const loveContainer = document.getElementById('love-container');
  
  function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.textContent = '❤️';
  
    // Random position and size
    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = Math.random() * 2 + 3 + 's';
    love.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
  
    loveContainer.appendChild(love);
  
    // Remove after animation
    setTimeout(() => {
      love.remove();
    }, 4000);
  }
  
  // Generate loves every 300ms
  setInterval(createLove, 300);
  
  // Display today's date
  const todayDateElement = document.getElementById('todayDate');
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  todayDateElement.textContent = `Today is ${today.toLocaleDateString('en-US', options)}.`;
  
  // Start background music automatically
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.play().catch((error) => {
    console.log("Audio play failed: ", error);
  });
  
  document.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(err => console.error('Error playing audio:', err));
    }
  });
