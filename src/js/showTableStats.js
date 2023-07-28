import { calculateStats } from './calculateStats';

export function showTableStats() {
  const categoryStats = calculateStats();

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
