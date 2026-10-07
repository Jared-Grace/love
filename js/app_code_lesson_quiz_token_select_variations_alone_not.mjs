import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { and } from "./and.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_quiz_token_select_variations_alone_not(code) {
  "every accepted token ordering for a line that does not read in by itself, such as if (true) { or } asked for out of a longer program";
  "A LINE OPENING A BLOCK ON A CONDITION, if (...) { or while (...) {, IS ORDERED BY ITS CONDITION. The condition is an expression of its own, so it is handed to the same ordering every expression gets, with the reading that drops a swap that changes what it says; the words around it are put back on every ordering unchanged. So if (n % 2 === 0) { accepts if (0 === n % 2) {, as the same condition unscrambled alone would. Asked for by the human 2026-10-08.";
  "Not picked: closing the block off with a } to read the whole line in. That finds the same swaps, but the line is then a statement rather than a value, and a statement is never asked whether a swap still says what it said, so a + between two strings would be swapped freely.";
  "Any other such line, a lone } among them, has one ordering: its own.";
  let tokens = app_code_quiz_tokens(code);
  let trimmed = text_trim(code);
  let suffix = ") {";
  let keywords = ["if", "while"];
  function opening_get(word) {
    let prefix = text_combine(word, " (");
    let starts = text_starts_with(trimmed, prefix);
    let ends = text_ends_with(trimmed, suffix);
    let both = and(starts, ends);
    return both;
  }
  let keyword = list_find_or_null(keywords, opening_get);
  if (null_is(keyword)) {
    let one = [tokens];
    return one;
  }
  let prefix2 = text_combine(keyword, " (");
  let rest = text_prefix_without(trimmed, prefix2);
  let condition = text_suffix_without(rest, suffix);
  let inner = app_code_lesson_quiz_token_select_variations(condition);
  function wrap(variation) {
    let wrapped = list_concat_multiple([[keyword, "("], variation, [")", "{"]]);
    return wrapped;
  }
  let variations = list_map(inner, wrap);
  return variations;
}
