import { text_replace } from "./text_replace.mjs";
export function app_shared_bible_reference_label(reference) {
  "A reference as a reader writes it, out of the form a link carries it in - John 3:16 rather than John+3:16.";
  "A link cannot hold a space, so a reference travels with its spaces written as plusses. That is the link's business and not the reader's: offered a correction, what they need to see is the reference the way they would say it, and a plus in the middle of it reads as one more thing gone wrong.";
  let plus = "+";
  let space = " ";
  let said = text_replace(reference, plus, space);
  return said;
}
