import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_forwarding_target } from "./js_function_forwarding_target.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_forwarding_removed_ready } from "./js_function_forwarding_removed_ready.mjs";
import { js_call_argument_site } from "./js_call_argument_site.mjs";
import { js_function_forwarding_removed_callee } from "./js_function_forwarding_removed_callee.mjs";
import { not } from "./not.mjs";
import { js_function_forwarding_removed_sizes } from "./js_function_forwarding_removed_sizes.mjs";
import { js_function_forwarding_removed_agreed_is } from "./js_function_forwarding_removed_agreed_is.mjs";
import { js_function_forwarding_removed_holder } from "./js_function_forwarding_removed_holder.mjs";
import { js_function_forwarding_removed_expression } from "./js_function_forwarding_removed_expression.mjs";
import { object_replace } from "./object_replace.mjs";
export async function js_function_forwarding_removed(ast, node, stack) {
  "Drops this one function when every condition for dropping it holds, and leaves the code exactly as it stands when any one of them does not.";
  "THE CONDITIONS COME IN TWO READINGS AND THE FIRST IS ASKED NEXT DOOR. What can be asked of the function on its own - that it hands back what the one it calls hands back, that it waits if that one waits, that its name is read in exactly one other place - is settled there, and nothing back from it means leave the code alone. What is left here is the second reading: where the name is handed over, and whether that place will take the call in its stead.";
  arguments_assert(arguments, 3);
  let target = js_function_forwarding_target(node);
  if (equal(target, null)) {
    return;
  }
  let id = property_get(node, "id");
  if (equal(id, null)) {
    return;
  }
  let name = await js_function_forwarding_removed_ready(ast, node, target, id);
  if (equal(name, null)) {
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
