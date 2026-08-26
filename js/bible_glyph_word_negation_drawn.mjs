import { list_includes_not } from "./list_includes_not.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { add } from "./add.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function bible_glyph_word_negation_drawn(word) {
  "$plain word";
  "One shorthand word of a chapter with its English negation turned into the picture the negation roots are seated on, or nothing at all when the word is not a plain negation.";
  "IT KEEPS EVERYTHING THAT IS NOT THE NEGATION. A shorthand word carries its punctuation and sometimes an English stem as well - cannot is one word holding a verb and a negation - so replacing the whole word would silently drop a comma or a can, and neither shows up as anything but a sentence that reads slightly wrong to a person who never saw the original.";
  "ANSWERING WITH NOTHING IS THE COMMON CASE and it is not a failure. Almost every word of a chapter is not a negation, and neither is any word that already carries a picture.";
  "A WORD ALREADY CARRYING A PICTURE IS REFUSED OUTRIGHT, and the reason is worth writing down because it looked like it needed no rule at all. The picture a negation is seated on is spelled with the letters n and o, so the first run of letters in an already drawn word reads as the English word no - which makes a word that is finished look exactly like a word waiting to be drawn, and drawing it a second time would put the picture inside its own name.";
  arguments_assert(arguments, 1);
  let carried = word.indexOf("$");
  let drawn_already = equal_not(carried, -1);
  if (drawn_already) {
    return null;
  }
  let letters = word.match(/[A-Za-z]+/);
  let none = equal(letters, null);
  if (none) {
    return null;
  }
  let run = letters[0];
  let lowered = text_lower_to(run);
  let plain = [
    "no",
    "not",
    "nor",
    "none",
    "never",
    "neither",
    "nothing",
    "nobody",
    "cannot",
  ];
  let unknown = list_includes_not(plain, lowered);
  if (unknown) {
    return null;
  }
  let at = word.indexOf(run);
  let before = word.slice(0, at);
  let sum = add(at, run.length);
  let after = word.slice(sum);
  let compound = equal(lowered, "cannot");
  let mark = "$no_entry";
  if (compound) {
    mark = "can$no_entry";
  }
  let drawn = list_join_empty([before, mark, after]);
  return drawn;
}
