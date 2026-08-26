import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_named_find_alias } from "./js_call_named_find_alias.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { js_types_loop_all_node } from "./js_types_loop_all_node.mjs";
import { js_stack_last_multiple } from "./js_stack_last_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { error_json } from "./error_json.mjs";
export async function js_loop_find_call_named(ast, f_name) {
  arguments_assert(arguments, 2);
  ("The loop that holds the one place a name is called - how a selector says where a whole walk stands, rather than where a single line does.");
  ("Its neighbour over statements answers with the innermost line holding the call, which is the right answer when the edit is about that line. It is the wrong answer whenever the walk itself is the thing being replaced: collapsing a serial loop onto one grouped call means the loop goes and the call comes, and a selector that can only name the line inside it can express the second half but never the first. Measured 2026-08-26, that gap alone was what stopped a gate's serial loop being swapped for its finished grouped replacement.");
  ("Innermost rather than outermost, because nested loops are why the question is asked at all - the walk a call sits directly inside is the one whose every turn pays for the call, and so the one worth collapsing. A caller wanting the outer walk can ask again from the loop this hands back.");
  ("A call standing in no loop is a complaint rather than nothing, and it names the function looked for. A selector handing back nothing would be read by whatever asked as a place, and the edit would land wherever nothing lands - so the failure has to be loud here, where the name that was searched for is still known, instead of further down where it is not.");
  let only = await js_call_named_find_alias(ast, f_name);
  let stack = js_node_to_visitor_stack(ast, only);
  let types = js_types_loop_all_node();
  let loop = js_stack_last_multiple(stack, types);
  let outside = null_is(loop);
  if (outside) {
    error_json({
      hint: "this name is called, but no loop encloses the call - would you like the statement selector instead, which names the line the call stands on?",
      f_name: js_loop_find_call_named.name,
      name: f_name,
    });
  }
  return loop;
}
