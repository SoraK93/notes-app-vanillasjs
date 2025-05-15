import { renderNotes } from "./app.js";

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");
let pinnedNoteTitle = document.querySelector(".pin-title");
let otherNoteTitle = document.querySelector(".other-title");

/** Loads up data from localStorage else create a empty array */
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

/** Functionality for rendering all the notes archived, pinned or anything else. Takes in a array of notes. */
function renderPinnedArchiveNotes(notesArray) {
  showPinnedNotes.innerHTML = renderNotes(
    notesArray.filter(({ isPinned, isArchived }) => isPinned && !isArchived)
  );
  showOtherNotes.innerHTML = renderNotes(
    notesArray.filter(({ isPinned, isArchived }) => !isPinned && !isArchived)
  );
}

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
    note.value = title.value = "";
    renderPinnedArchiveNotes(arrayOfNotes);
  }
});

notesDisplay.addEventListener("click", (event) => {
  let type = event.target.dataset.type;
  let noteId = event.target.dataset.id;

  switch (type) {
    case "del":
      arrayOfNotes = arrayOfNotes.filter(({ id }) => id.toString() !== noteId);
      renderPinnedArchiveNotes(arrayOfNotes);
      localStorage.setItem("notes", JSON.stringify(notesArray));
      break;
    case "pinned":
      // Reversing isPinned value of the target note
      arrayOfNotes = arrayOfNotes.map((note) =>
        note.id.toString() === noteId
          ? { ...note, isPinned: !note.isPinned }
          : note
      );
      renderPinnedArchiveNotes(arrayOfNotes);
      localStorage.setItem("notes", JSON.stringify(notesArray));
      break;
    case "archive":
      arrayOfNotes = arrayOfNotes.map((note) =>
        note.id.toString() === noteId
          ? { ...note, isArchived: !note.isArchived }
          : note
      );
      renderPinnedArchiveNotes(arrayOfNotes);
      localStorage.setItem("notes", JSON.stringify(notesArray));
  }
});

if (arrayOfNotes.length > 0) {
  pinnedNoteTitle.classList.toggle("d-none");
  otherNoteTitle.classList.toggle("d-none");
}

renderPinnedArchiveNotes(arrayOfNotes);
