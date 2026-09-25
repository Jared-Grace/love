import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_generic } from "./gloss_explain_verse_numbers_generic.mjs";
import { text_number_to_words } from "./text_number_to_words.mjs";
export function gloss_explain_verse_numbers_english(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation written in English names.";
  "English says verse fifteen rather than verse 15 in these stores, so the chapter's numbers are spelled into words and the words are what is looked for. Everything else about the reading is shared with every other language and is written once, next door.";
  "The words of distance are the ones English puts after a number to mean how far back rather than which one. The verse two back and verse two are the same three words with a fourth added, and only that fourth word says which of the two was meant.";
  arguments_assert(arguments, 2);
  let markers = ["verse", "verses"];
  let joiner = "and";
  let distances = ["back", "ago", "earlier", "later"];
  let r = gloss_explain_verse_numbers_generic(
    explain,
    verse_numbers,
    markers,
    joiner,
    distances,
    text_number_to_words,
  );
  return r;
}
