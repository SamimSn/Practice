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

let noButtonTexts = [
    "همچنان نه 😤",
    "هنوز به راه راست هدایت نشدم 😅",
    "نمیخواممممم 😩",
    "دیوونم مگه 🤪",
    "نه بابا چیکار داری 😜",
    "این گزینه اصلا معتبر نیست 🧐",
    "فقط دارم تست میکنم رد میشم 🧪",
    "نه با تشکر پشیمون نمیشم 🙅♂️",
    "حتی فکرشم نکن 🚫",
    "مثل کوه استوارم ⛰️",
    "نهههه قول دادم نه بگم 🤞",
    "دارم ورزش نه گفتن میکنم 🏋️♂️",
    "مگه گزینه «آره» وجود داره؟ 🤔",
    "تا ابد نه میگم ⏳",
    "پافشاری من رو ببین 📢",
    "مثل آفتاب پرست رنگ عوض میکنم 🌈",
    "نه، ممنون، نه، مرسی 🙏",
    "دارم رکورد نه گفتن رو میزنم 🏆",
    "حتی اگه دنیا رو بهم بدی 🌎",
    "نه حال ندارم امروز بیخیال 🤷♂️"
];
let noButtonTextIndex = 0; // Start with the first text

let lastClickTime = 0; // Track the last click time for debounce
let hasSwapped = false; // Track if the swap has already happened

let randomXBefore = null
let randomYBefore = null

function handleNo()
{
    const currentTime = Date.now();
    const timeDiff = currentTime - lastClickTime;

    // Check if the time between clicks is less than 200ms
    if (timeDiff < 200 && !hasSwapped)
    {
        // Switch the positions of Yes and No buttons
        const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');
        const parent = yesButton.parentNode;

        // Swap the buttons in the DOM
        parent.insertBefore(noButton, yesButton);

        // Add the "ههه پول خوردی" message to the popup
        const popup = document.getElementById('popup');
        const message = document.createElement('p');
        message.textContent = 'ههه گول خوردی';
        popup.insertBefore(message, popup.firstChild);

        // Mark that the swap has happened
        hasSwapped = true;

        yesButton.style.transform = `translate(${randomXBefore}px, ${randomYBefore}px)`;
        yesButton.style.transition = "transform 0.4s ease";

        // Reset the last click time to prevent consecutive swaps
        lastClickTime = currentTime - 300; // Ensures next click is considered new
        return; // Exit to skip normal behavior
    }

    // Proceed with normal behavior (change text and move button)
    const noButton = document.getElementById('noButton');
    noButton.textContent = noButtonTexts[noButtonTextIndex];
    noButtonTextIndex = (noButtonTextIndex + 1) % noButtonTexts.length;

    // Desired extremes
    const maxX = 50;
    const bigX = 40; // threshold after which we consider it "big"
    const maxY = 200;
    const bigY = 190; // threshold after which we consider it "big"

    let randomX, randomY;

    // --- X coordinate ---
    if (Math.random() < 1 / 3)
    {
        // 1 in 3 chance: pick a large X in [±40..±50]
        const directionX = Math.random() < 0.5 ? -1 : 1;
        // random from 40–50
        randomX = (bigX + Math.random() * (maxX - bigX)) * directionX;
    } else
    {
        // 2 in 3 chance: pick 0
        randomX = 0;
    }

    // --- Y coordinate ---
    if (Math.random() < 1 / 3)
    {
        // 1 in 3 chance: pick a large Y in [±190..±200]
        const directionY = Math.random() < 0.5 ? -1 : 1;
        // random from 190–200
        randomY = (bigY + Math.random() * (maxY - bigY)) * directionY;
    } else
    {
        // 2 in 3 chance: pick 0
        randomY = 0;
    }    


    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.style.transition = "transform 0.4s ease";

    // Update the last click time
    lastClickTime = currentTime;
}



function closePopup()
{
    location.reload();
}
