import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_skip } from "./list_skip.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_quiz_string_tokens_merge(tokens) {
  "the inverse of the string split the quiz tokenizer does: collapse each run of an opening quote token, its text, and a closing quote token back into ONE quoted token. Used only when rebuilding the code for the progressive display - otherwise re-formatting a space-joined token list folds the join spaces INTO the string, showing \" the world \" instead of \"the world\". Non-string tokens pass through unchanged.";
  let empty = list_empty_is(tokens);
  if (empty) {
    return tokens;
  }
  let quote = '"';
  let first = list_first(tokens);
  let is_quote = equal(first, quote);
  if (is_quote) {
    let content = list_get(tokens, 1);
    let combined = text_combine_multiple([quote, content, quote]);
    let rest = list_skip(tokens, 3);
    let merged_rest = app_code_quiz_string_tokens_merge(rest);
    let joined = list_concat_multiple([[combined], merged_rest]);
    return joined;
  }
  let rest2 = list_skip(tokens, 1);
  let merged_rest2 = app_code_quiz_string_tokens_merge(rest2);
  let joined2 = list_concat_multiple([[first], merged_rest2]);
  return joined2;
}
