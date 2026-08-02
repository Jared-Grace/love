import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
export function marker_next_node(a) {
  arguments_assert(arguments, 1);
  ("The node standing after the marker, on its own.");
  (fn_name("marker_next_get"),
    " hands back the node together with the stack and the index it was");
  ("found at, because moving a marker needs all three. Most callers only ever want the");
  ("node, and the record around it is a step they take and then drop.");
  let v = marker_next_get(a);
  let next = property_get(v, "next");
  return next;
}
