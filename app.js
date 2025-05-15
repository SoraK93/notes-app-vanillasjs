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
    return `<div class="single-note shadow">
        <div class="d-flex align-center title-container">
          <span class="single-note-title">${title}</span>
          <button class="button del-btn v-hidden" data-type="del" data-id="${id}">
            <span class="material-icons-outlined" data-type="del" data-id="${id}">delete</span>
          </button>
        </div>
        <p>${note}</p>
        <div class="options d-flex gap-md">
          <button class="button btn pinned-btn v-hidden" data-id="${id}" data-type="pinned">
            <span class=${isPinned ? "material-icons" : "material-icons-outlined"} data-id="${id}" data-type="pinned">push_pin</span>
          </button>
          <button class="button btn pinned-btn v-hidden" data-id="${id}" data-type="archive">
            <span class="material-icons-outlined" data-id="${id}" data-type="archive">archive</span>
          </button>
        </div>
      </div>`;
  });
  newNotes = newNotes.join("");
  return newNotes;
};
