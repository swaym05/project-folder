let task = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask() {

    if (task.value === ``) {
        alert("you must write something");
    }
    else {
        let li = document.createElement("li");
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let p = document.createElement("p");
        p.innerHTML = task.value;
        li.appendChild(p);
        // let alarm = document.createElement("button");
        // alarm.classList.add("alarmBtn");
        // alarm.innerHTML = "<i class='bx bx-alarm'></i>";
        // li.appendChild(alarm);
    }
    task.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // else if (e.target.tagName === "BUTTON") {
    //     setTimeout(function() {
    //                 alert('Alarm!');
    //             }, 5000);
    // }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showData();