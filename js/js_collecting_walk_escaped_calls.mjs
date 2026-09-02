import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_loops_all } from "./js_node_loops_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_loop_collecting_is } from "./js_loop_collecting_is.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_loop_escaped_call_names } from "./js_loop_escaped_call_names.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_collecting_walk_escaped_calls(ast) {
  "$plain ast";
  "Every call this file waits on uncaught inside a loop that is gathering something up, named once each. Read-only, pure.";
  "The two halves matter together and neither alone. A loop that gathers has said it will reach the end of what it is walking; a call waited on uncaught inside it ends the walk at the first item that refuses. So the file goes on saying it looked at everything while having looked at one thing, and what comes out is the refusing call's own complaint rather than the walk's.";
  "Where this costs the most is a gate. A gate that dies inside a callee never writes down who it is about, and a gate naming nobody cannot be shown to be about somewhere else, so it holds every app in the repo out of a deployment - one chapter with no address written for it did exactly that to two gates at once on the first of September 2026.";
  arguments_assert(arguments, 1);
  let loops = js_node_loops_all(ast);
  let gathering = list_filter(loops, js_loop_collecting_is);
  let escaping = list_map_concat_multiple(
    gathering,
    js_loop_escaped_call_names,
  );
  let once_each = list_unique(escaping);
  return once_each;
}
