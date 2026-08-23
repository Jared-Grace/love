import { js_function_forwarding_removed_expression } from "./js_function_forwarding_removed_expression.mjs";
import { js_function_forwarding_removed_holder } from "./js_function_forwarding_removed_holder.mjs";
import { js_function_forwarding_removed_name } from "./js_function_forwarding_removed_name.mjs";
import { js_function_forwarding_removed_agreed_is } from "./js_function_forwarding_removed_agreed_is.mjs";
import { js_function_forwarding_removed_sizes } from "./js_function_forwarding_removed_sizes.mjs";
import { js_function_forwarding_removed_callee } from "./js_function_forwarding_removed_callee.mjs";
import { js_function_answer_dropped_is } from "./js_function_answer_dropped_is.mjs";
import { function_async_is } from "./function_async_is.mjs";
import { js_function_forwarding_target } from "./js_function_forwarding_target.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_name_variable_declared_is } from "./js_name_variable_declared_is.mjs";
import { js_call_argument_site } from "./js_call_argument_site.mjs";
import { not } from "./not.mjs";
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
  let r2 = js_function_forwarding_removed_name(id, ast);
  let name = property_get(r2, "name");
  let mentions = property_get(r2, "mentions");
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
  let r = js_function_forwarding_removed_callee(site);
  let callee = property_get(r, "callee");
  let callee_is = property_get(r, "callee_is");
  if (not(callee_is)) {
    return;
  }
  let sizes = await js_function_forwarding_removed_sizes(callee, site);
  if (equal(sizes, null)) {
    return;
  }
  let agreed_is = js_function_forwarding_removed_agreed_is(node, sizes);
  if (not(agreed_is)) {
    return;
  }
  let r3 = js_function_forwarding_removed_holder(stack);
  let holder = property_get(r3, "holder");
  let holder_is = property_get(r3, "holder_is");
  if (not(holder_is)) {
    return;
  }
  let r4 = js_function_forwarding_removed_expression(
    holder,
    node,
    site,
    target,
  );
  let expression = property_get(r4, "expression");
  let argument = property_get(r4, "argument");
  object_replace(argument, expression);
}
