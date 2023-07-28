import { data } from './data/tableData';
import { showNewNote } from './showNewNote';

export function removeNote(noteId) {
  let confirmDel = confirm('Are you sure that ou want to delete this note?');
  if (!confirmDel) return;
  data.splice(noteId, 1);
  showNewNote();
}
