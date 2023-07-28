import { refs } from './refs';

export function editNote(noteId, name, content, category) {
  isUpdate = true;
  updateId = noteId;

  refs.createNoteBtn.click();
  refs.titleTag.value = name;
  refs.contentTag.value = content;
  refs.categoryTag.value = category;

  refs.modalTitle.innerText = 'Update a Note';
  refs.addBtn.innerText = 'Edit';
}
