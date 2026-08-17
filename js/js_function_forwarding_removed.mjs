import { js_function_forwarding_removed_callee_is } from "./js_function_forwarding_removed_callee_is.mjs";
import { js_function_answer_dropped_is } from "./js_function_answer_dropped_is.mjs";
import { function_async_is } from "./function_async_is.mjs";
import { js_function_forwarding_target } from "./js_function_forwarding_target.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_name_variable_declared_is } from "./js_name_variable_declared_is.mjs";
import { js_call_argument_site } from "./js_call_argument_site.mjs";
import { not } from "./not.mjs";
import { function_parameter_call_sizes } from "./function_parameter_call_sizes.mjs";
import { list_size } from "./list_size.mjs";
import { list_all_equal_to } from "./list_all_equal_to.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_is } from "./list_is.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
export async function js_function_forwarding_removed(ast, node, stack) {
  "Drops this one function when every condition for dropping it holds, and leaves the code exactly as it stands when any one of them does not.";
  let target = js_function_forwarding_target(node);
  if (equal(target, null)) {
    return;
  }
  let id = property_get(node, "id");
  if (equal(id, null)) {
    return;
  }
  ("this one hands back nothing while the one it calls hands back an answer, so they are not the same function");
  let dropped_is = js_function_answer_dropped_is(node);
  if (dropped_is) {
    return;
  }
  ("this one waits, so it hands back a promise. the one it calls has to wait as well for the two to hand back the same kind of thing");
  let waits_is = property_get(node, "async");
  if (waits_is) {
    let target_waits_is = await function_async_is(target);
    if (not(target_waits_is)) {
      return;
    }
  }
  let name = property_get(id, "name");
  ("its own name where it is declared, and one other place. anything more is a use this does not look at");
  let mentions = js_identifiers_named_count(ast, name);
  if (equal_not(mentions, 2)) {
    return;
  }
  ("a name given to a variable holds nothing until its line has run, and the place this would be handed over may sit above that line");
  let variable_is = js_name_variable_declared_is(ast, target);
  if (variable_is) {
    return;
  }
  let site = js_call_argument_site(ast, name);
  if (equal(site, null)) {
    return;
  }
  let { callee, callee_is } = js_function_forwarding_removed_callee_is(site);
  if (not(callee_is)) {
    return;
  }
  let receiver = property_get(callee, "name");
  let index = property_get(site, "index");
  let sizes = await function_parameter_call_sizes(receiver, index);
  if (equal(sizes, null)) {
    return;
  }
  let params = property_get(node, "params");
  let wanted = list_size(params);
  let agreed_is = list_all_equal_to(sizes, wanted);
  if (not(agreed_is)) {
    return;
  }
  let holder = list_get_end_1(stack);
  let holder_is = list_is(holder);
  if (not(holder_is)) {
    return;
  }
  list_remove(holder, node);
  let argument = property_get(site, "argument");
  let expression = js_parse_expression(target);
  object_replace(argument, expression);
}
