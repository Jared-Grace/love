import { js_module_binding_names } from "./js_module_binding_names.mjs";
import { list_concat } from "./list_concat.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_list_calls_named_nodes } from "./js_list_calls_named_nodes.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { js_declaration_names_unbound } from "./js_declaration_names_unbound.mjs";
import { list_remove } from "./list_remove.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { list_intersect_empty_is_assert_json } from "./list_intersect_empty_is_assert_json.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { list_previous } from "./list_previous.mjs";
import { property_set } from "./property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_call_arguments_add } from "./js_call_arguments_add.mjs";
import { each } from "./each.mjs";
export async function js_selects_function_lift(ast, selects, f_name_new) {
  arguments_assert(arguments, 3);
  ("Move a function written inside another one out to stand on its own, under a name you give it. Everything it reached out of itself for becomes a parameter, and every place it was called is handed those same things.");
  ("This is the second half of paying down the size record, and the half a span cannot do. A span reaches the lines at the top of a body; most of a long function's size is folded inside a closure written beside the lines that use it, and to a span that closure is one statement, so extracting it only wraps it up again.");
  ("It refuses a name handed on as a value rather than called. A value carries nowhere to put the extra arguments, so the function would arrive at its new home missing exactly what it used to reach for - a file that parses, imports cleanly, and throws the first time it runs. What to do there is a real decision, and guessing it is worse than saying so.");
  ("It refuses just as firmly when the function writes to something it closed over. A parameter is a copy of what was passed, so the write would land on the copy and the line that was waiting to read it would go on reading the old value. Nothing about the file would look wrong.");
  let declaration = list_single(selects);
  let name_old = js_function_declaration_name(declaration);
  let calls = js_list_calls_named_nodes(ast, name_old);
  let callees = list_map_property(calls, "callee");
  let id = property_get(declaration, "id");
  list_add(callees, id);
  let mentions = js_identifiers_named(ast, name_old);
  let stray = list_difference(mentions, callees);
  ("The places are reported as how far into the file they are written rather than as the nodes themselves. A refusal that printed the nodes would print a tree thousands of lines deep, and the one thing the reader needs - where to look - would be somewhere inside it.");
  let stray_at = list_map_property(stray, "start");
  list_empty_is_assert_json(stray_at, {
    hint: "this function is handed on as a value somewhere rather than called, so there is no call to hand its closed-over names to. Nothing is lost - the span cut that takes a line where it is actually written reaches inside a closure like this one, so a run of lines within it can still come out. Would you like to cut a run out of it that way, or give the value's receiver those names another way first?",
    name_old,
  });
  let unbound = js_declaration_names_unbound(declaration);
  list_remove(unbound, name_old);
  let other = await functions_names();
  ("What the file itself binds at its outermost level is subtracted alongside the repo's own names, and for the same reason: the function is about to land at that level, so those are names it can still reach. Without this, lifting a second helper out of a file that already had one lifted hands it the first as an argument - which runs, and reads as though the two were unrelated.");
  let here = js_module_binding_names(ast);
  let reachable = list_concat(other, here);
  let closed = list_difference(unbound, reachable);
  let written = js_assigned_names(declaration);
  list_intersect_empty_is_assert_json(closed, written, {
    hint: "this function writes to a name it closed over, and a parameter would only be a copy of it, so the write would stop reaching the line waiting to read it. Would you like it to hand the new value back instead?",
    name_old,
  });
  let stack = js_node_to_visitor_stack(ast, declaration);
  let container = list_previous(stack, declaration);
  property_set(id, "name", f_name_new);
  let params = property_get(declaration, "params");
  let items = list_map(closed, js_parse_expression);
  list_add_multiple(params, items);
  function lambda(call) {
    let callee = property_get(call, "callee");
    property_set(callee, "name", f_name_new);
    let added = list_map(closed, js_parse_expression);
    js_call_arguments_add(call, added);
  }
  each(calls, lambda);
  list_remove(container, declaration);
  let body = property_get(ast, "body");
  list_add(body, declaration);
}
