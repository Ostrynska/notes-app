import { refs } from "./refs.js";
import { data } from "./data/notes.js";
import {generateId, createDate} from './helpers.js'

import { renderMainTable, renderStatsTable } from "./app.js";
// import { runApp } from "./app.js";
export let archivedNotes = [],
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
        renderMainTable();
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

export function deleteNote(id)
{
    const index = data.findIndex(item => item.id === id);
    const confirmDel = confirm('Are you sure that you want to delete this note?');
    if (!confirmDel) return;
    data.splice(index, 1);
    renderMainTable()
    // runApp();
}

export function deleteAllNotes()
{
    const confirmDel = confirm('Are you sure that you want to delete ALL notes?');
    if (!confirmDel) return;
  data.length = 0;
  renderMainTable();
}

export function archiveNote(id) {
    const note = data.find(item => item.id === id);
    console.log(note);

  if (note) {
      note.archived = !note.archived;
      archivedNotes.push(note);
        const allArchived = data.every(item => item.archived);
      if (archivedNotes.length > 0 || allArchived) {
          refs.openArchive.style.display = 'inline-block'
      }
    //   else {
    //       refs.openArchive.style.display = 'none'
    //   }
    renderMainTable();
    renderStatsTable();
 }
}

export function archiveAllNotes() {
    data.forEach(item => item.archived = true);
    archivedNotes.push(...data)
    renderMainTable();
}