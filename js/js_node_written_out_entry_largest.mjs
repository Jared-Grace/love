import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_written_out_entries } from "./js_node_written_out_entries.mjs";
import { js_node_statements_work_size } from "./js_node_statements_work_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function js_node_written_out_entry_largest(node) {
  arguments_assert(arguments, 1);
  ("How much work sits in the heaviest single entry of something written out in full - nothing at all when every entry is only a value.");
  ("This is what stops a table being an excuse for anything. A body made of forty small cases costs a reader one case; the same body with one case forty lines long costs the whole forty, and only this number tells the two apart.");
  ("A gap left in a list is passed over rather than counted, because a list may be written with a place in it left empty and there is nothing there to read.");
  let entries = js_node_written_out_entries(node);
  let there = list_filter(entries, null_not_is);
  let sizes = list_map(there, js_node_statements_work_size);
  let largest = list_max_or_null(sizes);
  let none_is = null_is(largest);
  if (none_is) {
    let r = 0;
    return r;
  }
  return largest;
}
