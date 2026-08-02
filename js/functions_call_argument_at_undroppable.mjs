import { functions_asts_list } from "./functions_asts_list.mjs";
import { js_call_named_argument_at_undroppable } from "./js_call_named_argument_at_undroppable.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function functions_call_argument_at_undroppable(
  f_names,
  f_name,
  index,
) {
  "across all these files, every argument sitting at index in a call to f_name that could not be dropped without dropping a behaviour with it";
  "read only. the whole set is asked before a single file is written, because a parameter comes off the declaration and off every call site together, and a refusal partway through would leave the repo in a state neither half describes";
  let asts = await functions_asts_list(f_names);
  let unsafe = [];
  for (let ast of asts) {
    let found = js_call_named_argument_at_undroppable(ast, f_name, index);
    list_add_multiple(unsafe, found);
  }
  return unsafe;
}
