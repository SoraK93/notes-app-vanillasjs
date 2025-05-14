import { renderNotes } from "./app.js";

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");

/** Loads up data from localStorage else create a empty array */
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

/** Add new notes */
addNoteButton.addEventListener("click", () => {
  if (note.value.trim().length > 0 || title.value.trim().length > 0) {
    arrayOfNotes = [
      ...arrayOfNotes,
      {
        id: Date.now(),
        title: title.value.trim(),
        note: note.value.trim(),
        isPinned: false,
        isArchived: false,
      },
    ];
    showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
    localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
  }
});

/** Renders all the notes saved inside localStorage */
showOtherNotes.innerHTML = renderNotes(arrayOfNotes);