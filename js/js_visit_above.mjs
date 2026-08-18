import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_get_end_1 } from "./property_list_get_end_1.mjs";
export function js_visit_above(v) {
  arguments_assert(arguments, 1);
  ("The entry the visited node sits directly inside.");
  ("A walk keeps a stack whose last entry is the node being looked at, so what encloses it is one step back from the end. Twelve files wrote that step out by hand, and each of them gave the answer a different name - e, body, parent, list, statement - so the same reading read as five different things.");
  ("This hands back whatever is directly above, which may be a node or may be the list a node keeps its children in. Ask ",
    fn_name("js_stack_node_above"),
    " instead for the nearest real node, which walks past those lists.");
  let above = property_list_get_end_1(v, "stack");
  return above;
}
