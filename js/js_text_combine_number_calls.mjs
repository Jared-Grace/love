import { fn_name } from "./fn_name.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { number_is } from "./number_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_text_combine_number_calls(ast) {
  "Every place this file joins text to a plain number written out on the spot, handed back as the calls themselves.";
  "This is the one judgment, and both the audit that counts these and the change that corrects them ask it here, so neither can go looking for a different set than the other reports.";
  "The calls come back whole rather than as their names, because the change has to reach inside one and the audit has to write one out, and only the call itself answers both.";
  let joiner = fn_name("text_combine");
  let found = [];
  function lambda(visited) {
    let node = property_get(visited, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let joining = equal(called, joiner);
    if (not(joining)) {
      return;
    }
    let args = property_get(node, "arguments");
    let right = list_get_or_null(args, 1);
    let value = js_literal_value_try(right);
    let counted = number_is(value);
    if (not(counted)) {
      return;
    }
    list_add(found, node);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return found;
}
