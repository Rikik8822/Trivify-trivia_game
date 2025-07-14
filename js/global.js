let user = localStorage.getItem("currentUser");//שליפת הרשימה
let currentUser = JSON.parse(user);
function updateUserData() {
     /*
1. שמור את היוזר הנוכחי
2. שלוף את מערך היוזרים
3. בתוך מערך היוזרים חפש בבקשה את היוזר הנוכחי, ותחליף אותו עם האובייקט של היוזר הנוכחי
4. שמור חזרה את מערך היוזרים המעודכן
     */
    // 1
localStorage.setItem("currentUser", JSON.stringify(currentUser));//שמור ללוקאלסטורג את המשתמש בפועל
// 2
    const usersFromStorage = localStorage.getItem("userList");
    let allUsers = JSON.parse(usersFromStorage);

    // 3
    const indexUser=allUsers.findIndex(user=>user.name==currentUser.name);
    allUsers[indexUser] = currentUser;
    //4
    localStorage.setItem("userList",JSON.stringify(allUsers));
    

}


