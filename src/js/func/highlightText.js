import { annotate } from 'https://unpkg.com/rough-notation?module';

export default function highlightText() {
  const a3 = document.querySelector('#trail');
  console.log(a3);
  a3 = annotate(a3, { type: 'underline', color: $colorDark });
  console.log(a3);
  a3.show();
}
