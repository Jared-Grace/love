import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export function app_shared_bible_built_destination(app_fn, bible_folder) {
  "$plain bible_folder";
  "Where in storage an app's own built copy of the scripture it needs is kept - one file per app per bible.";
  "It is named after the app rather than after what is in it, because what is in it is whatever that app decided it needed and no other app can use it. Two apps naming the same passages still get a file each, which costs a few kilobytes and saves the far worse thing: one app quietly growing the file a second app is reading.";
  arguments_assert(arguments, 2);
  let without = app_shared_name_prefix_without_fn(app_fn);
  let destination = ebible_firebase_upload_path(bible_folder, without);
  return destination;
}
