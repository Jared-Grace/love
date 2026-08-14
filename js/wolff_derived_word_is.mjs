import { greater_than } from "./greater_than.mjs";
export function wolff_derived_word_is(derived) {
  "Whether one of the forms a dictionary entry lists under its headword is a whole word, rather than a pattern showing where an affix goes.";
  "$plain derived";
  "the derived is a form printed under a headword. It is looked at and answered about; nothing here reads a file, reaches anywhere, or runs what it is given.";
  "The book prints both kinds in the same place and tells them apart by how they are set. A pattern carries a hyphen where the root would go and nothing else - gi-, paN-, -in- - or an arrow standing for the headword written without its accents, or a long dash standing for the headword itself inside a phrase. A whole word carries none of those and is simply spelled out: daygun, maluluy-un, kanakuu.";
  "A hyphen inside a word does not make it a pattern. Cebuano writes the catch in the throat between two vowels with one, so lad-anun and maluluy-un are ordinary words with an ordinary letter in the middle, and only a hyphen at an end is the book saying that something attaches there.";
  "A form with a space in it is left out as well. Those are the phrases the book files under a headword - may, walay - and halayu nga - - and they are things said rather than words built, so a reader meeting a single word will never be looking for one.";
  let ends = /^-|-$/.test(derived);
  if (ends) {
    return false;
  }
  let stands_for = /[—→()]/.test(derived);
  if (stands_for) {
    return false;
  }
  let spaced = / /.test(derived);
  if (spaced) {
    return false;
  }
  let r = greater_than(derived.length, 0);
  return r;
}
