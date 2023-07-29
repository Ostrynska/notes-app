import { data } from "./data/notes.js";
import { refs } from "./refs.js";
import { months } from "./data/months.js";
import { annotate } from 'https://unpkg.com/rough-notation?module';

export function highlightText() {
  const a3 = annotate(refs.n3, { type: 'underline', color: '#ffc300' });
  return a3.show();
}

export function generateId() {
  return Math.floor(Math.random() * 10000);
}

export function extractDate(text) {
  const regex =
    /\b(\d{1,2}[./-]\d{1,2}[./-]\d{2,4}|\w+ \d{1,2},? \d{2,4}|(\d{4}-\d{2}-\d{2})ʼ)\b/g;
  const datesArray = text.match(regex);
  return datesArray ? datesArray.join(', ') : '';
}

export function createDate() {
    let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
}

export function calculateStats() {
  return data.reduce((categoryStats, item) => {
    if (!categoryStats[item.category]) {
      categoryStats[item.category] = {
        totalNotes: 0,
        archivedNotes: 0,
      };
    }

      categoryStats[item.category].totalNotes += 1;

    if (item.archived === true) {
      categoryStats[item.category].archivedNotes+=1;
      categoryStats[item.category].totalNotes-=1;
    }

    //       if (item.deleted === true) {
    //   categoryStats[item.category].deletedNotes += 1; // Збільште лічильник видалених нотаток
    //   categoryStats[item.category].totalNotes -= 1; // Зменште загальний лічильник нотаток
    // }

    return categoryStats;
  }, {});
}


// export function countTasks(status, category) {
//     let total = 0;
//     tasks.forEach(task => {
//       if (task.isActive == status && task.category == category) {
//           total = total + 1
//       }
//     })

//     return total;
// }

// export function findDates(inputText) {
//     const wordsInString = inputText.split(' ');
//     const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
//     const dates = wordsInString.filter(word => word.match(regex)).join(', ');

//     return dates;
// }

// export function getDate() {
//     const date = new Date().toString();
//     const dateParts = date.split(' ');
//     const formattedDate = dateParts[1] + ' ' + dateParts[2] + ', ' + dateParts[3];

//     return formattedDate;
// }

export function showArchive() {
    const archiveTable = document.getElementById('archive-table');

    archiveTable.style.display = "block";
}

export function hideArchive() {
    const archiveTable = document.getElementById('archive-table');
    
    archiveTable.style.display = "none";
}


