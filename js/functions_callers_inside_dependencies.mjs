import { text_split_comma } from "./text_split_comma.mjs";
import { function_dependencies_single } from "./function_dependencies_single.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function functions_callers_inside_dependencies(
  names_comma,
  root_name,
) {
  "Who calls each of these functions, counting only the callers the root function can actually reach. Asking which functions call a low-level helper answers with every caller in every repo, and most of them are irrelevant to the one program being traced, so the honest answer to what pulls this in here is the callers that are also dependencies of the root. Each name keeps its own entry, and a name with an empty list is the useful answer that nothing inside the root reaches it.";
  let names = text_split_comma(names_comma);
  let reachable_names = await function_dependencies_single(root_name);
  async function name_entry(name) {
    let callers = await data_identifiers_search_names(name);
    function caller_inside_is(caller) {
      let itself = equal(caller, name);
      let inside_inner = list_includes(reachable_names, caller);
      let b = inside_inner && not(itself);
      return b;
    }
    let inside = list_filter(callers, caller_inside_is);
    let r = {
      name,
      callers: inside,
    };
    return r;
  }
  let out = await list_map_async(names, name_entry);
  return out;
}
