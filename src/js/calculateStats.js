import { data } from './data/tableData';

import { archiveNote } from './archiveNote';

export function calculateStats() {
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

// // function calculateCategoryStats() {
// //   const categoryStats = {};

// //   data.forEach(item => {
// //     if (!categoryStats[item.category]) {
// //       categoryStats[item.category] = {
// //         totalNotes: 0,
// //         archivedNotes: 0,
// //       };
// //     }

// //     categoryStats[item.category].totalNotes++;

// //     if (item.archived) {
// //       categoryStats[item.category].archivedNotes++;
// //       categoryStats[item.category].totalNotes--;
// //     }
// //   });

// //   return categoryStats;
// // }
