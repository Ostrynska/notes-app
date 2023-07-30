import { refs } from "./refs.js";
import { data } from "./data/notes.js";
import { generateId, createDate, calculateStats } from './helpers.js'

import { renderPage } from "./app.js";

export let archivedNotes = [],
  statsBeforeDeletion =  [],
    isUpdate = false,
    updateId = null;

export function addNote() {
    const noteTitle = document.querySelector('.note-title');
    const noteCategory = document.querySelector('.note-category');
    const noteContent = document.querySelector('.note-content');

    if (noteTitle.value || noteContent.value || noteCategory.value) {
        const noteInfo = {
            id: generateId(),
            name: noteTitle.value,
            created: createDate(),
            category: noteCategory.value,
            content: noteContent.value,
            archived: false,
        }

    if (isUpdate) {
      const editedNoteInx = data.findIndex(note => note.id === updateId);
      if (editedNoteInx !== -1) {
        noteInfo.id = updateId;
        data[editedNoteInx] = noteInfo;
      }
    }
    else {
      data.push(noteInfo);
    }
        refs.noteForm.reset();
        refs.closeBtn.click();
      renderPage();
    }
}

export function closeNote() {
  isUpdate = false;
  updateId = null;

  refs.noteForm.reset();

  refs.modalTitle.innerText = 'Create New Note';
  refs.addBtn.innerText = 'Add';
  refs.closeBtn.click();
};

export function editNote(idx){
 const noteTitle = document.querySelector('.note-title');
  const noteCategory = document.querySelector('.note-category');
  const noteContent = document.querySelector('.note-content');
  const index = data.findIndex(item => item.id === idx);

  if (index !== -1) {
    isUpdate = true;
    updateId = idx;

    refs.modalTitle.innerText = 'Update a Note';
    refs.addBtn.innerText = 'Edit';

    refs.createNoteBtn.click();
    noteTitle.value = data[index].name;
    noteCategory.value = data[index].category;
    noteContent.value = data[index].content;
  }
}

export function deleteNote(id) {
  const index = data.findIndex((item) => item.id === id);
  const confirmDel = confirm('Are you sure that you want to delete this note?');
  if (!confirmDel) return;
  statsBeforeDeletion = {...calculateStats()};
  data.splice(index, 1);

  renderPage();
}

export function deleteAllNotes()
{
    const confirmDel = confirm('Are you sure that you want to delete ALL notes?');
  if (!confirmDel) return;
  statsBeforeDeletion = { ...calculateStats() };
  data.length = 0;
  renderPage();
}

export function archiveNote(id) {
  const note = data.find(item => item.id === id);

  if (note) {
    note.archived = !note.archived;
    const existingNote = archivedNotes.find(item => item.id === id);

    if (note.archived && !existingNote) {
      archivedNotes.push(note);
    } else if (!note.archived && existingNote) {
      const index = archivedNotes.findIndex(item => item.id === id);
      archivedNotes.splice(index, 1);
    }

    if (archivedNotes.length > 0) {
      refs.openArchive.style.display = 'inline-block';
    } else {
      refs.openArchive.style.display = 'none';
    }

    renderPage();
  }
}

export function archiveAllNotes() {
    data.forEach(item => item.archived = true);
  archivedNotes.push(...data)
  console.log(archivedNotes);
  if (data.every(item => item.archived)) {
      refs.openArchive.style.display = 'inline-block';
    } else {
      refs.openArchive.style.display = 'none';
    }
    renderPage();
}

export function unarchiveNote(id)
{
  const noteIndex = archivedNotes.findIndex(item => item.id === id);
  const isNoteExists = data.some(item => item.id === id);
  const note = archivedNotes.splice(noteIndex, 1)[0];
  note.archived = false;

    if (archivedNotes.length === 0) {
      refs.closeArchiveBtn.click();
      refs.openArchive.style.display = 'none';
    }

      renderPage();
  }


export function unarchiveAllNotes() {

  archivedNotes.forEach(item => (item.archived = false));
  if (archivedNotes.every(item => item.archived = false)) {
    archivedNotes.length = 0;
  }

  if (archivedNotes.every(item => !item.archived)) {
    refs.closeArchiveBtn.click();
    refs.openArchive.style.display = 'none';
  }

  archivedNotes.length = 0;
    renderPage();
}
