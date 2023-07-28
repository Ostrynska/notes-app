import { refs } from './refs';
import { data } from './data/tableData';
import { categoryImages } from './data/categoryImg';

import { archiveNote } from './archiveNote';
import { editNote } from './editNote';
import { removeNote } from './removeNote';
import { showTableStats } from './showTableStats';

export function showNewNote(showArchived = false) {
  refs.tableBody.innerHTML = '';

  data.forEach((item, idx) => {
    if (showArchived || !item.archived) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row" ><img src="${categoryImages[item.category]}" alt="${
        item.category
      }" width="32px"></th>
        <td>${item.name}</td>
        <td>${item.created}</td>
        <td>${item.category}</td>
        <td >${item.content}</td>
        <td class="note-dates">${item.dates}</td>
        <td>
            <button class="edit-note" onclick="editNote(${item.id}, '${
        item.name
      }', '${item.content}', '${
        item.category
      }')"> <img src="./images/edit_icon.png" width='24px' alt="Edit" class="action-icon" data-id="${
        item.id
      }">
            </button>
            <button onclick="archiveNote(${
              item.id
            })"><img src="./images/archive_icon.png" width='26px'  alt="Archive" class="action-icon" data-id="${
        item.id
      }"></button>
            <button onClick="removeNote(${idx})"><img src="./images/delete_icon.png" width='26px'  alt="Delete" class="action-icon" data-id="${
        item.id
      }"></button>
        </td>
      `;
      tableBody.prepend(row);
    }
  });
  showTableStats();
}

showNewNote();
