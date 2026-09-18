import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { equal } from "./equal.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
export function bible_glyph_name_letters_or_null(text) {
  "$plain text";
  "the text is one word of a verse, or one interlinear gloss. It is read apart letter by letter and nothing about it runs.";
  "The letters of the single capitalised word inside a piece of text, or nothing where there is not exactly one.";
  "IT IS ASKED OF TWO DIFFERENT THINGS AND ANSWERS THE SAME QUESTION OF BOTH, which is the whole reason it is one function. An interlinear gloss is a fragment - of David, and Israel, the son of Jesse - and an authored word is a single word with its punctuation still attached. Both are being asked which name is in here, and a caller matching one against the other has to be reading them by the same rule or the match is an accident.";
  "EXACTLY ONE IS REQUIRED AND TWO ARE REFUSED. A gloss naming two capitalised words has not said which of them the number is for, and a match made on either would be a guess. Refusing is free: the word stays in letters, which is what it does today, so the cost of refusing wrongly is nothing at all and the cost of guessing wrongly is a badge on the wrong word.";
  "PUNCTUATION IS DROPPED AND NOTHING ELSE IS, so David and David, and David. all read as the same name. That is what lets an authored word carry the comma it needs and still be found.";
  arguments_assert(arguments, 1);
  let found = [];
  for (let part of text_split_space(text)) {
    let letters = text_letters_only(part);
    let blank = equal(letters, "");
    if (blank) {
      continue;
    }
    let first = letters.slice(0, 1);
    let right = text_upper_to(first);
    let upper = equal(first, right);
    let right2 = text_lower_to(first);
    let lower = equal(first, right2);
    let capital = upper && not(lower);
    if (capital) {
      list_add(found, letters);
    }
  }
  let one = equal(found.length, 1);
  if (not(one)) {
    return null;
  }
  let letters = found[0];
  let short = less_than(letters.length, 2);
  if (short) {
    return null;
  }
  return letters;
}
