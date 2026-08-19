import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_statements_call_only } from "./js_statements_call_only.mjs";
import { js_call_arguments_named_in_order_is } from "./js_call_arguments_named_in_order_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statement_string_not_is } from "./js_statement_string_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_function_forwarding_target(node) {
  "The name of the function this one hands its arguments to and does nothing else with, or nothing when this function does anything more than that.";
  "A function whose whole body is one call, given every argument it received, in the order it received them, is a second name for the function it calls. Wherever it is passed, the function it calls can be passed instead.";
  "Three shapes count as that one call, because the pass writes the same thing three ways: a return of the call, the call alone, and a name given the call followed by a return of that name.";
  "A function that waits for the answer of that one call counts too, and this reading hands back the name it calls the same way. Whether the two are interchangeable then rests on the function called being one that waits as well, which is a reading of another file and belongs to the caller of this one.";
  "The name called is refused when it is one of the parameters, because a parameter has no meaning outside the function, and refused when it is this function's own name, because the call is then part of the function rather than a hand-off.";
  let params = property_get(node, "params");
  function plain_is(param) {
    let type_is = js_node_type_is(param, "Identifier");
    return type_is;
  }
  let plain_all_is = list_all_is(params, plain_is);
  if (not(plain_all_is)) {
    return null;
  }
  function param_name(param) {
    let name = property_get(param, "name");
    return name;
  }
  let param_names = list_map(params, param_name);
  let body = property_get(node, "body");
  let block_is = js_node_type_is(body, "BlockStatement");
  if (not(block_is)) {
    return null;
  }
  let statements_all = property_get(body, "body");
  let statements = list_filter(statements_all, js_statement_string_not_is);
  let call = js_statements_call_only(statements);
  if (equal(call, null)) {
    return null;
  }
  let target = js_call_callee_name_try(call);
  if (equal(target, null)) {
    return null;
  }
  let param_is = list_includes(param_names, target);
  if (param_is) {
    return null;
  }
  let id = property_get(node, "id");
  if (id) {
    let own = property_get(id, "name");
    if (equal(own, target)) {
      return null;
    }
  }
  let forwards_is = js_call_arguments_named_in_order_is(call, param_names);
  if (not(forwards_is)) {
    return null;
  }
  return target;
}
