import { regexp as r } from "./regexp.js";

function unicode(text) {
  while (r.unicode.test(text)) {
    const encoded = text.match(r.unicode)[0].match(r.getUnicode)[0];
    text = text.replace(r.unicode, String.fromCharCode(parseInt(encoded, 16)));
  }
  return text;
}

function formatDate(dateAsNumber) {
  if (isNaN(dateAsNumber)) return dateAsNumber;
  const formattedDate = new Date(dateAsNumber * 1000);
  return formattedDate.getTime() ? formattedDate : dateAsNumber;
}

export { unicode, formatDate };
