export default function extractDate(text) {
  const regex =
    /\b(\d{1,2}[./-]\d{1,2}[./-]\d{2,4}|\w+ \d{1,2},? \d{2,4}|(\d{4}-\d{2}-\d{2})ʼ)\b/g;
  const datesArray = text.match(regex);
  return datesArray ? datesArray.join(', ') : '';
}
