import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { g_verses_pool_destination } from "./g_verses_pool_destination.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function g_verses_pool_upload(name, references) {
  "resolve a named verse pool's references to full verses (server-side ebible) and upload them as ONE compressed file (supper-style batch), so the browser later downloads the whole pool in a single request instead of one request per verse. run once per pool when its references change (waiting-on-the-Lord, HS-warning, ...); unresolvable references are dropped by the null-filter";
  let folder = ebible_folder_english();
  let folders = [folder];
  let resolved = await ebible_references_parse_lines(folders, references);
  let verses = list_filter_null_not_is(resolved);
  let destination = g_verses_pool_destination(name);
  await firebase_upload_object_compressed(destination, {
    verses,
  });
}
