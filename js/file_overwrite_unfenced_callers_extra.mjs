import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { list_difference } from "./list_difference.mjs";
export async function file_overwrite_unfenced_callers_extra() {
  "Every function using the writer that refuses no path, other than the two it was built for. One refuses those paths first and the other is the named way past the refusal.";
  "It asks who uses the name in code, not who spells it in a string, so listing the name in text is not counted as a caller.";
  arguments_assert(arguments, 0);
  let name = fn_name("file_overwrite_unfenced");
  let allowed = [
    name,
    fn_name("file_overwrite_uncached_node"),
    fn_name("file_overwrite_deciding"),
  ];
  let found = await data_identifiers_search_names(name);
  let extra = list_difference(found, allowed);
  return extra;
}
