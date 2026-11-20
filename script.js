
const questions = [
    // معلومات عامة
    {q:"ما عاصمة مصر؟",a:["القاهرة","الإسكندرية","طنطا","أسوان"],correct:0},
    {q:"ما أكبر محيط في العالم؟",a:["الأطلسي","الهندي","الهادئ","المتجمد"],correct:2},
    {q:"كم عدد قارات العالم؟",a:["5","6","7","8"],correct:2},
    {q:"ما العملة الرسمية لليابان؟",a:["الدولار","الين","اليورو","الجنيه"],correct:1},
    {q:"ما أطول نهر في أفريقيا؟",a:["الأمازون","النيل","الكونغو","الفرات"],correct:1},
    {q:"ما عاصمة المملكة العربية السعودية؟",a:["جدة","مكة","الرياض","الدمام"],correct:2},
    {q:"ما أكبر دولة في العالم من حيث المساحة؟",a:["الصين","كندا","روسيا","أمريكا"],correct:2},
    {q:"في أي قارة تقع البرازيل؟",a:["آسيا","أفريقيا","أوروبا","أمريكا الجنوبية"],correct:3},
    {q:"ما البحر الذي يفصل بين أفريقيا وأوروبا؟",a:["الأحمر","المتوسط","العربي","الميت"],correct:1},
    {q:"ما عاصمة فرنسا؟",a:["روما","باريس","مدريد","لندن"],correct:1},

    // العلوم
    {q:"ما الكوكب المعروف بالكوكب الأحمر؟",a:["الزهرة","المريخ","زحل","عطارد"],correct:1},
    {q:"ما الغاز الذي يتنفسه الإنسان؟",a:["النيتروجين","الأكسجين","الهيدروجين","ثاني أكسيد الكربون"],correct:1},
    {q:"كم عدد عظام جسم الإنسان البالغ تقريباً؟",a:["106","206","306","406"],correct:1},
    {q:"ما العضو المسؤول عن ضخ الدم؟",a:["الرئة","الكبد","القلب","المعدة"],correct:2},
    {q:"ما أقرب كوكب إلى الشمس؟",a:["الأرض","عطارد","المريخ","المشتري"],correct:1},
    {q:"ما وحدة قياس درجة الحرارة الشائعة؟",a:["المتر","الكيلوجرام","الدرجة المئوية","اللتر"],correct:2},
    {q:"ما مصدر الطاقة الأساسي للأرض؟",a:["القمر","الشمس","الرياح","البحر"],correct:1},
    {q:"ما الجزء المسؤول عن التفكير في جسم الإنسان؟",a:["القلب","المخ","المعدة","الرئة"],correct:1},
    {q:"ما الرمز الكيميائي للماء؟",a:["CO2","O2","H2O","NaCl"],correct:2},
    {q:"ما الحيوان الذي يبيض ولا يلد؟",a:["القطة","الحصان","الدجاجة","الكلب"],correct:2},

    // التاريخ
    {q:"من بنى الأهرامات في مصر القديمة؟",a:["الرومان","المصريون القدماء","الإغريق","الفرس"],correct:1},
    {q:"في أي عام بدأت الحرب العالمية الثانية؟",a:["1914","1939","1945","1950"],correct:1},
    {q:"من أول رئيس لجمهورية مصر العربية؟",a:["أنور السادات","جمال عبد الناصر","محمد نجيب","حسني مبارك"],correct:2},
    {q:"أين توجد مدينة البتراء الأثرية؟",a:["مصر","الأردن","العراق","لبنان"],correct:1},
    {q:"من القائد الذي حرر القدس عام 1187؟",a:["طارق بن زياد","صلاح الدين الأيوبي","خالد بن الوليد","عمرو بن العاص"],correct:1},
    {q:"ما الحضارة التي اشتهرت بالكتابة المسمارية؟",a:["السومرية","الرومانية","الفرعونية","الإغريقية"],correct:0},
    {q:"في أي عام قامت ثورة 23 يوليو في مصر؟",a:["1952","1967","1973","1981"],correct:0},
    {q:"من الرحالة الذي ارتبط اسمه باكتشاف أمريكا للأوروبيين؟",a:["ابن بطوطة","كريستوفر كولومبوس","ماركو بولو","ماجلان"],correct:1},
    {q:"أين توجد مكتبة الإسكندرية؟",a:["القاهرة","الأقصر","الإسكندرية","أسوان"],correct:2},
    {q:"ما اسم المعركة التي انتصر فيها المسلمون بقيادة خالد بن الوليد على الروم؟",a:["اليرموك","حطين","القادسية","بدر"],correct:0},

    // الرياضة
    {q:"كم عدد لاعبي فريق كرة القدم داخل الملعب؟",a:["9","10","11","12"],correct:2},
    {q:"كم مدة مباراة كرة القدم الأصلية؟",a:["60 دقيقة","70 دقيقة","90 دقيقة","120 دقيقة"],correct:2},
    {q:"ما الدولة التي فازت بكأس العالم 2022؟",a:["فرنسا","الأرجنتين","البرازيل","ألمانيا"],correct:1},
    {q:"كم عدد الحلقات في شعار الألعاب الأولمبية؟",a:["4","5","6","7"],correct:1},
    {q:"ما الرياضة التي يستخدم فيها المضرب والريشة؟",a:["التنس","الاسكواش","الريشة الطائرة","كرة اليد"],correct:2},
    {q:"كم عدد لاعبي فريق كرة السلة داخل الملعب؟",a:["4","5","6","7"],correct:1},
    {q:"ما لون البطاقة التي تعني الطرد في كرة القدم؟",a:["الصفراء","الحمراء","الخضراء","الزرقاء"],correct:1},
    {q:"في أي دولة أقيمت أول دورة ألعاب أولمبية حديثة؟",a:["فرنسا","اليونان","إيطاليا","مصر"],correct:1},
    {q:"كم عدد أشواط مباراة كرة الطائرة؟",a:["شوطان","3 أو 5 أشواط","6 أشواط","7 أشواط"],correct:1},
    {q:"ما الرياضة التي يشتهر بها محمد صلاح؟",a:["التنس","كرة القدم","السباحة","الملاكمة"],correct:1},

    // ذكاء وحساب
    {q:"ما ناتج 12 × 8؟",a:["86","96","106","108"],correct:1},
    {q:"ما العدد التالي: 2، 4، 8، 16، ؟",a:["20","24","32","36"],correct:2},
    {q:"إذا كان معك 100 جنيه واشتريت شيئاً بـ35 جنيهاً، فكم يتبقى؟",a:["55","65","75","85"],correct:1},
    {q:"كم ضلعاً للمثلث؟",a:["2","3","4","5"],correct:1},
    {q:"ما نصف العدد 250؟",a:["100","115","125","150"],correct:2},
    {q:"إذا كانت الساعة 3، فكم تصبح بعد 5 ساعات؟",a:["7","8","9","10"],correct:1},
    {q:"ما العدد الذي إذا ضربته في نفسه كان الناتج 81؟",a:["7","8","9","10"],correct:2},
    {q:"أي شهر يأتي بعد شهر مارس؟",a:["فبراير","أبريل","مايو","يونيو"],correct:1},
    {q:"ما العدد الزوجي من بين هذه الأعداد؟",a:["13","17","21","24"],correct:3},
    {q:"إذا كان اليوم الاثنين، فما اليوم بعد 10 أيام؟",a:["الأربعاء","الخميس","الجمعة","السبت"],correct:1}
];

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
let answered = false;

const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const numberElement = document.getElementById("number");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

// خلط الأسئلة عشوائياً
function shuffleQuestions(array) {
    let shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// بدء لعبة جديدة
function startGame() {
    currentQuestion = 0;
    score = 0;

    // اختيار وترتيب الأسئلة الخمسين عشوائياً
    gameQuestions = shuffleQuestions(questions);

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");

    scoreElement.textContent = score;

    showQuestion();
}

// عرض السؤال
function showQuestion() {
    clearInterval(timerInterval);

    answered = false;
    timeLeft = 15;

    timerElement.textContent = timeLeft;
    numberElement.textContent = currentQuestion + 1;

    feedbackElement.textContent = "";
    nextBtn.classList.add("hidden");

    let q = gameQuestions[currentQuestion];

    questionElement.textContent = q.q;
    answersElement.innerHTML = "";

    q.a.forEach((answer, index) => {
        let button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer";

        button.onclick = () => checkAnswer(index, button);

        answersElement.appendChild(button);
    });

    document.getElementById("progressBar").style.width =
        (currentQuestion / 50 * 100) + "%";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, null);
        }
    }, 1000);
}

// التحقق من الإجابة
function checkAnswer(index, clickedButton) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const correctAnswer = gameQuestions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (index === correctAnswer) {
        score += 10;
        scoreElement.textContent = score;

        feedbackElement.textContent = "🎉 إجابة صحيحة! أحسنت!";
        feedbackElement.style.color = "#5cff91";

    } else if (index === -1) {
        feedbackElement.textContent = "⏰ انتهى الوقت!";
        feedbackElement.style.color = "#ffcc66";

    } else {
        clickedButton.classList.add("wrong");

        feedbackElement.textContent = "❌ إجابة غير صحيحة!";
        feedbackElement.style.color = "#ff6678";
    }

    nextBtn.classList.remove("hidden");

    if (currentQuestion === 49) {
        nextBtn.textContent = "عرض النتيجة 🏆";
    } else {
        nextBtn.textContent = "السؤال التالي ⬅";
    }
}

// الانتقال للسؤال التالي
function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < 50) {
        showQuestion();
    } else {
        endGame();
    }
}

// عرض النتيجة النهائية
function endGame() {
    clearInterval(timerInterval);

    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("finalScore").textContent =
        score + " / 500";

    let message = "";

    if (score === 500) {
        message = "👑 أسطورة العباقرة! إجاباتك كلها صحيحة!";
    } else if (score >= 400) {
        message = "🔥 ممتاز جداً! أنت عبقري!";
    } else if (score >= 300) {
        message = "👏 أداء رائع!";
    } else if (score >= 200) {
        message = "💪 مستواك جيد، استمر!";
    } else {
        message = "📚 حاول مرة أخرى وزود معلوماتك!";
    }

    document.getElementById("resultMessage").textContent = message;
}
