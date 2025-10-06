// العناصر
const head = document.getElementById('head');
const message = document.getElementById('message');
const mouth = document.getElementById('mouth');
const leftHand = document.getElementById('leftHand');
const rightHand = document.getElementById('rightHand');
const robot = document.getElementById('robot');
const screen = document.getElementById('screen');
const interactBtn = document.getElementById('interactBtn');

// إنشاء شارة Adamzz
function createAdamzzBadge() {
    const badge = document.createElement('div');
    badge.className = 'adamzz-badge';
    badge.textContent = 'ADAMZZ 🤖';
    document.querySelector('.container').appendChild(badge);
}

// تفعيل النقر على الرأس
head.addEventListener('click', function() {
    const actions = [
        { type: 'wave', message: "👋 Hello! I'm Adamzz! Nice to meet you!" },
        { type: 'dance', message: "💃 Yeah! Let's dance together Adamzz style!" },
        { type: 'jump', message: "🎉 Whee! Adamzz is jumping with joy!" },
        { type: 'handshake', message: "🤝 Pleasure to meet you, friend! - Adamzz" },
        { type: 'talk', message: "🗣️ Adamzz loves intelligent conversations!" },
        { type: 'spin', message: "🌀 Adamzz is spinning! So much fun!" }
    ];
    
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    performAction(randomAction.type);
    showMessage(randomAction.message);
    createSparkles();
});

// تفعيل زر التفاعل
interactBtn.addEventListener('click', function() {
    const messages = [
        "🌟 Adamzz thinks you're awesome!",
        "🚀 Adamzz is ready for adventure!",
        "🎯 Excellent choice! - Adamzz",
        "💫 Adamzz appreciates your creativity!",
        "🔥 Adamzz feels your positive energy!",
        "🌈 Adamzz loves making you smile!",
        "⚡ Adamzz is charged up and ready!",
        "🎨 Adamzz admires your style!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showMessage(randomMessage);
    
    // تفاعل عشوائي مع الزر
    const actions = ['wave', 'dance', 'jump', 'handshake', 'spin'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    performAction(randomAction);
    
    createSparkles();
});

// وظائف الأداء
function performAction(actionType) {
    // إزالة جميع الكلاسات أولاً
    robot.classList.remove('waving', 'shaking', 'dancing', 'jumping', 'talking', 'spinning');
    
    switch(actionType) {
        case 'wave':
            robot.classList.add('waving');
            setTimeout(() => robot.classList.remove('waving'), 800);
            break;
        case 'handshake':
            robot.classList.add('shaking');
            setTimeout(() => robot.classList.remove('shaking'), 800);
            break;
        case 'dance':
            robot.classList.add('dancing');
            setTimeout(() => robot.classList.remove('dancing'), 2000);
            break;
        case 'jump':
            robot.classList.add('jumping');
            setTimeout(() => robot.classList.remove('jumping'), 600);
            break;
        case 'talk':
            robot.classList.add('talking');
            setTimeout(() => robot.classList.remove('talking'), 3000);
            break;
        case 'spin':
            head.style.animation = 'spin 1s ease-in-out';
            setTimeout(() => head.style.animation = '', 1000);
            break;
    }
}

function showMessage(text) {
    message.textContent = text;
    message.classList.remove('message-pop');
    void message.offsetWidth;
    message.classList.add('message-pop');
}

function createSparkles() {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 180 + 'px';
        sparkle.style.top = Math.random() * 250 + 'px';
        
        robot.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// تفاعل الشاشة
screen.addEventListener('click', function() {
    const texts = ["ADAMZZ!", "ACTIVE!", "READY!", "BEEP!", "BOOP!", "HELLO!"];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    const originalText = screen.textContent;
    
    screen.textContent = randomText;
    screen.style.background = 'linear-gradient(145deg, #e74c3c, #c0392b)';
    screen.style.borderColor = '#ff9ff3';
    
    setTimeout(() => {
        screen.textContent = originalText;
        screen.style.background = 'linear-gradient(145deg, #1a1a2e, #16213e)';
        screen.style.borderColor = '#00ff9d';
    }, 1200);
});

// إضافة أنيميشن الدوران
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: scale(1.08) rotate(0deg); }
        100% { transform: scale(1.08) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// تفعيل عند التحميل
window.addEventListener('load', function() {
    createAdamzzBadge();
    showMessage("🤖 Welcome! I'm Adamzz! Click my head or the button!");
    
    // موجة ترحيب أولية
    setTimeout(() => {
        performAction('wave');
        showMessage("👋 Hi there! Adamzz is here to have fun with you!");
    }, 1500);
});

// تأثيرات عشوائية دورية
setInterval(() => {
    if (Math.random() < 0.15) { // 15% فرصة كل 8 ثواني
        const effects = ['wave', 'dance', 'talk', 'spin'];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        performAction(randomEffect);
        
        const randomMessages = [
            "Adamzz is feeling playful!",
            "Having fun with you!",
            "Adamzz enjoys your company!",
            "What a great day!"
        ];
        showMessage(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
    }
}, 8000);