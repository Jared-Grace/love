import { not } from "./not.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { list_second } from "./list_second.mjs";
import { equal } from "./equal.mjs";
export function js_html_style_helper_kind_try(value_node, params) {
  "Which of the two shapes a style helper has, read off the value it passes on.";
  "A helper either fixes the value itself, taking only the component - hiding a thing is always hiding it - or it passes a value straight through, taking both. The two rewrite differently, so telling them apart is the whole job here, and anything that is neither shape is not a helper this can use.";
  let single = list_size_1(params);
  if (single) {
    let literal_is = js_literal_is(value_node);
    if (not(literal_is)) {
      return null;
    }
    let value = js_literal_value_get(value_node);
    let fixed = {
      kind: "fixed",
      value,
    };
    return fixed;
  }
  let pair = list_size_2(params);
  if (not(pair)) {
    return null;
  }
  let identifier_is = js_identifier_is(value_node);
  if (not(identifier_is)) {
    return null;
  }
  let passed = js_identifier_name(value_node);
  let second = list_second(params);
  let same = equal(passed, second);
  if (not(same)) {
    return null;
  }
  let through = {
    kind: "value",
    value: null,
  };
  return through;
}
