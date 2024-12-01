// List of video URLs and titles
const videos = [
    { url: "https://www.youtube.com/live/tS3OU5L-1gw?feature=shared", title: "Video 1: Introduction to Spirituality" },
    { url: "https://www.youtube.com/live/K_3hUddYASQ?feature=shared", title: "Video 2: Understanding Dharma" },
    { url: "https://www.youtube.com/live/7fkC9xCYy6s?feature=shared", title: "Video 3: Path to Enlightenment" },
    { url: "https://www.youtube.com/live/8SoO7efUav4?feature=shared", title: "Video 4: Secrets of the Vedas" },
    { url: "https://www.youtube.com/live/tSsY9P9Il1s?feature=shared", title: "Video 5: Ancient Teachings" },
];

const videoSlider = document.getElementById("videoSlider");

// Add videos to the slider
function displayVideos() {
    videos.forEach((video) => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <img src="https://img.youtube.com/vi/${extractVideoId(video.url)}/hqdefault.jpg" alt="${video.title}">
            <h3>${video.title}</h3>
            <a href="${video.url}" target="_blank">Watch Now</a>
        `;
        videoSlider.appendChild(videoCard);
    });
}

// Extract video ID from YouTube URL
function extractVideoId(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:live|watch)\?.*v=([^&]+)/);
    return match ? match[1] : null;
}

// Initialize slider
displayVideos();
