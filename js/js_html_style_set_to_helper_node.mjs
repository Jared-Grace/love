import { property_equals } from "./property_equals.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_second } from "./list_second.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_get } from "./list_get.mjs";
import { js_html_style_helper_pick_try } from "./js_html_style_helper_pick_try.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_first } from "./list_first.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_html_style_set_to_helper_node(node, helpers) {
  "Rewrite one call that sets a style property by name into the named helper that means the same thing.";
  "Doing nothing is the answer whenever the call does not clearly match. There is no helper for the property, the property is worked out while the program runs rather than written down, the call is shaped oddly - each of those leaves the call exactly as it was, which is always correct, where a guess would not be.";
  let args = js_call_arguments_get(node);
  let three = equal(list_size(args), 3);
  if (!three) {
    return;
  }
  let key = list_second(args);
  let key_is = js_literal_is(key);
  if (!key_is) {
    return;
  }
  let prop = js_literal_value_get(key);
  let value_node = list_get(args, 2);
  let helper = js_html_style_helper_pick_try(helpers, prop, value_node);
  if (!helper) {
    return;
  }
  let name = property_get(helper, "name");
  let code = js_code_call(name);
  let expression = js_parse_expression(code);
  let kept = js_call_arguments_get(expression);
  let target = list_first(args);
  list_add_multiple(kept, [object_copy(target)]);
  let through = property_equals(helper, "kind", "value");
  if (through) {
    list_add_multiple(kept, [object_copy(value_node)]);
  }
  object_replace(node, expression);
}
