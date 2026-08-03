import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_remove } from "./list_remove.mjs";
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
  ("Everything this needs to know about the function it is moving is read once, next door, and the report that lists what could be lifted asks that same reading. Two copies would drift, and the drift would show as a report promising a lift that then refuses.");
  let reading = await js_function_nested_lift_reading(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let calls = property_get(reading, "calls");
  let closed = property_get(reading, "closed");
  let stray_at = property_get(reading, "stray_at");
  let id = property_get(declaration, "id");
  list_empty_is_assert_json(stray_at, {
    hint: "this function is handed on as a value somewhere rather than called, so there is no call to hand its closed-over names to. Nothing is lost - the span cut that takes a line where it is actually written reaches inside a closure like this one, so a run of lines within it can still come out. Would you like to cut a run out of it that way, or give the value's receiver those names another way first?",
    name_old,
  });
  let written_closed = property_get(reading, "written_closed");
  list_empty_is_assert_json(written_closed, {
    hint: "this function writes to a name it closed over, and a parameter would only be a copy of it, so the write would stop reaching the line waiting to read it. Would you like it to hand the new value back instead?",
    name_old,
  });
  let stack = js_node_to_visitor_stack(ast, declaration);
  let container = list_previous(stack, declaration);
  property_set(id, "name", f_name_new);
  let params = property_get(declaration, "params");
  let items = list_map(closed, js_parse_expression);
  list_add_multiple(params, items);
  ("The count is written once the parameters are settled, because it has to say how many the function takes after everything it closed over has become one.");
  js_function_arguments_assert_add(declaration);
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
