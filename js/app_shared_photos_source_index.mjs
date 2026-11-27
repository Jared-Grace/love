import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
export function app_shared_photos_source_index(photos, source) {
  "$plain photos";
  "$plain source";
  "Where in a list of photos the one shown from source sits - the very picture kept on this phone, or the address it is stored at - or -1 when none is.";
  arguments_assert(arguments, 2);
  let index = 0;
  while (less_than(index, photos.length)) {
    let photo = property_get(photos, index);
    let file = property_get_or(photo, "file", null);
    let url = property_get_or(photo, "url", null);
    if (equal(file, source) || equal(url, source)) {
      return index;
    }
    index = index + 1;
  }
  let r = -1;
  return r;
}
