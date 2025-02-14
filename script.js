document.addEventListener("DOMContentLoaded", function () {  // Ensures the script runs after the page loads
    let noMessages = [
        "Are you sure? 😢",
        "Please reconsider! 🥺",
        "Don't break my heart 💔",
        "But we could be so cute together! 🐧💕",
        "Just say yes already! 😭",
        "Come on, don't be like that... 😔"
    ];
    let noClickCount = 0;


    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");
    let noText = document.getElementById("no-text");


    yesBtn.addEventListener("click", function () {
        document.body.innerHTML = "<h1>Yay! We’re penguins together now! 🐧💖</h1>" +
                                  "<img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2NkYzQwZ2NkNXI5YWZranRtdndkYjdxZmI0NDRtMW8zZ2JjZGM5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/exG6Xkikf3GEp5lsc5/giphy.gif' alt='Happy Penguins' width='600px'>";
    });


    noBtn.addEventListener("click", function () {
        let currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);


        if (noClickCount < noMessages.length) {
            noText.innerHTML = noMessages[noClickCount];
            noClickCount++;
        } else {
            noText.innerHTML = "Please say yes 😭" +
            "<img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXc0MXNweGYwM3NxenQ0ODYzMjR5aHllZm0zMGhhN3EwODJrem9lZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lk6AqFz5KRWPQaAxbk/giphy.gif' alt='Sad Penguin' width='250px";
        }


        if (currentSize > 5) {
            noBtn.style.fontSize = (currentSize - 2) + "px";
            noBtn.style.padding = "5px " + (currentSize - 2) + "px";
        }


        yesBtn.style.fontSize = (yesSize + 2) + "px";
        yesBtn.style.padding = "10px " + (yesSize + 2) + "px";
    });
});


