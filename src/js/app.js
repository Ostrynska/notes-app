import { data } from "./data/notes.js";
import { images } from "./data/images.js";
import { refs } from "./refs.js";
import { extractDate, highlightText, calculateStats } from "../js/helpers.js";
import { archivedNotes, deleteNote, addNote, closeNote, editNote, archiveNote, archiveAllNotes, deleteAllNotes, unarchiveNote, unarchiveAllNotes, statsBeforeDeletion } from "./actions.js";

highlightText();

export function renderMainTable(showArchived = false)
{
    refs.tableBody.innerHTML = '';

    const allArchived = data.every(item => item.archived);

    if (data.length === 0 || allArchived === true) {
        refs.tableHeader.style.display = 'none';
    } else {
        refs.tableHeader.style.display = 'table-header-group';

        data.forEach((item) =>
        {
            if (showArchived || !item.archived) {
                const row = document.createElement('tr');
                row.innerHTML = `
            <th scope="row">
                <img src="${images[item.category]}" alt="${item.category}" width="32px">
            </th>
                <td>${item.name}</td>
                <td>${item.created}</td>
                <td>${item.category}</td>
                <td>${item.content}</td>
                <td>${extractDate(item.content)}</td>
                <td>
                    <div class="action-icons">
                        <img src="./images/edit_black_icon.png" alt="Edit" width="26px" id='edit-btn' class="action-icon">
                        <img src="./images/archive_black_icon.png" alt="Archive" width="30px" id='archive-btn' class="action-icon">
                        <img src="./images/delete_black_icon.png" alt="Remove" width="26px" height="28px" id='delete-btn' class="action-icon">
                    </div>
                </td>`
                refs.tableBody.prepend(row);

                //edit btn
                const editBtn = document.getElementById('edit-btn');
                editBtn.addEventListener('click', () => editNote(item.id));
                //archive btn
                const archiveBtn = document.getElementById('archive-btn');
                archiveBtn.addEventListener('click', () => archiveNote(item.id));
                //delete btn
                const deleteBtn = document.getElementById('delete-btn');
                deleteBtn.addEventListener('click', () => deleteNote(item.id));
            }
        })
    }
    renderStatsTable();
};

export function renderStatsTable() {
  const categoryStats = calculateStats();
  refs.tableBodyCategory.innerHTML = '';

  for (const category in categoryStats) {
     const rowCategory = document.createElement('tr');
     rowCategory.innerHTML = `
       <td><img src="${images[category]}" alt="${category}" width="32px"> </td>
       <td>${category}</td>
      <td>${categoryStats[category].totalNotes}</td>
      <td>${categoryStats[category].archivedNotes}</td>
     `;
     refs.tableBodyCategory.appendChild(rowCategory);
   }

   for (const category in statsBeforeDeletion) {
     if (!categoryStats[category]) {
       const rowCategory = document.createElement('tr');
       rowCategory.innerHTML = `
         <td><img src="${images[category]}" alt="${category}" width="32px"> </td>
         <td>${category}</td>
         <td>0</td>
         <td>0</td>
       `;
       refs.tableBodyCategory.appendChild(rowCategory);
     }
   }
}

export function renderArchivedTable() {
  refs.tableBodyArchived.innerHTML = '';
    archivedNotes.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
            <th scope="row">
                <img src="${images[item.category]}" alt="${
        item.category
      }" width="32px">
            </th>
                <td>${item.name}</td>
                <td>${item.created}</td>
                <td>${item.category}</td>
                <td>${item.content}</td>
                <td>${extractDate(item.content)}</td>
                <td>
                    <div class="action-icons">
                        <img src="./images/archive_black_icon.png" alt="Archive" width="30px" id="unarchive-btn" class="action-icon">
                    </div>
                </td>`;
      refs.tableBodyArchived.prepend(row);

    const unarchiveBtn = document.getElementById(`unarchive-btn`);
        unarchiveBtn.addEventListener('click', () => unarchiveNote(item.id));
});
}

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