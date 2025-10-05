
   // DOM عناصر
const face = document.getElementById("face");
const message = document.getElementById("message");
const eyes = document.querySelectorAll(".eye");
const mouth = document.querySelector(".mouth");

// قائمة الجمل العشوائية بالإنجليزية
const phrases = [
    "Hello! I'm Adam, nice to meet you 💬",
    "You can achieve anything you set your mind to!",
    "Smile, today is a beautiful day 🟧",
    "Never give up, everything is possible!",
    "Keep learning and growing every day!",
    "Believe in yourself and stay positive!",
    "Every day is a new opportunity!"
];

// عند الضغط على الوجه
face.addEventListener("click", () => {
    // اختيار جملة عشوائية
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    message.textContent = randomPhrase;

    // تحريك العيون عشوائي (يمين/يسار/اعلي/اسفل)
    eyes.forEach(eye => {
        const x = Math.random() * 10 - 5; // -5px إلى 5px
        const y = Math.random() * 6 - 3; // -3px إلى 3px
        eye.style.transform = `translate(${x}px, ${y}px)`;
    });

    // TTS بالإنجليزية مع تحريك الفم
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(randomPhrase);
        utter.lang = "en-US";

        // بدء تحريك الفم
        utter.onstart = () => {
            let open = true;
            window.mouthInterval = setInterval(() => {
                mouth.style.height = open ? "35px" : "20px";
                open = !open;
            }, 150);
        };

        // عند انتهاء الكلام
        utter.onend = () => {
            clearInterval(window.mouthInterval);
            mouth.style.height = "20px";
        };

        window.speechSynthesis.speak(utter);
    }
});