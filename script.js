// Function to randomly select a video
function getRandomVideo() {
    // Get a random number between 1 and 6
    const videoNumber = Math.floor(Math.random() * 6) + 1;
    return `Public/videos/hero-video-${videoNumber}.mp4`;
}

// Set the video source when the page loads
window.onload = function() {
    const videoElement = document.getElementById('hero-video');
    videoElement.src = getRandomVideo();
    videoElement.load();  // Load the new video
};
