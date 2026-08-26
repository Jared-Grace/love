import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function bible_glyph_word_negation_drawn(word) {
  "$plain word";
  "One shorthand word of a chapter with its English negation turned into the picture the negation roots are seated on, or nothing at all when the word is not a plain negation.";
  "IT KEEPS EVERYTHING THAT IS NOT THE NEGATION. A shorthand word carries its punctuation and sometimes an English stem as well - cannot is one word holding a verb and a negation - so replacing the whole word would silently drop a comma or a can, and neither shows up as anything but a sentence that reads slightly wrong to a person who never saw the original.";
  "ANSWERING WITH NOTHING IS THE COMMON CASE and it is not a failure. Almost every word of a chapter is not a negation, and a word that already draws the picture is not one either, because its letters spell the picture's name rather than an English no.";
  arguments_assert(arguments, 1);
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
  let known = list_includes(plain, lowered);
  let unknown = not(known);
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
