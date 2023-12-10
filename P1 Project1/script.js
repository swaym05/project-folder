const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
        
// to add new note on click
addBtn.addEventListener("click",function () {
    addNote();
});


// function add note
function addNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = 
    `
    <div class="tool">
        <i class="fa-solid fa-floppy-disk save"></i>
        <i class="fa-solid fa-delete-left trash"></i>
    </div>
    <textarea placeholder="Enter your note">${text}</textarea>
    `;

    // to delete on delete
    note.querySelector(".trash").addEventListener("click",function(){
        note.remove();
        saveNotes();
    });

    //to save in local storage
    note.querySelector(".save").addEventListener("click",function () {
        saveNotes();
    });

    //auto save
    note.querySelector("textarea").addEventListener("focusout",function () {
        saveNotes();
    });

    //to display create note on html
    main.appendChild(note);
    saveNotes();
}


// function to save in local
function saveNotes() {
    const notes =document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => data.push(note.value)
    );
    console.log(data);

    //data to storage
    localStorage.setItem("notes",JSON.stringify(data));
}

// self calling function
(
    function() {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        console.log(lsnotes);
        lsnotes.forEach(
            (lsnote) => {
                addNote(lsnote);
            }
        )

        if(lsnotes.length === 0){
            localStorage.removeItem("notes");
            addNote();
        }else{
            localStorage.setItem("notes",JSON.stringify(data));
        }
    }
)()