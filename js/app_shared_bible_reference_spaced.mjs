import { text_replace } from "./text_replace.mjs";
export function app_shared_bible_reference_spaced(reference) {
  "A reference as a reader writes it, out of the form a link carries it in - John 3:16 rather than John+3:16.";
  "A link cannot hold a space, so a reference travels with its spaces written as plusses. Everything that reads a reference wants it back the other way first - the reading of it, which looks for a book name, and the offering of a correction, where a plus in the middle reads to the reader as one more thing gone wrong.";
  let plus = "+";
  let space = " ";
  let said = text_replace(reference, plus, space);
  return said;
}
