import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_photos_source_index } from "./app_shared_photos_source_index.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function app_shared_photos_source_remove(photos, source) {
  "$plain photos";
  "$plain source";
  "Takes out of a list of photos the one shown from source - the very picture kept on this phone, or the address it is stored at - and leaves the rest in their order. Nothing is taken when none matches.";
  arguments_assert(arguments, 2);
  let index = app_shared_photos_source_index(photos, source);
  if (greater_than_equal(index, 0)) {
    list_remove_at(photos, index);
  }
}
