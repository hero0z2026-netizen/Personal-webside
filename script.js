
/* WELCOME MESSAGE */

window.onload = function() {
    alert("Welcome to Wielthed's Personal Website!");
    showDate();
};

/* DARK AND LIGHT MODE */

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

/* CURRENT DATE AND TIME */

function showDate() {
    let today = new Date();

    document.getElementById("date").innerHTML =
        "Today is: " + today.toDateString();
}
