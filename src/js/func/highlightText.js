import { annotate } from 'https://unpkg.com/rough-notation?module';

export default function highlightText() {
  const n3 = document.querySelector('#trail');
  console.log(n3);
  const a3 = annotate(n3, { type: 'underline', color: $colorDark });
  console.log(a3);
  a3.show();
}
console.log(highlightText());
