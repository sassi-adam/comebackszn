
   // العناصر الأساسية
const head = document.querySelector('.head');
const message = document.querySelector('.message');
const mouth = document.querySelector('.mouth');
const leftHand = document.querySelector('.hand.left');
const rightHand = document.querySelector('.hand.right');
const robot = document.querySelector('.robot');
const screen = document.querySelector('.screen');
const interactBtn = document.querySelector('.interact-btn');

// قائمة التفاعلات
const interactions = [
    {
        name: "wave",
        message: "👋 Hello! Nice to meet you!",
        action: () => waveHello()
    },
    {
        name: "dance",
        message: "💃 Let's dance together!",
        action: () => startDance()
    },
    {
        name: "jump",
        message: "🎉 Whee! This is fun!",
        action: () => makeJump()
    },
    {
        name: "handshake",
        message: "🤝 Pleasure to meet you, friend!",
        action: () => handShake()
    },
    {
        name: "talk",
        message: "🗣️ I love chatting with you!",
        action: () => startTalking()
    },
    {
        name: "joke",
        message: "😂 Why don't robots have brothers? Because they have transistors!",
        action: () => tellJoke()
    },
    {
        name: "sing",
        message: "🎵 Beep boop bop... I'm singing!",
        action: () => startSinging()
    },
    {
        name: "sleep",
        message: "😴 I'm getting sleepy... zzz",
        action: () => goToSleep()
    }
];

// الجمل الإضافية
const extraMessages = [
    "You're awesome! 🌟",
    "Let's be friends! 🤖",
    "Technology is amazing! 🔧",
    "I'm learning from you! 📚",
    "You make me happy! 😊",
    "Let's explore the world! 🌍",
    "I'm here to help! 💪",
    "You're doing great! 🎯"
];

// التفاعل عند الضغط على الرأس
head.addEventListener('click', () => {
    const randomInteraction = interactions[Math.floor(Math.random() * interactions.length)];
    showMessage(randomInteraction.message);
    randomInteraction.action();
    createSparkles();
});

// زر التفاعل الإضافي
interactBtn.addEventListener('click', () => {
    const randomExtra = extraMessages[Math.floor(Math.random() * extraMessages.length)];
    showMessage(randomExtra);
    createSparkles();
    
    // تفاعل عشوائي مع الزر
    const randomAction = Math.random();
    if (randomAction < 0.3) {
        waveHello();
    } else if (randomAction < 0.6) {
        startDance();
    } else {
        makeJump();
    }
});

// وظائف التفاعل
function waveHello() {
    robot.classList.add('wave');
    setTimeout(() => {
        robot.classList.remove('wave');
    }, 1000);
}

function startDance() {
    robot.classList.add('dance');
    setTimeout(() => {
        robot.classList.remove('dance');
    }, 2000);
}

function makeJump() {
    robot.classList.add('jump');
    setTimeout(() => {
        robot.classList.remove('jump');
    }, 500);
}

function handShake() {
    robot.classList.add('handshake');
    setTimeout(() => {
        robot.classList.remove('handshake');
    }, 800);
}

function startTalking() {
    robot.classList.add('talking');
    setTimeout(() => {
        robot.classList.remove('talking');
    }, 3000);
}

function tellJoke() {
    screen.textContent = "Haha! 😄";
    setTimeout(() => {
        screen.textContent = "EMO ROBOT";
    }, 2000);
}

function startSinging() {
    const notes = ["♪", "♫", "♬", "🎵"];
    let counter = 0;
    const singInterval = setInterval(() => {
        screen.textContent = notes[counter % notes.length];
        counter++;
    }, 200);
    
    setTimeout(() => {
        clearInterval(singInterval);
        screen.textContent = "EMO ROBOT";
    }, 2000);
}

function goToSleep() {
    screen.textContent = "Zzz... 😴";
    mouth.style.height = "5px";
    setTimeout(() => {
        screen.textContent = "EMO ROBOT";
        mouth.style.height = "20px";
    }, 3000);
}

// عرض الرسالة
function showMessage(text) {
    message.textContent = text;
    message.style.animation = 'none';
    setTimeout(() => {
        message.style.animation = 'messageEntrance 0.5s ease-out';
    }, 10);
}

// إنشاء تأثير الشرارات
function createSparkles() {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 200 + 'px';
        sparkle.style.top = Math.random() * 300 + 'px';
        sparkle.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
        sparkle.style.setProperty('--ty', (Math.random() * 100 - 50) + 'px');
        
        document.querySelector('.robot').appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// فقاعات الدردشة العشوائية
function randomChatBubble() {
    const chatTexts = [
        "Hi there!",
        "Beep boop!",
        "I'm EMO!",
        "Let's play!",
        "Awesome!",
        "Wow!",
        "Cool!",
        "Fun!",
        "Yay!",
        "Hello!"
    ];
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = chatTexts[Math.floor(Math.random() * chatTexts.length)];
    
    bubble.style.left = Math.random() * 100 + 'px';
    bubble.style.top = Math.random() * 50 + 'px';
    
    robot.appendChild(bubble);
    
    setTimeout(() => {
        bubble.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        bubble.classList.remove('show');
        setTimeout(() => bubble.remove(), 300);
    }, 2000);
}

// فقاعات دورية
setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance every 5 seconds
        randomChatBubble();
    }
}, 5000);

// تفاعل عند تحميل الصفحة
window.addEventListener('load', () => {
    setTimeout(() => {
        showMessage("🤖 Welcome! I'm EMO Robot. Click on my head or the button to interact!");
    }, 1000);
    
    // موجة ترحيب أولية
    setTimeout(() => {
        waveHello();
    }, 1500);
});

// تأثيرات إضافية للشاشة
setInterval(() => {
    const effects = ["⚡", "🔧", "🌟", "💡", "🔍", "🎮"];
    if (Math.random() < 0.1) { // 10% chance every second
        const originalText = screen.textContent;
        screen.textContent = effects[Math.floor(Math.random() * effects.length)];
        setTimeout(() => {
            screen.textContent = originalText;
        }, 500);
    }
}, 1000);