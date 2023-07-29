import { data } from '../data/notes.js';
import { images } from '../data/images.js';

console.log('hi');

// export function renderMainTable() {
//   const tableBody = document.getElementById('tableBody');
//   tableBody.innerHTML = '';

//   data.forEach(item => {
//     const row = document.createElement('tr');
//     console.log(images[item.category]);
//     row.innerHTML = `
//     <th scope="row"><img src="${images[item.category]}" alt="${
//       item.category
//     }" width="32px"></th>
//         <td>${item.name}</td>
//         <td>${item.created}</td>
//         <td>${item.category}</td>
//         <td >${item.content}</td>
//         <td class="note-dates">${item.dates}</td>
//         <td>
//             <button class="edit-note action-icon"> <img src="images/edit_icon.png" width="24px" alt="Edit" data-id="${
//               item.id
//             }">
//             </button>
//             <button><img src="images/archive_icon.png" width="26px" alt="Archive" class="action-icon" data-id="${
//               item.id
//             }"></button>
//             <button class="delete-btn action-icon"><img src="images/delete_icon.png" width="26px"  alt="Delete" data-id="${
//               item.id
//             }"></button>
//         </td>
//       `;
//     tableBody.prepend(row);

//     // const deleteBtn = document.querySelector('.delete-btn');
//     // deleteBtn.addEventListener('click', () => deleteNote(item.id));
//   });
// }

// renderMainTable();
