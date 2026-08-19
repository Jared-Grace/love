import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace } from "./text_replace.mjs";
export function gloss_word_bare(word) {
  "One word cut down to what two sources can be compared on: lower case, with every dash taken out.";
  "Two dictionaries write the same Cebuano word differently in ways that mean nothing - one capitalises where the other does not, and one writes a doubled root with a dash where the other runs it together, balhin-balhin against balhinbalhin. Left in, both differences count as edits and a word plainly identical to itself reads as several letters away from it.";
  "$plain word";
  "it names text to compare, never anything that runs.";
  let lower = text_lower_to(word);
  let bare = text_replace(lower, "-", "");
  return bare;
}
