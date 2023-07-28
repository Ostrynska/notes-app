import { refs } from './refs';
import { annotate } from 'https://unpkg.com/rough-notation?module';

function highlightText() {
  refs.a3 = annotate(n3, { type: 'underline', color: $colorDark });
  console.log(refs.a3);
  a3.show();
}

highlightText();
