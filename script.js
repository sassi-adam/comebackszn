
   // DOM عناصر
const face = document.getElementById("face");
const message = document.getElementById("message");
const eyes = document.querySelectorAll(".eye");
const mouth = document.querySelector(".mouth");
const container = document.getElementById("container");

// قائمة الجمل المحسنة
const phrases = [
    "🌟 Hello! I'm Emo, your advanced home companion!",
    "🚀 Welcome to the future of smart living!",
    "💫 Let's create some magic together!",
    "🔮 Your wishes are my commands!",
    "🎯 Efficiency meets elegance in your smart home!",
    "⚡ Powered by cutting-edge AI technology!",
    "🎨 Let's paint your day with amazing experiences!",
    "🚪 Your gateway to the digital world is here!",
    "🎵 Life is better with music and technology!",
    "🌈 Transforming your space into a smart paradise!"
];

// تأثيرات الصوت
const sounds = {
    click: new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQ..."),
    hover: new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQ...")
};

// إنشاء جزيئات متقدمة
function createAdvancedParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (4 + Math.random() * 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// إنشاء شارة إيمو
function createEmoBadge() {
    const badge = document.createElement('div');
    badge.className = 'emo-badge';
    badge.textContent = '🤖 EMO PRO EDITION';
    badge.style.position = 'fixed';
    badge.style.top = '20px';
    badge.style.right = '20px';
    document.body.appendChild(badge);
}

// تأثيرات عند التحميل
window.addEventListener('load', () => {
    createAdvancedParticles();
    createEmoBadge();
    createLightBeam();
    
    // رسالة ترحيب متحركة
    setTimeout(() => {
        message.innerHTML = "✨ <strong>EMO SYSTEM READY</strong> ✨";
        message.style.animation = 'messageEntrance 1s ease-out';
    }, 1000);
});

// إنشاء حزمة ضوء
function createLightBeam() {
    const beam = document.createElement('div');
    beam.className = 'light-beam';
    container.appendChild(beam);
}

// تأثيرات متقدمة للعيون
function advancedEyeEffects() {
    eyes.forEach((eye, index) => {
        setInterval(() => {
            const x = Math.random() * 20 - 10;
            const y = Math.random() * 15 - 7.5;
            const scale = 0.9 + Math.random() * 0.2;
            
            eye.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            eye.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }, 2000 + Math.random() * 2000);
    });
}

// تأثيرات النص المتقدمة
function typeWriterEffect(text, element, speed = 50) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// تأثيرات اللمس المتقدمة
face.addEventListener("click", (e) => {
    // تأثير النقر
    createRippleEffect(e);
    
    // اختيار جملة عشوائية
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    // تأثير الكتابة
    typeWriterEffect(randomPhrase, message, 30);

    // تأثير اهتزاز متقدم
    face.style.animation = 'advancedVibrate 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    setTimeout(() => {
        face.style.animation = '';
    }, 400);

    // تحريك العيون المتقدم
    eyes.forEach(eye => {
        const x = Math.random() * 25 - 12.5;
        const y = Math.random() * 20 - 10;
        const rotate = Math.random() * 10 - 5;
        
        eye.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    });

    // TTS مع تأثيرات متقدمة
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(randomPhrase);
        utter.lang = "en-US";
        utter.rate = 0.85;
        utter.pitch = 1.1;
        utter.volume = 0.8;

        // تأثيرات صوتية متقدمة
        utter.onstart = () => {
            let open = true;
            window.mouthInterval = setInterval(() => {
                mouth.style.height = open ? "45px" : "30px";
                mouth.style.background = open ? 
                    "linear-gradient(90deg, #ff6b6b, #ffa500, #ffff00)" : 
                    "linear-gradient(90deg, #ffff00, #ffa500, #ff6b6b)";
                mouth.style.transform = open ? "scaleX(1.1)" : "scaleX(0.9)";
                open = !open;
                
                // تأثير توهج إضافي
                face.style.boxShadow = open ? 
                    "0 0 100px rgba(0, 255, 255, 0.8)" : 
                    "0 0 60px rgba(255, 0, 255, 0.6)";
            }, 100);
        };

        utter.onend = () => {
            clearInterval(window.mouthInterval);
            mouth.style.height = "30px";
            mouth.style.background = "linear-gradient(90deg, #ff6b6b, #ffa500, #ff6b6b)";
            mouth.style.transform = "scaleX(1)";
            face.style.boxShadow = "0 0 50px rgba(0, 255, 255, 0.6)";
        };

        window.speechSynthesis.speak(utter);
    }
});

// تأثير التموجات
function createRippleEffect(event) {
    const ripple = document.createElement('div');
    const rect = face.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%);
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
        z-index: 1;
    `;
    
    face.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// إضافة أنيميشنز CSS ديناميكية
const advancedStyles = `
    @keyframes advancedVibrate {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(-8px) rotate(-1deg); }
        50% { transform: translateX(8px) rotate(1deg); }
        75% { transform: translateX(-8px) rotate(-1deg); }
    }
    
    @keyframes messageEntrance {
        0% { 
            transform: translateY(30px) scale(0.8);
            opacity: 0;
        }
        100% { 
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0.1);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes particleGlow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = advancedStyles;
document.head.appendChild(styleSheet);

// تهيئة التأثيرات
advancedEyeEffects();

// تأثيرات التمرير
face.addEventListener('mouseenter', () => {
    face.style.transform = 'scale(1.05) rotate(1deg)';
    eyes.forEach(eye => {
        eye.style.transform = 'scale(1.1)';
    });
});

face.addEventListener('mouseleave', () => {
    face.style.transform = 'scale(1) rotate(0deg)';
    eyes.forEach(eye => {
        eye.style.transform = 'scale(1)';
    });
});