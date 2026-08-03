import { fn_name } from "./fn_name.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { number_is } from "./number_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_text_combine_number_add(ast) {
  "Changes every joining of text whose right-hand side is a plain number into an addition, which is what such a call has always done.";
  "The two functions hold the very same line, so this cannot alter what the file does - only what it says it is doing. That is the whole point: a step counted onward by one is arithmetic, and calling it a joining of text sends every later reader looking for a word that is not there.";
  "Only a number written out on the spot counts. Where the right-hand side is worked out somewhere else this stays away, because then the two names really are a claim about what will be standing there and only somebody reading the file can settle it.";
  let joiner = fn_name("text_combine");
  let name_after = fn_name("add");
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
    property_set(callee, "name", name_after);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
