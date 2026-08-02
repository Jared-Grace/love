import { processes_dispatcher_lines } from "./processes_dispatcher_lines.mjs";
import { process_line_node_is } from "./process_line_node_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
export async function processes_dispatcher_running() {
  "Every running process that was started by asking this repo to run a function, with the line it was started from.";
  "The line it was started from is what says so, not the folder it is working in. A process outliving the folder it was copied into is working nowhere at all, and that is exactly the one worth finding - so a search that went by folder would miss the case it was written for.";
  "Naming one of those scripts is not the same as running it, and a wrapper around one is not what anybody is looking for here. What is asked instead is what the process itself is, which its neighbour answers - and its other neighbour takes exactly the half this one leaves.";
  let named = await processes_dispatcher_lines();
  function running_is(process) {
    let line = property_get(process, "line");
    let node_is = process_line_node_is(line);
    return node_is;
  }
  let found = list_filter(named, running_is);
  return found;
}
