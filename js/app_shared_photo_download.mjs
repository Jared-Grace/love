import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_photo_blob } from "./app_shared_photo_blob.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_blob_download } from "./html_blob_download.mjs";
export async function app_shared_photo_download(photo, name_start) {
  "$plain photo";
  "$plain name_start";
  "Saves one photo to the phone as a file named name_start followed by the ending the photo's own name has, as receipt 2026-11-20 2.jpg.";
  arguments_assert(arguments, 2);
  let blob = await app_shared_photo_blob(photo);
  let extension = property_get(photo, "name").split(".").pop();
  let name = text_combine_multiple([name_start, ".", extension]);
  html_blob_download(blob, name);
}
