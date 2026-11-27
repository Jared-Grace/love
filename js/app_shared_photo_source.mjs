import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_photo_source(photo) {
  "$plain photo";
  "What a photo is shown from: the picture kept on this phone when it holds one, under file, and otherwise the address it is stored at, under url.";
  arguments_assert(arguments, 1);
  if (property_exists(photo, "file")) {
    let value = property_get(photo, "file");
    return value;
  }
  let value2 = property_get(photo, "url");
  return value2;
}
