import { data } from './data/notes.js';
import { refs } from './refs.js';
import { months } from './data/months.js';
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
      categoryStats[item.category].archivedNotes += 1;
      categoryStats[item.category].totalNotes -= 1;
    }
    return categoryStats;
  }, {});
}

export function showReadMoreButton(moreBtn, desc) {
  const isClosed = moreBtn.innerText === 'read more';

  if (isClosed) {
    moreBtn.innerText = 'read less';
    desc.classList.add('full');
  } else {
    moreBtn.innerText = 'read more';
    desc.classList.remove('full');
  }
}
