import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_declarations_single_rows } from "./js_declarations_single_rows.mjs";
import { js_record_name_entries_try } from "./js_record_name_entries_try.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_record_returned_keys(ast) {
  arguments_assert(arguments, 1);
  ("The names of the biggest record this file gathers out of plain names, in the order they are written, and nothing when it gathers none.");
  ("What it is for is comparing one record against another: a record handed over whole carries its names in the order its maker wrote them, so the order is half of what says whether handing it over whole is the same thing as writing it out again.");
  ("The biggest is taken rather than the one that is answered, because a function that gathers several is gathering the small ones into the big one and the big one is the one that leaves. Where that is not so the answer is wrong, which is why nothing acts on this on its own.");
  let rows = js_declarations_single_rows(ast);
  let keys = null;
  for (let row of rows) {
    let init = property_get(row, "init");
    let entries = js_record_name_entries_try(init);
    if (null_is(entries)) {
      continue;
    }
    let names = list_map_property(entries, "name");
    let held = list_size(names);
    if (null_is(keys)) {
      keys = names;
      continue;
    }
    let so_far = list_size(keys);
    let bigger_is = greater_than(held, so_far);
    if (bigger_is) {
      keys = names;
    }
  }
  return keys;
}
