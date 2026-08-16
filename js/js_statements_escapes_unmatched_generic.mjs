import { property_or_null } from "./property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
import { js_types_loop_all_node } from "./js_types_loop_all_node.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { list_any } from "./list_any.mjs";
import { list_add } from "./list_add.mjs";
export function js_statements_escapes_unmatched_generic(
  statements,
  types_asked,
) {
  arguments_assert(arguments, 2);
  ("Every place inside these lines that leaves by one of the kinds of jump asked about, and lands somewhere outside them. Reported as how far into the file each one is written.");
  ("Which kinds of jump to look for is the caller's to say, because whether a jump is a reason to refuse depends on where the run is going. A run being lifted into the middle of another body cannot carry any of the three; a run that closes a function and is pulled out with its own returning intact carries the returns fine, and only the two loop jumps are left to refuse.");
  ("A jump that lands inside the run is fine and is not reported. A return written in a function inside the run belongs to that function; a break or a continue written inside a loop in the run belongs to that loop. Only the ones reaching past everything in the run are named here.");
  ("A labelled jump counts as landing outside whatever it stands in. Its label names where it goes and reading that would be the exact answer, but the run of lines a label spans is rare enough here that refusing them all costs nothing, and refusing is the safe way to be wrong.");
  let types_function = js_types_function_node();
  let types_loop_all = js_types_loop_all_node();
  let types_switch = ["SwitchStatement"];
  let types_landing = list_concat_multiple([
    types_function,
    types_loop_all,
    types_switch,
  ]);
  let offsets = [];
  function lambda2(statement) {
    function lambda(v) {
      let node = property_get(v, "node");
      let label = property_or_null(node, "label");
      let labelled = null_not_is(label);
      let type = js_node_type(node);
      let returning = equal(type, "ReturnStatement");
      let types_barrier = returning ? types_function : types_landing;
      let stack = property_get(v, "stack");
      function barrier_is(held) {
        "The chain a node hangs from holds the lists a node sits in as well as the nodes themselves, and a list has no kind, so it is asked about first.";
        let node_is = js_node_is(held);
        if (not(node_is)) {
          return false;
        }
        let is = js_node_types_is(held, types_barrier);
        return is;
      }
      let held_is = list_any(stack, barrier_is);
      let matched = held_is && not(labelled);
      if (not(matched)) {
        let start = property_get(node, "start");
        list_add(offsets, start);
      }
    }
    js_visit_types(statement, types_asked, lambda);
  }
  for (let statement of statements) {
    lambda2(statement);
  }
  return offsets;
}
