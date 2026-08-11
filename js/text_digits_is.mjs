import { digits_text } from "./digits_text.mjs";
import { list_all } from "./list_all.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function text_digits_is(text) {
  "True when this text is written out of digits and nothing else, and holds at least one of them.";
  "An empty text is answered no rather than yes. Nothing else is being asked about here - the question is always whether some real text is a number written out - and a yes for nothing at all would make every caller check for it first.";
  let characters = text_split_empty(text);
  let empty = list_empty_is(characters);
  if (empty) {
    return false;
  }
  let digits = digits_text();
  function digit_is(character) {
    let hit = text_includes(digits, character);
    return hit;
  }
  let all = list_all(characters, digit_is);
  return all;
}
