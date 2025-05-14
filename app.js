/** Creates the containers in html which is needed to show all the notes. 
 * Accepts a array of notes:  
 * notes = [
      {  
        id: string,  
        title: string,  
        note: string,  
        isPinned: boolean,  
        isArchived: boolean,  
      },
    ];  
 */
export const renderNotes = (notes) => {
  let newNotes = notes.map(({ id, note, title, isPinned, isArchived }) => {
    return (
      `<div class="single-note shadow">
        <div class="d-flex align-center title-container">
          <span class="single-note-title">${title}</span>
          <button class="button del-btn v-hidden">
            <span class="material-icons-outlined">delete</span>
          </button>
        </div>
        <p>${note}</p>
        <div class="options d-flex gap-md">
          <button class="button btn pinned-btn v-hidden">
            <span class="material-icons-outlined">push_pin</span>
          </button>
          <button class="button btn pinned-btn v-hidden">
            <span class="material-icons-outlined">archive</span>
          </button>
        </div>
      </div>`
    );
  });
  newNotes = newNotes.join("");
  return newNotes;
};
