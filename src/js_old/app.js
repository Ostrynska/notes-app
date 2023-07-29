const body = document.querySelector('body');
const createNote = document.getElementById('createNote');
const closeBtn = document.querySelector('.close-note');
const addBtn = document.querySelector('.note-btn');
const modalTitle = document.getElementById('exampleModalLabel');
const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
const noteForm = document.getElementById('noteForm');
const titleTag = document.querySelector('.note-title');
const contentTag = document.querySelector('.note-content');
const categoryTag = document.querySelector('.note-category');
const datesTag = document.querySelector('.note-dates');
const tableBody = document.querySelector('.table');

import { refs } from './refs';
import { annotate } from 'https://unpkg.com/rough-notation?module';

export default function highlightText() {
  a3 = annotate(n3, { type: 'underline', color: $colorDark });
  console.log(refs.a3);
  a3.show();
}

let isUpdate = false,
  updateId = null;

function generateId() {
  return Math.floor(Math.random() * 10000);
}

let data = [
  {
    id: generateId(),
    name: 'Morning routine',
    created: 'July 01, 2023',
    category: 'Task',
    content: 'Read the news daily',
    dates: '',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Kentaro Miura, Berserk',
    created: 'July 07, 2023',
    category: 'Random thought',
    content:
      '“In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the hand of God hovering above? At least it is true that man has no control, even over his own will. Man takes up the sword in order to shield the small wound in his heart sustained in a far-off time beyond remembrance. Man wields the sword so that he may die smiling in some far-off time beyond perception.”',
    dates: '',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Portfolio Idea',
    created: 'July 07, 2023',
    category: 'Idea',
    content:
      'Develop a landing page for one of the units of the Armed Forces of Ukraine',
    dates: '',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Caring for a pet',
    created: 'July 10, 2023',
    category: 'Task',
    content: 'Order cat food',
    dates: '',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Caring for a pet',
    created: 'July 11, 2023',
    category: 'Task',
    content:
      'Make an appointment with a vet on 5/12/2023, cancel an appointment on 5/11/2023',
    dates: ' 5/12/2023, 5/11/2023',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Сharity',
    created: 'July 12, 2023',
    category: 'Random thought',
    content: 'Send a donation',
    dates: '',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Morning routine',
    created: 'July 18, 2023',
    category: 'Task',
    content: 'Pray to Stepan Bandera',
    dates: '',
    archived: false,
  },
];
console.log(data);
const categoryImages = {
  Task: 'images/category/task_icon.png',
  'Random thought': 'images/category/random_thought_icon.png',
  Idea: 'images/category/idea_icon.png',
  Quote: 'images/category/quote_icon.png',
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// data = JSON.parse(localStorage.getItem('notes') || '[]');

function showNote(showArchived = false) {
  const tableBody = document.getElementById('tableBody');

  tableBody.innerHTML = '';

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
            <button class="edit-note" onclick="updateNote(${item.id}, '${
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
            <button onClick="deleteNote(${idx})"><img src="./images/delete_icon.png" width='26px'  alt="Delete" class="action-icon" data-id="${
        item.id
      }"></button>
        </td>
      `;
      tableBody.prepend(row);
    }
  });
  displayCategoryStatsTable();
}
showNote();

// addBtn.addEventListener('click', e => {
//   e.preventDefault();

//   let noteTitle = titleTag.value,
//     noteContent = contentTag.value,
//     noteCategory = categoryTag.value,
//     noteDates = extractDatesFromText(noteContent);

//   if (noteTitle || noteContent || noteCategory) {
//     let dateObj = new Date(),
//       month = months[dateObj.getMonth()],
//       day = dateObj.getDate(),
//       year = dateObj.getFullYear();

//     let noteInfo = {
//       id: isUpdate ? updateId : generateId(),
//       name: noteTitle,
//       created: `${month} ${day}, ${year}`,
//       category: noteCategory,
//       content: noteContent,
//       dates: noteDates,
//     };

//     if (isUpdate) {
//       isUpdate = false;
//       const editedNoteIndex = data.findIndex(note => note.id === updateId);
//       if (editedNoteIndex !== -1) {
//         noteInfo.id = updateId;
//         data[editedNoteIndex] = noteInfo;
//       }
//     } else {
//       data.push(noteInfo);
//     }

//     showNote();
//     noteForm.reset();
//     closeBtn.click();
//     // localStorage.setItem('notes', JSON.stringify(data));
//   }
// });

// closeBtn.addEventListener('click', e => {
//   e.preventDefault();

//   isUpdate = false;
//   updateId = null;

//   noteForm.reset();

//   modalTitle.innerText = 'Create New Note';
//   addBtn.innerText = 'Add';
//   closeBtn.click();
// });

// function deleteNote(noteId) {
//   let confirmDel = confirm('Are you sure that ou want to delete this note?');
//   if (!confirmDel) return;
//   data.splice(noteId, 1);
//   showNote();
// }

// function updateNote(noteId, name, content, category) {
//   isUpdate = true;
//   updateId = noteId;

//   createNote.click();
//   titleTag.value = name;
//   contentTag.value = content;
//   categoryTag.value = category;

//   modalTitle.innerText = 'Update a Note';
//   addBtn.innerText = 'Edit';
//   console.log(data);
// }

function extractDatesFromText(text) {
  const regex =
    /\b(\d{1,2}[./-]\d{1,2}[./-]\d{2,4}|\w+ \d{1,2},? \d{2,4}|(\d{4}-\d{2}-\d{2})ʼ)\b/g;
  const datesArray = text.match(regex);
  return datesArray ? datesArray.join(', ') : '';
}
function archiveNote(noteId) {
  const note = data.find(item => item.id === noteId);

  if (note) {
    note.archived = !note.archived;
    showNote();
    displayCategoryStatsTable();
  }
}

// function calculateCategoryStats() {
//   const categoryStats = {};

//   data.forEach(item => {
//     if (!categoryStats[item.category]) {
//       categoryStats[item.category] = {
//         totalNotes: 0,
//         archivedNotes: 0,
//       };
//     }

//     categoryStats[item.category].totalNotes++;

//     if (item.archived) {
//       categoryStats[item.category].archivedNotes++;
//       categoryStats[item.category].totalNotes--;
//     }
//   });

//   return categoryStats;
// }
function calculateCategoryStats() {
  return data.reduce((categoryStats, item) => {
    if (!categoryStats[item.category]) {
      categoryStats[item.category] = {
        totalNotes: 0,
        archivedNotes: 0,
      };
    }

    categoryStats[item.category].totalNotes++;

    if (item.archived) {
      categoryStats[item.category].archivedNotes++;
      categoryStats[item.category].totalNotes--;
    }

    return categoryStats;
  }, {});
}
function displayCategoryStatsTable() {
  const categoryStats = calculateCategoryStats();

  tableBodyCategoty.innerHTML = '';

  for (const category in categoryStats) {
    const rowCategory = document.createElement('tr');
    rowCategory.innerHTML = `
      <td><img src="${categoryImages[category]}" alt="${categoryStats.category}" width="32px"> </td>
      <td>${category}</td>
      <td>${categoryStats[category].totalNotes}</td>
      <td>${categoryStats[category].archivedNotes}</td>
    `;
    tableBodyCategoty.appendChild(rowCategory);
  }
}
