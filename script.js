const predictions = [
    "You will embark on a thrilling adventure that will take you to new places in 2024.",
    "A long-lost friend will reconnect with you in 2024, bringing joy and nostalgia to your life.",
    "2024 will be a year of personal growth and self-discovery for you.",
    "An unexpected opportunity will come your way in 2024, opening doors to success.",
    "You'll learn an important life lesson in 2024 that will shape your future decisions.",
    "A new hobby or passion will ignite your creativity and bring fulfillment in 2024.",
    "You'll make significant progress towards achieving a cherished goal in 2024.",
    "In 2024, you'll meet someone who will become a lifelong friend and confidant.",
    "A positive change in your career path awaits you in 2024, leading to new horizons.",
    "2024 will be marked by moments of serenity and inner peace, allowing you to reflect on your journey."
];


const predictionText = document.getElementById("prediction");
const loading = document.getElementById("loading");
const generateButton = document.getElementById("generatePrediction");
const showTikTokVideoButton = document.getElementById("showTikTokVideo");
const videoContainer = document.getElementById("videoContainer");
const myVideo = document.getElementById("myVideo");


generateButton.addEventListener("click", () => {
    // Show loading animation
    loading.style.display = "block";
    // Hide previous prediction
    predictionText.style.display = "none";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        const randomPrediction = predictions[randomIndex];

        // Hide loading animation
        loading.style.display = "none";

        // Display the prediction
        predictionText.textContent = randomPrediction;
        predictionText.style.display = "block";
    }, 1500); // Simulate a delay for the prediction (1.5 seconds)
});
showTikTokVideoButton.addEventListener("click", () => {
    // Hide other elements and show the video container
    predictionText.style.display = "none";
    loading.style.display = "none";
    videoContainer.style.display = "block";

    // Play the video
    myVideo.play();
});