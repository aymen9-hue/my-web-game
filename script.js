let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value, 10);
    let message = document.getElementById("message");
    attempts++;

    if (guess === targetNumber) {
        message.textContent = `🎉 مبروك! لقد خمنت الرقم الصحيح في ${attempts} محاولة.`;
        message.style.color = "green";
    } else if (guess < targetNumber) {
        message.textContent = "📉 الرقم أكبر!";
        message.style.color = "blue";
    } else {
        message.textContent = "📈 الرقم أصغر!";
        message.style.color = "red";
    }
}

function restartGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "ابدأ التخمين!";
    document.getElementById("message").style.color = "#333";
}

function magicNumberTrick() {
    let message = document.getElementById("magicMessage");
    message.innerHTML = "اختر رقمًا في سرك، ثم:<br>\n" +
                        "✖️ اضرب الرقم في 2<br>\n" +
                        "➕ أضف إليه 8<br>\n" +
                        "➗ اقسم الناتج على 2<br>\n" +
                        "➖ اطرح منه الرقم الذي بدأت به<br>\n" +
                        "🎩 المفاجأة! الناتج 4 ✨";
    message.style.color = "purple";
}
