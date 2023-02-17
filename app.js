class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }

}

class App {
    constructor() {
        this.notes = [];
        this.$activeForm = document.querySelector(".active-form"); // whenever you're accessing HTML elements you use the $ sign as the variable name
        this.$inactiveForm = document.querySelector(".inactive-form");
        this.$noteTitle = document.querySelector("#note-title");
        this.$noteText = document.querySelector("#note-text");
        this.$form = document.querySelector("#form");

        this.addEventListeners();
    }

    addEventListeners() {
        document.body.addEventListener("click", (event) => {
            this.handleFormClick(event);
        })

        this.$form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.$noteTitle.value;
            const text = this.$noteText.value;
            this.addNote({title, text});
            this.closeActiveForm();

        })
    }

    handleFormClick(event) {
        const isActiveFormClickedOn = this.$activeForm.contains(event.target);
        const isinActiveFormClickedOn = this.$inactiveForm.contains(event.target);
        const title = this.$noteTitle.value;
        const text = this.$noteText.value;

        if(isinActiveFormClickedOn) {
            this.openActiveForm();
        } else if(!isinActiveFormClickedOn && isActiveFormClickedOn) {
            this.addNote({title, text});
            this.closeActiveForm();
        }
    }

    openActiveForm() {
        this.$inactiveForm.style.display = "none";
        this.$activeForm.style.display = "block";
        this.$noteText.focus();
    }

    closeActiveForm() {
        this.$inactiveForm.style.display = "none";
        this.$activeForm.style.display = "block";
        this.$noteTitle.value = "";
        this.$noteText.value = "";

    }

    openModal(event) {
        const $selectedNote = event.target.closest(".note");
        if($selectedNote && !event.target.closest(".archive")) {
            this.$selectedNoteId = $selectedNote.id;
            this.$modalTitle = $selectedNote.children[1].innerHTML;
            this.modalText = $selectedNote.children[2].innerHTML;
            this.$modal.classList.add("open-modal");
        } else{
            return;
        }
    }

    closeModal(event) {
        const isModalFormClickedOn = this.$modalForm.contains(event.target);
        const isCloseModalBtnClickedOn = this.$closeModalForm.contains(event.target);
        if((!isModalFormClickedOn || isCloseModalBtnClickedOn) && this.$modal.classList.contains("open-modal")) {
            this.editNote(this.$selectedNoteId, {title: this.$modalTitle.value, text: this.$modalText.value});
            this.$modal.classList.remove("open-modal");
        }
    }

    handleArchiving(event) {
        const $selectedNote = event.target.closest(".note");
        if($selectedNote && event.target.closest(".archive")) {
            this.selectedNoteId = $selectedNote.id; 
            this.deleteNote(this.selectedNoteId);
        } else{
            return;
        }
    }

    addNote(id, {title, text}) {
        if(text != "") {
            const newNote = new Note(id, title, text);
            this.notes = [...this.notes, newNote];
            this.displayNotes();
        }
        
    }

    editNote(id, title, text) {
        this.notes = this.notes.map((note) => {
            if(note.id == id) {
                note.title = title;
                note.text = text;
            }
            return note;
        })
    }

    deleteNote(id) {
        this.notes = this.notes.filter((note) => note.id != id);
        this.displayNotes();
    }

    displayNotes() {
        this.notes.map( (note) => {
              console.log(`
                ID: ${note.id}
                Title: ${note.title}
                Text: ${note.text}
            `)
        }
          
        )
    }
}

const app = new App();