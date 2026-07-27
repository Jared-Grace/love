import { js_tokenizer } from "./js_tokenizer.mjs";
import { js_tokenizer_label_property_path } from "./js_tokenizer_label_property_path.mjs";
import { property_path_get } from "./property_path_get.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { equal } from "./equal.mjs";
import { text_to } from "./text_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_quiz_tokens(code) {
  "tokenize code for the unscramble quiz. Like the normalized tokenizer, EXCEPT a string literal becomes THREE tokens - an opening quote, its text, and a closing quote - so the learner has to place the quotes themselves. The plain JS tokenizer lumps a whole string into one token and drops its quotes, which would make a string unscramble trivial and never teach quote placement.";
  let quote = '"';
  let string_label = "string";
  let type_label = js_tokenizer_label_property_path();
  let tokens = js_tokenizer(code);
  function expand(token) {
    "a string literal -> quote, its text, quote; anything else -> the single normalized token (its value, or its type label when it has no value, e.g. punctuation)";
    let label = property_path_get(token, type_label);
    let value = property_get(token, "value");
    let is_string = equal(label, string_label);
    if (is_string) {
      let three = [quote, value, quote];
      return three;
    }
    let u = undefined_is(value);
    if (u) {
      value = label;
    }
    let t = text_to(value);
    let one = [t];
    return one;
  }
  let expanded = list_map(tokens, expand);
  let flat = list_concat_multiple(expanded);
  return flat;
}
