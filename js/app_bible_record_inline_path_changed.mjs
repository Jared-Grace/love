import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
export function app_bible_record_inline_path_changed(entry, blob, refreshes) {
  arguments_assert(arguments, 3);
  property_set(entry, "blob", blob);
  for (let each_refresh of refreshes) {
    each_refresh();
  }
}
