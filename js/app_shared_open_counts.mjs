import { firebase_bucket } from "./firebase_bucket.mjs";
import { app_shared_open_prefix } from "./app_shared_open_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { property_count_add } from "./property_count_add.mjs";
export async function app_shared_open_counts() {
  "how many devices opened each app on each day, read off the empty files the apps send";
  "A count of devices, not of people: a cleared browser, a private window or a second browser each arrive as a device of their own, so read it as whether an app is used rather than as how many people use it.";
  "Listed through the signed-in handle, because nothing under this folder is readable to the public.";
  let bucket = await firebase_bucket();
  let prefix = app_shared_open_prefix();
  let [files] = await bucket.getFiles({
    prefix,
  });
  let counts = {};
  for (let item of files) {
    let name = property_get(item, "name");
    let rest = text_prefix_without(name, prefix);
    let [year, month, day, app] = text_split_slash_forward(rest);
    let date = text_combine_multiple([year, "-", month, "-", day]);
    let apps = property_initialize(counts, date, {});
    property_count_add(apps, app, 1);
  }
  return counts;
}
