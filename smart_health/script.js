function getResponse() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let output = document.getElementById("response");

    if (input.includes("headache")) {
        output.innerHTML = "Drink water and rest. If it continues, see a doctor.";
    } 
    else if (input.includes("fever")) {
        output.innerHTML = "Take rest and monitor temperature. Visit doctor if high.";
    } 
    else if (input.includes("tired")) {
        output.innerHTML = "Get enough sleep and eat healthy food.";
    } 
    else {
        output.innerHTML = "Please enter a clear symptom.";
    }
}

function quick(symptom) {
    document.getElementById("userInput").value = symptom;
    getResponse();
}
// قائمة نصائح مكبرة ومنوعة
const healthTips = [
    "ابدئي يومك بشرب كوب ماء دافئ مع ليمون لتنقية جسمك من السموم. 🍋",
    "تجنبي استخدام الهاتف قبل النوم بـ 30 دقيقة لنوم أعمق وأكثر راحة. 📱",
    "استبدلي الملح بالتوابل والأعشاب الطبيعية لإضافة نكهة صحية لأطباقك. 🌿",
    "الجلوس الطويل مضر جداً.. قومي وتحركي لمدة دقيقتين كل ساعة عمل. 💃",
    "تناولي حفنة صغيرة من المكسرات النيئة يومياً لتعزيز صحة قلبك ودماغك. 🥜",
    "الضحك يقلل من هرمونات التوتر ويقوي المناعة، لا تنسي الابتسام دائماً! 😊",
    "اجعلي نصف طبقك دائماً من الخضروات الملونة لضمان الحصول على الفيتامينات. 🥗",
    "التنفس العميق لمدة 5 دقائق يومياً يقلل التوتر بشكل ملحوظ. 🧘‍♀️",
    "البروتين في وجبة الإفطار يساعدك على الشعور بالشبع لفترة أطول. 🥚",
    "قللي من الكافيين بعد الساعة 4 عصراً لتحسين جودة نومك ليلاً. ☕"
];

function displayRandomTip() {
    const tipElement = document.getElementById('tip-text');
    if (tipElement) {
        // إضافة تأثير أنيميشن بسيط عند التغيير
        tipElement.style.opacity = 0;
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * healthTips.length);
            tipElement.innerText = healthTips[randomIndex];
            tipElement.style.opacity = 1;
        }, 200);
    }
}

// تشغيل النصيحة عند التحميل
window.addEventListener('load', () => {
    if (document.getElementById('tip-text')) {
        displayRandomTip();
    }
});
document.querySelectorAll('.habit-item input').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll('.habit-item input:checked').length;
        document.getElementById('habit-count').innerText = checkedCount;
        
        if(checkedCount === 4) {
            alert('أنتي مذهلة! أنجزتِ كل عاداتك اليوم 🎉');
        }
    });
});