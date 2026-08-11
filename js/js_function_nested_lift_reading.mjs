import { js_global_names } from "./js_global_names.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_module_names_reachable } from "./js_module_names_reachable.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_list_calls_named_nodes } from "./js_list_calls_named_nodes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_declaration_names_unbound } from "./js_declaration_names_unbound.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
export async function js_function_nested_lift_reading(ast, declaration) {
  arguments_assert(arguments, 2);
  ("Everything the lift needs to know about one function written inside another: what it is called, where it is called, what it would have to be handed, and which of those it writes to.");
  ("One reading, asked by two askers. The lift asks it to decide whether to move the function or refuse; the candidate report asks the same question of every closure in the repo without moving anything. Two copies of this would drift, and the drift would show up as a report promising a lift that then refuses - the worst kind of list, because acting on it costs a whole command to learn it was wrong.");
  ("Nothing here judges. It hands back four plain readings and lets the caller say what each one means, which is what keeps the lift's two refusals able to say their own different things.");
  let name_old = js_function_declaration_name(declaration);
  let calls = js_list_calls_named_nodes(ast, name_old);
  let callees = list_map_property(calls, "callee");
  let id = property_get(declaration, "id");
  list_add(callees, id);
  ("A mention that is neither a call nor the function's own name is the function being handed on as a value. The places are given as how far into the file they are written: a refusal that printed the nodes would print a tree thousands of lines deep, and the one thing the reader needs would be somewhere inside it.");
  let mentions = js_identifiers_named(ast, name_old);
  let stray = list_difference(mentions, callees);
  let stray_at = list_map_property(stray, "start");
  let unbound = js_declaration_names_unbound(declaration);
  list_remove(unbound, name_old);
  let reachable = await js_module_names_reachable(ast);
  ("What the language and the page supply is already there wherever the function is moved to, so it is not something the function has to be handed. Left in, every throw in a moved function grew the parameter list by the two names it threw with, and the caller then passed the language its own words back.");
  let globals = js_global_names();
  let supplied = list_concat(reachable, globals);
  let closed = list_difference(unbound, supplied);
  let written = js_assigned_names(declaration);
  let written_closed = list_intersection(closed, written);
  let reading = {
    name_old,
    calls,
    stray_at,
    closed,
    written_closed,
  };
  return reading;
}
