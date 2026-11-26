import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_shared_photo_blob } from "./app_shared_photo_blob.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_blob_download } from "./html_blob_download.mjs";
import { sleep } from "./sleep.mjs";
export async function app_shared_photos_download(photos, name_start) {
  "$plain photos";
  "$plain name_start";
  "Saves every photo to the phone, one file each, one after another: each is named name_start, then its number when there is more than one, then the ending its own name has, as receipt 2026-11-20 2.jpg.";
  "There is a short pause between files, because a browser handed several downloads at the same moment may keep only the first; some browsers also ask once whether this page may save several files.";
  arguments_assert(arguments, 2);
  let many = greater_than(photos.length, 1);
  let number = 0;
  for (let photo of photos) {
    number = number + 1;
    let blob = await app_shared_photo_blob(photo);
    let extension = property_get(photo, "name").split(".").pop();
    let v = String(number);
    let middle = many ? text_combine_multiple([" ", v]) : "";
    let name = text_combine_multiple([name_start, middle, ".", extension]);
    html_blob_download(blob, name);
    if (many) {
      await sleep(700);
    }
  }
}
