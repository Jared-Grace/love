import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_get_try } from "./list_get_try.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
export function js_calls_property_key_literal(ast, literal) {
  "$plain literal";
  arguments_assert(arguments, 2);
  ("Every call in this file to a property_ helper whose key is one written-out word, and that word is the one being asked about.");
  ("A rename that moves a word wherever it is written as a value has to stop where the word is a key instead: the object it is read from keeps the old key, so moving only the read hands back nothing.");
  let found = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let name = js_call_callee_name_try(node);
    if (null_is(name)) {
      return;
    }
    let helper = text_starts_with(name, "property_");
    if (not(helper)) {
      return;
    }
    let args = js_call_arguments_get(node);
    let a = list_size(args);
    if (less_than(a, 2)) {
      return;
    }
    let key = list_get_try(args, 1);
    let words_is = js_literal_text_is(key);
    if (not(words_is)) {
      return;
    }
    let value = js_literal_value_get(key);
    if (equal(value, literal)) {
      list_add(found, node);
    }
  }
  js_visit_calls(ast, lambda);
  return found;
}
