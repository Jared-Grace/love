import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { property_get } from "./property_get.mjs";
import { html_src_set } from "./html_src_set.mjs";
export function app_shared_photo_picture_set(picture, photo) {
  "$plain picture";
  "$plain photo";
  "Shows a photo in a picture: from the picture kept on this phone when the photo holds one, under file, and otherwise from the address it is stored at, under url, which needs the internet the first time.";
  arguments_assert(arguments, 2);
  if (property_exists(photo, "file")) {
    let file = property_get(photo, "file");
    html_media_source_file_set(picture, file);
  } else {
    let src = property_get(photo, "url");
    html_src_set(picture, src);
  }
}
