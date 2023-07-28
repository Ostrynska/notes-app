export const refs = {
  body: document.querySelector('body'),

  createNoteBtn: document.getElementById('createNote'),

  modal: new bootstrap.Modal(document.getElementById('staticBackdrop')),
  noteForm: document.getElementById('noteForm'),
  modalTitle: document.getElementById('exampleModalLabel'),
  titleTag: document.querySelector('.note-title'),
  contentTag: document.querySelector('.note-content'),
  categoryTag: document.querySelector('.note-category'),
  datesTag: document.querySelector('.note-dates'),
  addBtn: document.querySelector('.note-btn'),
  closeBtn: document.querySelector('.close-note'),

  tableBody: document.getElementById('tableBody'),

  n3: document.querySelector('#trail'),
};
