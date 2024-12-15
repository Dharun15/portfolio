const video = document.getElementById('video');
    const playPauseButton = document.getElementById('play-pause');
    const track = document.getElementById('track');
    const expandButton = document.getElementById('expand');
    const minimizeButton = document.getElementById('minimize');
    const controls = document.getElementById('controls');

    // Set initial play/pause button state
    playPauseButton.src = video.paused ? 'https://img.icons8.com/ios-filled/50/ffffff/play--v1.png' : 'https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png';

    // Toggle play/pause
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.src = 'https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png';
        } else {
            video.pause();
            playPauseButton.src = 'https://img.icons8.com/ios-filled/50/ffffff/play--v1.png';
        }
    });

    // Update track input as video plays
    video.addEventListener('timeupdate', () => {
        const value = (video.currentTime / video.duration) * 100;
        track.value = value;
    });

    // Seek video when track input changes
    track.addEventListener('input', () => {
        const value = (track.value / 100) * video.duration;
        video.currentTime = value;
    });

    // Expand video to full screen
    expandButton.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    });

    // Minimize video from full screen
    minimizeButton.addEventListener('click', () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    });

    // Update controls visibility based on fullscreen state
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            controls.style.position = 'fixed';
            controls.style.bottom = '10px';
            controls.style.left = '0';
            controls.style.width = '100%';
            controls.style.zIndex = '1000';
            controls.style.background = 'rgba(0, 0, 0, 0.5)';
            controls.style.padding = '10px';
            expandButton.style.display = 'none';
            minimizeButton.style.display = 'block';
        } else {
            controls.style.position = 'static';
            controls.style.background = 'none';
            controls.style.padding = '0';
            expandButton.style.display = 'block';
            minimizeButton.style.display = 'none';
        }
    });