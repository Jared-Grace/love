import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { equal } from "./equal.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_text_capital_words(text) {
  "$plain text";
  "the text is one word of a verse, or one interlinear gloss. It is read apart letter by letter and nothing about it runs.";
  "The letters of every capitalised word inside a piece of text, in order, with punctuation dropped from each.";
  arguments_assert(arguments, 1);
  let found = [];
  for (let part of text_split_space(text)) {
    let letters_inner = text_letters_only(part);
    let blank = equal(letters_inner, "");
    if (blank) {
      continue;
    }
    let first = letters_inner.slice(0, 1);
    let right = text_upper_to(first);
    let upper = equal(first, right);
    let lower = text_lower_is(first);
    let capital = upper && not(lower);
    if (capital) {
      list_add(found, letters_inner);
    }
  }
  return found;
}
