const imgContainer = document.querySelector('.img1');
const ackSound = document.getElementById('ackSound');
const clickNotice = document.getElementById('clickMsg');

let soundUnlocked = false;

// Function to handle browser-required user interaction
function unlockAudio() {
  if (soundUnlocked) return;

  ackSound.play().then(() => {
    // Successfully played, now pause and reset
    ackSound.pause();
    ackSound.currentTime = 0;
    soundUnlocked = true;
    if (clickNotice) clickNotice.style.display = 'none';
    console.log("Audio Unlocked Successfully");
  }).catch(err => {
    // If it fails, they need to click still
    console.log("Still waiting for user interaction to unlock audio...");
  });
}

// Any click unlocks audio for the whole session
document.addEventListener('click', unlockAudio, { once: true });

// Robust Play Logic for Hover
imgContainer.addEventListener('mouseenter', () => {
  // Attempt playback
  const playPromise = ackSound.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Success: Sound is playing
      if (clickNotice) clickNotice.style.opacity = '0';
    }).catch(error => {
      // Fail: User hasn't interacted with document yet
      console.warn('Click anywhere on the page once to enable audio hover.');
      if (clickNotice) clickNotice.style.opacity = '1';
    });
  }
});

// Robust Stop Logic for Hover
imgContainer.addEventListener('mouseleave', () => {
  // Only pause if the sound is NOT currently in a 'loading/playing' promise state
  // to avoid the "play() request was interrupted by pause()" error.

  // We can also just check if the player is actually playing
  if (!ackSound.paused) {
    ackSound.pause();
    ackSound.currentTime = 0;
  }
});
