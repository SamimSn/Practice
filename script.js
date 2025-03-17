function startGame()
{
    // Hide the starting text and button
    document.getElementById("startText").style.display = "none";
    document.getElementById("startButton").style.display = "none";

    // Shrink the game container to 0 width and height
    const gameContainer = document.querySelector(".game-container");
    gameContainer.style.width = "0";
    gameContainer.style.height = "0";
    gameContainer.style.padding = "0";

    // Show the question and buttons after some time (let the transition finish)
    setTimeout(() =>
    {
        document.querySelector(".question-container").style.display = "block";
    }, 100); // Matches the transition duration
}

function handleYes()
{
    document.getElementById("popup").style.display = "block"; // Show the popup
}

function handleNo()
{
    const noButton = document.getElementById("noButton");

    const maxX = 75;
    const maxY = 75;

    // Ensure the button stays within the screen bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move the button to the new position
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.style.transition = "transform 0.5s ease"; // Smooth transition
}

function closePopup()
{
    document.getElementById("popup").style.display = "none"; // Hide the popup
}
