import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { text_remove_end } from "./text_remove_end.mjs";
export function app_code_lesson_group_words(parts) {
  arguments_assert(arguments, 1);
  ("a group's name in words alone, with no code: its first part, which is always words, without the ( or : that opens the code after it - Operators for Operators (+ - * ...), Branching for Branching: if - asked for by the human 2026-10-18 for the heading at the top of a lesson, where the code made the heading long");
  let first = list_first(parts);
  let words = text_trim(first);
  let opens = text_ends_with_any(words, ["(", ":"]);
  if (opens) {
    let cut = text_remove_end(words, 1);
    words = text_trim(cut);
  }
  return words;
}
