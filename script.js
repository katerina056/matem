// Таймер до 3 апреля 2027
function updateCountdown() {
    const targetDate = new Date(2027, 3, 3, 10, 0, 0);
    const now = new Date();
    const diff = targetDate - now;
    
    const countdownElement = document.getElementById('countdownTimer');
    if (!countdownElement) return;
    
    if (diff <= 0) {
        countdownElement.innerHTML = '🎉 Олимпиада уже стартовала!';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    countdownElement.innerHTML = `⏳ До олимпиады: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Табы
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            tabContents.forEach(content => content.classList.remove('active-content'));
            document.getElementById(tabId).classList.add('active-content');
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Калькулятор рентабельности
const calcBtn = document.getElementById('calcProfitBtn');
if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const revenue = parseFloat(document.getElementById('revenue')?.value);
        const cost = parseFloat(document.getElementById('cost')?.value);
        const resultDiv = document.getElementById('calcResult');
        
        if (isNaN(revenue) || isNaN(cost)) {
            resultDiv.innerHTML = '⚠️ Введите корректные числа для выручки и затрат.';
            return;
        }
        
        const profit = revenue - cost;
        const profitability = cost !== 0 ? (profit / cost) * 100 : 0;
        resultDiv.innerHTML = `💰 Прибыль: ${profit.toFixed(2)} руб. | Рентабельность: ${profitability.toFixed(2)}%<br>📈 Математика в экономике — ключ к успеху!`;
    });
}

// Форма заявки
const appForm = document.getElementById('applicationForm');
if (appForm) {
    appForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname')?.value.trim();
        if (!fullname) {
            alert('Заполните ФИО обучающегося');
            return;
        }
        const msg = document.getElementById('formMessage');
        if (msg) msg.innerHTML = '✅ Заявка принята! Оргкомитет свяжется с вами.';
        appForm.reset();
        setTimeout(() => { if (msg) msg.innerHTML = ''; }, 5000);
    });
}

// Форма обратной связи
const fbForm = document.getElementById('feedbackFormSimple');
if (fbForm) {
    fbForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fbMsg = document.getElementById('feedbackMsg');
        if (fbMsg) fbMsg.innerHTML = '📨 Сообщение отправлено! Ответим в ближайшее время.';
        fbForm.reset();
        setTimeout(() => { if (fbMsg) fbMsg.innerHTML = ''; }, 5000);
    });
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('Сайт для конкурса "Я ❤ IT! Веб-разработка" — полное соответствие (2027 год)');