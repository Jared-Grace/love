import { firebase_bucket } from "./firebase_bucket.mjs";
import { app_shared_open_prefix } from "./app_shared_open_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_open_entries() {
  "every open the apps have sent, one entry per device per app per day: its date as 'YYYY-MM-DD', the app, the device, and the whole name the file is kept under";
  "Read off the address of each empty file, because the address is all the file holds. Listed through the signed-in handle, because nothing under this folder is readable to the public.";
  let bucket = await firebase_bucket();
  let prefix = app_shared_open_prefix();
  let [files] = await bucket.getFiles({
    prefix,
  });
  let entries = [];
  for (let item of files) {
    let name = property_get(item, "name");
    let rest = text_prefix_without(name, prefix);
    let [year, month, day, app, user_id] = text_split_slash_forward(rest);
    let date = text_combine_multiple([year, "-", month, "-", day]);
    list_add(entries, {
      date,
      app,
      user_id,
      name,
    });
  }
  return entries;
}
