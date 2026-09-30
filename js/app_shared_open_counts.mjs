import { app_shared_open_entries } from "./app_shared_open_entries.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { property_count_add } from "./property_count_add.mjs";
export async function app_shared_open_counts() {
  "how many devices opened each app on each day, read off the empty files the apps send";
  "A count of devices, not of people: a cleared browser, a private window or a second browser each arrive as a device of their own, so read it as whether an app is used rather than as how many people use it.";
  "Listed through the signed-in handle, because nothing under this folder is readable to the public.";
  let entries = await app_shared_open_entries();
  let counts = {};
  for (let entry of entries) {
    let date = property_get(entry, "date");
    let app = property_get(entry, "app");
    let apps = property_initialize(counts, date, {});
    property_count_add(apps, app, 1);
  }
  return counts;
}
