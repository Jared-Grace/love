import { list_index_of } from "./list_index_of.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_get } from "./list_get.mjs";
import { js_identifier_named_try } from "./js_identifier_named_try.mjs";
import { each } from "./each.mjs";
export function js_assert_json_get_call_below_try(
  body,
  declaration,
  wrapper_name,
) {
  "the lazy check standing under this wrapper and handing the wrapper over, when there is one";
  let declared_at = list_index_of(body, declaration);
  let found = null;
  function candidate_each(candidate) {
    let taken = equal_not(found, null);
    if (taken) {
      return;
    }
    let expression_is = js_node_type_is(candidate, "ExpressionStatement");
    if (not(expression_is)) {
      return;
    }
    let candidate_at = list_index_of(body, candidate);
    let below = greater_than(candidate_at, declared_at);
    if (not(below)) {
      return;
    }
    let call = property_get(candidate, "expression");
    let call_is = js_node_type_is(call, "CallExpression");
    if (not(call_is)) {
      return;
    }
    let callee = property_get(call, "callee");
    let callee_name = js_identifier_name_try(callee);
    let right = fn_name("assert_json_get");
    let asked = equal(callee_name, right);
    if (not(asked)) {
      return;
    }
    let args = property_get(call, "arguments");
    let two_is = list_size_2(args);
    if (not(two_is)) {
      return;
    }
    let second = list_get(args, 1);
    let handed = js_identifier_named_try(second, wrapper_name);
    if (not(handed)) {
      return;
    }
    found = call;
  }
  each(body, candidate_each);
  return found;
}
