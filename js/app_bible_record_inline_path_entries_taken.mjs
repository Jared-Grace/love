import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_bible_record_inline_path_entries_taken(entries) {
  arguments_assert(arguments, 1);
  function lambda(e) {
    let value = property_get(e, "blob");
    let nn = null_not_is(value);
    return nn;
  }
  let taken = list_filter(entries, lambda);
  return taken;
}
