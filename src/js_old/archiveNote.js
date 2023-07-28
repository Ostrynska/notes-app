import { showNewNote } from './showNewNote';
import { showTableStats } from './showTableStats';

export function archiveNote(noteId) {
  const note = data.find(item => item.id === noteId);

  if (note) {
    note.archived = !note.archived;
    showNewNote();
    showTableStats();
  }
}
