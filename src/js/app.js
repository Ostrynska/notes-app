import { refs } from './refs.js';
import { highlightText } from '../js/helpers.js';
import {
  addNote,
  closeNote,
  archiveAllNotes,
  deleteAllNotes,
  unarchiveAllNotes,
} from './actions.js';

import {
  renderMainTable,
  renderStatsTable,
  renderArchivedTable,
} from './renderFunc.js';

highlightText();

export function renderPage() {
  try {
    renderMainTable();
  } catch (error) {
    console.error(error.message);
  }
  try {
    renderStatsTable();
  } catch (error) {
    console.error(error.message);
  }
  try {
    renderArchivedTable();
  } catch (error) {
    console.error(error.message);
  }
}

refs.addBtn.addEventListener('click', addNote);
refs.closeBtn.addEventListener('click', closeNote);
refs.deleteAllBtn.addEventListener('click', deleteAllNotes);
refs.archiveAllBtn.addEventListener('click', archiveAllNotes);
refs.unarchiveAllBtn.addEventListener('click', unarchiveAllNotes);

renderPage();
