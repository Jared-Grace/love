import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function app_shared_photos_source_remove(photos, source) {
  "$plain photos";
  "$plain source";
  "Takes out of a list of photos the one shown from source - the very picture kept on this phone, or the address it is stored at - and leaves the rest in their order. Nothing is taken when none matches.";
  arguments_assert(arguments, 2);
  let index = 0;
  while (less_than(index, photos.length)) {
    let photo = property_get(photos, index);
    let file = property_get_or(photo, "file", null);
    let url = property_get_or(photo, "url", null);
    if (equal(file, source) || equal(url, source)) {
      list_remove_at(photos, index);
      return;
    }
    index = index + 1;
  }
}
