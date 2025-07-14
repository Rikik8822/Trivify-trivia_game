loadPage();
 
function loadPage() {
    document.querySelectorAll(".form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const userName = form.querySelector(`[name = "username"]`).value;
            const userPas = form.querySelector(`[name = "password"]`).value;
            if (userName.length == 0) {
                alert("לא הוזן שם משתמש")
                return; //יציאה מהארוע
            }
            let allUsers = [];
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&* ])[A-Za-z\d!@#$%^&*]+$/;
            const usersFromStorage = localStorage.getItem("userList");
            if (usersFromStorage)
                allUsers = JSON.parse(usersFromStorage);
             currentUser = allUsers.find(user => user.name == userName);//היוזר הנוכחי מתוך מערך היוזרים.
            switch (form.getAttribute("id")) {
                case "registration_form":
                    //בדיקת תקינות
                    if (!passwordRegex.test(userPas)) {
                        alert("סיסמתך אינה תקינה, יש להכניס סיסמא חזקה.אות גדולה וקטנה, 4 ספרות וסימן.")
                        return;
                    }
                    if (currentUser) { //קח את מערך המשתמשים השלוף ותבדוק אם כבר קיים בתוכו משתמש באותו שם, אם כן זה לא תקין
                        alert("המתשמש כבר קיים במערכת");
                        return;
                    }
                    currentUser = {
                        name: userName,
                        password: userPas,
                        levels: [],
                    };
                    allUsers.push(currentUser);
                    localStorage.setItem("userList", JSON.stringify(allUsers));//לשמור ללוקאלסטורג את הרשימה המעודכנת
                    break;
                case "login_form":
                    if (!currentUser) {
                        alert("משתמש לא קיים במערכת");
                        return;
                    }
                    if (currentUser.password != userPas) {
                        alert("סיסמתך אינה תואמת");
                        return;

                    }

                   
            }
            ;   
           



            localStorage.setItem("currentUser", JSON.stringify(currentUser));//שמור ללוקאלסטורג את המשתמש בפועל
            //הפניה לעמוד מסע
            window.location = "journey.html";
        })
    })
}
 
