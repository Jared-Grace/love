import { arguments_assert } from "./arguments_assert.mjs";
import { js_rewrite_targets_literal_or_null } from "./js_rewrite_targets_literal_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { js_find_declaration_named_or_null } from "./js_find_declaration_named_or_null.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_call_callee_name_equal } from "./js_call_callee_name_equal.mjs";
import { js_call_first_argument_try } from "./js_call_first_argument_try.mjs";
export function js_rewrite_targets_spelled_or_null(node, ast, marker_fn_name) {
  arguments_assert(arguments, 3);
  let plain = js_rewrite_targets_literal_or_null(node);
  let plain_is = null_not_is(plain);
  if (plain_is) {
    return plain;
  }
  let there = null_not_is(node);
  if (not(there)) {
    return null;
  }
  let identifier_is = property_equals(node, "type", "Identifier");
  if (not(identifier_is)) {
    return null;
  }
  let local = property_get(node, "name");
  let declaration = js_find_declaration_named_or_null(ast, local);
  let declared = null_not_is(declaration);
  if (not(declared)) {
    return null;
  }
  let value_node = js_node_value_get(declaration);
  let marked = js_call_callee_name_equal(value_node, marker_fn_name);
  if (not(marked)) {
    return null;
  }
  let first = js_call_first_argument_try(value_node);
  let spelled = js_rewrite_targets_literal_or_null(first);
  return spelled;
}
