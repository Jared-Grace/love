import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { url_blob_browser } from "./url_blob_browser.mjs";
export async function app_shared_photo_blob(photo) {
  "$plain photo";
  "The bytes of one photo: the picture kept on this phone, under file, when there is one, or else brought down from the address it is stored at, under url, which needs the internet.";
  arguments_assert(arguments, 1);
  if (property_exists(photo, "file")) {
    let file = property_get(photo, "file");
    return file;
  }
  let url = property_get(photo, "url");
  let blob = await url_blob_browser(url);
  return blob;
}
