import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_loading_message_set } from "./html_loading_message_set.mjs";
import { property_get } from "./property_get.mjs";
import { photo_organizer_photo_upload } from "./photo_organizer_photo_upload.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function photo_organizer_photos_upload(photos) {
  "$plain photos";
  "Sends every photo listed up to storage, each under its own name, four at a time, saying on the loading cover how many have gone of how many (human, 2026-11-27: putting a phone's photos online sat on \"one moment please\" for a long time).";
  "Four at a time rather than one: a photo's send is mostly waiting on storage, so overlapping a few cuts the waiting; and not all at once, since a phone's upload is narrow and every photo held in flight at once is memory the phone has to find.";
  arguments_assert(arguments, 1);
  let total = String(photos.length);
  let done = 0;
  function show() {
    let v = String(done);
    let text = text_combine_multiple(["📤 Sending photo ", v, " of ", total]);
    html_loading_message_set(text);
  }
  show();
  async function send(photo) {
    let name = property_get(photo, "name");
    let file = property_get(photo, "file");
    await photo_organizer_photo_upload(name, file);
    done = done + 1;
    show();
  }
  await list_map_limited_async(photos, send, 4);
}
