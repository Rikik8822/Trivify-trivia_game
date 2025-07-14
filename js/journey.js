const allLevels = [
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: true
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
    {
        isBonus: true
    },
    {
        isBonus: false
    },
    {
        isBonus: false
    },
];
loadPage();
function drowBtn(classes, isLink, levelIndex) {
    const classesStr = classes.join(" ");
    let btn = document.createElement("span")
    if (isLink == true) {
        btn = document.createElement('a');//יוצר קישור
        btn.href = `game.html?level=` + levelIndex;//מכניס לקישור מיקום לשלב לפי האינדקס
    }
    btn.innerText = levelIndex + 1;//בתוכו מכניס את מספר השלב
    btn.className = classesStr;// מכניס לאינדקס את הקלאס
    let btnDiv = document.createElement('div')
    btnDiv.className = "btnWrap";
    document.querySelector("#levels").append(btnDiv);//מכניס לדיב את הכפתור 
    btnDiv.append(btn);
}
function loadPage() {
    const player = JSON.parse(localStorage.getItem("currentUser")); //שולפת מהלוקאלסטורג וממירה למערך ומכניסה למשתנה
    const userCurrentLevel = player.levels.length;
    allLevels.forEach((levelObj, levelIndex) => {
        const classes = [];
        let isLink = false;
        if (levelObj.isBonus == true)
            classes.push("bonus");
        if (userCurrentLevel > levelIndex) {
            classes.push("done");
            classes.push("star" + player.levels[levelIndex] + " journeyBtn");
            isLink = true;
        }
        else if (userCurrentLevel == levelIndex) {
            classes.push("current journeyBtn");
            isLink = true;
        }
        else {
            classes.push("locked journeyBtn");
        }
        drowBtn(classes, isLink, levelIndex);
    })
}



