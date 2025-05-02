document.getElementById('showVideo').addEventListener('click', function() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `
        <video controls autoplay>
            <source src="../media/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
    `;
});