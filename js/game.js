const data = [
    {
        question: "מי אמר, אם תרצו אין זו אגדה?",
        answers: ["טרומפלדור",
            "רוטשילד",
            "הרצל",
            "בן גוריון"

        ],
        correctAnswer: 2,
        level: 1,
    },
    {
        question: "מי מהבאים לא תו מוזיקלי?",
        answers: ["דו",
            "רה",
            "מי",
            "מה",
        ],
        correctAnswer: 3,
        level: 1,
    },
    {
        question: "מהי עיר הבירה של צרפת?",
        answers: ["פריז",
            "לוקסמבורג",
            "ליון",
            "מרסי",
        ],
        correctAnswer: 0,
        level: 1,
    },
    {
        question: "מיהו כוכב הלכת הגדול ביותר במערכת השמש?",
        answers: ["נגה",
            "צדק",
            "מאדים",
            "שבתאי",
        ],
        correctAnswer: 1,
        level: 2,
    },
    {
        question: "מהו הנהר הארוך ביותר בעולם?",
        answers: ["האמזונס",
            "דנובה",
            "וולגה",
            "נילוס",
        ],
        correctAnswer: 3,
        level: 2,
    },
    {
        question: "כמה יבשות יש בעולם?",
        answers: ["5",
            "6",
            "7",
            "8",
        ],
        correctAnswer: 2,
        level: 2,
    },
    {
        question: "באיזה שנה טבעה הטיטאניק?",
        answers: ["1910",
            "1909",
            "1920",
            "1912",
        ],
        correctAnswer: 3,
        level: 3,
    },
    {
        question: "מי האדם הראשון שנחת על הירח?",
        answers: ["ניל ארמסטרונג",
            "אלן בין",
            "אדגר מיטשל",
            "מייקל קולינס",
        ],
        correctAnswer: 0,
        level: 3,
    },
    {
        question: "מהי השפה הרשמית בברזיל?",
        answers: ["אנגלית",
            "פורטוגזית",
            "ספרדית",
            "ארגנטינאית",
        ],
        correctAnswer: 1,
        level: 3,
    },
    {
        question: "איזה מדען חיבר את תורת הייחסות?",
        answers: ["ניוטון",
            "אינשטיין",
            "גלילי גלילאו",
            "וייצמן",
        ],
        correctAnswer: 1,
        level: 4,
    },
    {
        question: "מהו רכס ההרים הארוך בעולם?",
        answers: ["רוקי",
            "אלפים",
            "אנדים",
            "הימלאיה",
        ],
        correctAnswer: 2,
        level: 4,
    },
    {
        question: "מהו זן הדובים הגדולים ביותר?",
        answers: ["פנדה",
            "שחור אסיאתי",
            "קוטב",
            "גריזלי",
        ],
        correctAnswer: 2,
        level: 4,
    },
    {
        question: "מי היה הנשיא הראשון של ארצות הברית?",
        answers: ["וושינגטון",
            "האריסון",
            "אדמס",
            "לינקולן",
        ],
        correctAnswer: 3,
        level: 11,
    },
    {
        question: "באיזו שנה הסתיימה מלחמת העולם השניה?",
        answers: ["1945",
            "1946",
            "1944",
            "1940",
        ],
        correctAnswer: 0,
        level: 11,
    },
    {
        question: "מי היה ראש ממשלת ישראל הראשון?",
        answers: ["לוי אשכול",
            "משה שרת",
            "יצחק שמיר",
            "דוד בן גוריון",
        ],
        correctAnswer: 3,
        level: 11,
    },
    {
        question: "איזו מדינה שטחה הקרקעי הגדול ביותר?",
        answers: ["רוסיה",
            "ארצות הברית",
            "סין",
            "אפריקה",
        ],
        correctAnswer: 0,
        level: 6,
    },
    {
        question: "מהו המדבר הגדול ביותר בעולם?",
        answers: ["המדבר האוסטרלי",
            "מדבר סהרה",
            "מדבר רגיסטאן",
            "מדבר אטקמה",
        ],
        correctAnswer: 1,
        level: 6,
    },
    {
        question: "איזו מהיבשות הגדולה ביותר באוכלוסיה ובשטח?",
        answers: ["אירופה",
            "דרום אמריקה",
            "אפריקה",
            "אסיה",
        ],
        correctAnswer: 3,
        level: 6,
    },
    {
        question: "קשקבל הינו סוג של,",
        answers: ["גבינה",
            "פטריה",
            "בצק",
            "ממתק",
        ],
        correctAnswer: 0,
        level: 7,
    },
    {
        question: "מה משמעות המילה הארמית צלותא?",
        answers: ["תפילה",
            "צל",
            "מחלה",
            "אמונה",
        ],
        correctAnswer: 0,
        level: 7,
    },
    {
        question: "לאילו זוגות של מדינות צבעי דגלים זהים?",
        answers: ["נורבגיה וליטא",
            "ישראל ויוון",
            "הונגריה ופרו",
            "צרפת והונגריה",
        ],
        correctAnswer: 1,
        level: 7,
    },
    {
        question: "מהו אינו פיתוח ישראלי?",
        answers: ["עגבניות שרי",
            "וייז",
            "התפלת מים",
            "טטריס",
        ],
        correctAnswer: 3,
        level: 8,
    },
    {
        question: "קרדימולוגיה מהי?",
        answers: ["אוטם שריר הלב",
            "השתלת ריאה",
            "השתלת כליה",
            "הגדלת לב",
        ],
        correctAnswer: 3,
        level: 8,
    },
    {
        question: "פרודוקטיביות הינה:",
        answers: ["יעילות",
            "פטפטנות",
            "טיפשות",
            "בטלנות",
        ],
        correctAnswer: 0,
        level: 8,
    },
    {
        question: "היכן נמצאת בריכת הסולטן?",
        answers: ["תל אביב",
            "ים המלח",
            "ירושלים",
            "חיפה",
        ],
        correctAnswer: 2,
        level: 9,
    },
    {
        question: "איזה בית חולים נמצא בחדרה?",
        answers: ["הלל יפה",
            "רמבם",
            "אסף הרופא",
            "תל השומר",
        ],
        correctAnswer: 0,
        level: 9,
    },
    {
        question: "ממה מכינים חלווה?",
        answers: ["סולת",
            "שקדים",
            "סויה",
            "שומשום",
        ],
        correctAnswer: 3,
        level: 9,
    },
    {
        question: "מהו הייצוג הכימי של מים?",
        answers: ["RG",
            "NA",
            "CO2",
            "H2O",
        ],
        correctAnswer: 3,
        level: 12,
    },
    {
        question: "היכן נמצא מכון ויצמן למדע?",
        answers: ["קרית שמונה",
            "רחובות",
            "ירושלים",
            "הרצליה",
        ],
        correctAnswer: 1,
        level: 12,
    },
    {
        question: "איזו חיה יורקת?",
        answers: ["דב קואלה",
            "גירית",
            "אלפקה",
            "סוריקטה",
        ],
        correctAnswer: 2,
        level: 12,
    },
    {
        question: "מהי הנוסחה הכימית של תרכובת גז צחוק?",
        answers: ["NH3",
            "CO",
            "N2O",
            "H2O",
        ],
        correctAnswer: 2,
        level: 5,
    },
    {
        question: "לאיזו מדינה יש את קו החוף הכולל הארוך ביותר בעולם?",
        answers: ["אוסטרליה",
            "קנדה",
            "ברזיל",
            "סין",
        ],
        correctAnswer: 2,
        level: 5,
    },
    {
        question: "מהו סוג הדם הנדיר ביותר בין בני אדם?",
        answers: ["A שלילי",
            "B חיובי",
            "O חיובי",
            "AB שלילי",
        ],
        correctAnswer: 3,
        level: 5,
    },
    {
        question: "כמה אבני משחק יש בדומינו?",
        answers: ["24",
            "48",
            "36",
            "72",
        ],
        correctAnswer: 0,
        level: 10,
    },
    {
        question: "עם כמה כלים כל שחקן לשחק דמקה?",
        answers: ["14",
            "18",
            "22",
            "12",
        ],
        correctAnswer: 3,
        level: 10,
    },
    {
        question: " מי כיהן כנשיא המדינה הכי הרבה שנים נכון ל2023?",
        answers: ["ראובן ריבלין",
            "יצחק בן צבי",
            "זלמן שזר",
            "שמעון פרס",
        ],
        correctAnswer: 1,
        level: 10,
    },
];

const paramaString = location.search;
const searchParams = new URLSearchParams(paramaString);
const levelNum = searchParams.get("level");
const filterData = data.filter(item =>
    item.level == parseInt(levelNum) + 1);
let timer = 10;
let timerInterval;
let points=0;
if(levelNum==12)
    window.location="end.html";
drawQuestion();
document.querySelector("#totalQ").append("3");
document.querySelector("#numLevel").append(parseInt(levelNum) + 1);
let qNum = 1;
document.querySelector("#currentQ").append(parseInt(qNum));
function drawQuestion() { //ציור השאלה על במסך
    timer=10;
    document.querySelector("#clock").innerText = timer;
    timerInterval = setInterval(() => {
        timer--;
        document.querySelector("#clock").innerText = timer;
        if (timer == 0) {
            alert("אופס, זמנך תם.");
            clearInterval(timerInterval);
            if (filterData.length == 0) {
                finisLevel();
            }
            else drawQuestion();
        }
    }, 1000)
    document.querySelector("#answers").innerHTML = "";
    document.querySelector("#game").innerHTML = "";
    let currentQustion = filterData.pop();
    questionDiv = document.createElement('div');//יוצר דיב
    questionDiv.innerText = currentQustion.question;// מכניס אתהשאלה הנוכחית לדיב
    questionDiv.className = "currentQustion" //נותן קלאס של תשובה נוכחית
    document.querySelector("#game").append(questionDiv);//מכניס לדיב את השאלה
    currentQustion.answers.forEach((ans, ansIndex) => {
        const btnAns = currentQustion.answers; //הצבה במשתנה את התשובה במקום הנוכחי
        let btnA = document.createElement("button"); //יצירת כפתור
        btnA.innerText = ans;
        if (ansIndex == currentQustion.correctAnswer) //אם התשובה היא נכונה
            btnA.className = "rightAns";// מכניס את הקלאס
        document.querySelector("#answers").append(btnA);//מכניס לדיב את הכפתור 
        btnA.addEventListener("click", (e) => {
            clearInterval(timerInterval);
            if (btnA.className == "rightAns") {
                points += 10;
                document.querySelector("#correctSound").play(); //צליל נכון
            }
            else {
                btnA.className = "wrong";
                document.querySelector("#worngSound").play();//צליל שגיאה
            }

            btnA.className += " chosen";
            if (filterData.length == 0) {
                finisLevel();
            }
            else {
                setTimeout(function () {
                    qNum++; //העלאת מספר השאלה
                    document.querySelector("#currentQ").innerHTML = "";//ניקוי מספר שאלה קודם
                    document.querySelector("#currentQ").append(parseInt(qNum));//הכנסת מספר שאלה עדכני
                    drawQuestion();//קריאה לפונקצית ציור שאלה
                }, 2000);
            }

        });

    })
}
function finisLevel() {
    let x=points;
    let stars = x / 10;
    updateUserData();
    currentUser.levels.push(stars);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setTimeout(() => {
        window.location = "journey.html";
    }, 3500);
}






