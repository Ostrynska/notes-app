import { refs } from './refs';
import { data } from './data/tableData';
import { months } from './data/months';

import { showNewNote } from './showNewNote';
import { extractDate } from './extractDate';
import { generateId } from './generateId';

let isUpdate = false,
  updateId = null;

// function addNote() {}
const addBtn = document.querySelector('.note-btn');

addBtn.addEventListener('click', e => {
  e.preventDefault();

  refs.noteTitle = titleTag.value;
  refs.noteContent = contentTag.value;
  refs.noteCategory = categoryTag.value;
  let noteDates = extractDate(noteContent);

  if (refs.noteTitle || refs.noteContent || refs.noteCategory) {
    let dateObj = new Date(),
      month = months[dateObj.getMonth()],
      day = dateObj.getDate(),
      year = dateObj.getFullYear();

    let noteInfo = {
      id: isUpdate ? updateId : generateId(),
      name: noteTitle,
      created: `${month} ${day}, ${year}`,
      category: noteCategory,
      content: noteContent,
      dates: noteDates,
    };

    if (isUpdate) {
      isUpdate = false;
      const editedNoteInx = data.findIndex(note => note.id === updateId);
      if (editedNoteInx !== -1) {
        noteInfo.id = updateId;
        data[editedNoteIndex] = noteInfo;
      }
    } else {
      data.push(noteInfo);
    }

    showNewNote();
    refs.noteForm.reset();
    refs.closeBtn.click();
  }
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();

  isUpdate = false;
  updateId = null;

  refs.noteForm.reset();

  refs.modalTitle.innerText = 'Create New Note';
  refs.addBtn.innerText = 'Add';
  refs.closeBtn.click();
});
