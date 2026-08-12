import { text_from_code_number } from "./text_from_code_number.mjs";
export function ebible_verse_split_mark() {
  "The mark written into a page where a verse begins, so that flattening the page into words does not lose the place.";
  "A character no bible is written in, rather than a word or a bracket, because whatever is chosen has to be something the split can trust: a mark that could also be scripture would cut a verse in half wherever the scripture happened to say it.";
  "The one chosen is the unit separator, the character a machine has long used to say where one record ends and the next begins, and which no writing system uses for anything.";
  let code_number = 31;
  let m = text_from_code_number(code_number);
  return m;
}
