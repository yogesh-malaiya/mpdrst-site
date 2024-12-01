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


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentIndex = 0;

// Update Slider Position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Previous Slide
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

// Next Slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

// Initialize Slider
updateSlider();

// JavaScript for Products and Services Contact Buttons

// WhatsApp Integration
const whatsappNumber = '918469536105';
const whatsappBaseURL = `https://wa.me/${whatsappNumber}?text=`;

// Handle Contact Us Button Click
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productDiv = event.target.closest('.product');
        const productName = productDiv.querySelector('h3').innerText;
        const message = `I am interested in ${productName}. Please provide me with the pricing details.`;
        const whatsappURL = `${whatsappBaseURL}${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});

// Handle View All Products Button Click
document.querySelector('#viewAllProducts').addEventListener('click', () => {
    window.location.href = 'src/services.html'; // Redirect to the services page
});