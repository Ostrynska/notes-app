const body = document.querySelector('body');
const addBtn = document.querySelector('.add-note');
const modalWindow = document.getElementById('exampleModal');
const titleTag = document.querySelector('.note-title');
const contentTag = document.querySelector('.note-content');
const categoryTag = document.querySelector('.note-category');

// const createNote = document.getElementById('createNote');
// const createNewNote = document.getElementById('form');

// // Додаємо обробник події "клік" на кнопку
// createNote.addEventListener('click', () => {
//   // Перевіряємо, чи форма прихована (display: none), і якщо так - змінюємо на display: block
//   if (createNewNote.style.display === 'none') {
//     createNewNote.style.display = 'block';
//   } else {
//     createNewNote.style.display = 'none'; // Якщо форма відображена, то приховуємо її
//   }
// });

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


let data = [
    { id: 1, name: 'Donate', created: '2023-07-25', category: 'Task', content: 'Some content', dates: '' },
    { id: 2, name: 'Щоденна задача', created: '2023-07-26', category: 'Task', content: 'Помолитись Степану Бандері', dates: '2023-07-26' },
  ];

const months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// data = JSON.parse(localStorage.getItem('notes') || '[]');


function displayDataInTable() {
    const tableBody = document.getElementById('tableBody');
    // Очищаємо таблицю перед додаванням нових даних
    tableBody.innerHTML = '';

    // Додаємо рядки у таблицю збережених даних
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.created}</td>
        <td>${item.category}</td>
        <td>${item.content}</td>
        <td>${item.dates}</td>
    <td>
        <img src="./images/edit_icon.png" width='22px' alt="Edit" class="action-icon" data-id="${item.id}">
        <img src="./images/archive_icon.png" width='26px'  alt="Archive" class="action-icon" data-id="${item.id}">
        <img src="./images/delete_icon.png" width='26px'  alt="Delete" class="action-icon" data-id="${item.id}">
    </td>
      `;
     tableBody.appendChild(row);
    });
}

displayDataInTable();

addBtn.addEventListener('click', e => {
    e.preventDefault();
    let noteTitle = titleTag.value,
    noteContent = contentTag.value,
    noteCategory = categoryTag.value;


    if(noteTitle || noteContent || noteCategory) {
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

        let noteInfo = {
            id: data.length +1,
            name: noteTitle, created: `${month} ${day}, ${year}`,
            category: noteCategory, content: noteContent,
        }

        data.push(noteInfo);
        console.log(data);

        displayDataInTable();


        //heandle modal
        // modalWindow.classList.remove("show");
        // body.classList.remove("modal-open");
        // body.style = '';
        // const backdrop = document.querySelector('.modal-backdrop');
        // backdrop.parentNode.removeChild(backdrop);

        // titleTag.value = '';
        // contentTag.value = '';
        // categoryTag.value = '';

        // localStorage.setItem('notes', JSON.stringify(data));
    }
})
