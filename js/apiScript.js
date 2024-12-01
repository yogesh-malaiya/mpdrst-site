// List of video URLs and titles
const videos = [
    { url: "https://www.youtube.com/live/tS3OU5L-1gw?feature=shared", title: "Video 1: Live Q&A Session" },
    { url: "https://www.youtube.com/live/K_3hUddYASQ?feature=shared", title: "Video 2: Live Q&A Session" },
    { url: "https://www.youtube.com/live/7fkC9xCYy6s?feature=shared", title: "Video 3: Live Q&A Session" },
    { url: "https://www.youtube.com/live/8SoO7efUav4?feature=shared", title: "Video 4: Live Q&A Session" },
    { url: "https://www.youtube.com/live/tSsY9P9Il1s?feature=shared", title: "Video 5: Live Q&A Session" },
];

const videoSlider = document.getElementById("videoSlider");

// Add videos to the slider
function displayVideos() {
    videos.forEach((video) => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        // Extract Video ID and construct thumbnail URL
        const videoId = extractVideoId(video.url);
        const thumbnailUrl = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "https://via.placeholder.com/320x180.png?text=Thumbnail+Unavailable";

        videoCard.innerHTML = `
            <img src="${thumbnailUrl}" alt="${video.title}">
            <h3>${video.title}</h3>
            <a href="${video.url}" target="_blank">Watch Now</a>
        `;
        videoSlider.appendChild(videoCard);

        // Add click event listener to pause sliding animation on click
        videoCard.addEventListener("click", () => {
            const slider = document.getElementById("videoSlider");
            slider.style.animationPlayState = "paused";
        });
    });
}

// Extract video ID from YouTube URL
function extractVideoId(url) {
    const liveMatch = url.match(/youtube\.com\/live\/([^?]+)/);
    const watchMatch = url.match(/v=([^&]+)/);
    return liveMatch ? liveMatch[1] : watchMatch ? watchMatch[1] : null;
}

// Initialize slider
displayVideos();