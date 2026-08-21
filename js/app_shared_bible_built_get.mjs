import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { app_shared_bible_built_destination } from "./app_shared_bible_built_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { not } from "./not.mjs";
export async function app_shared_bible_built_get(app_fn, bible_folder, build) {
  "$plain bible_folder";
  "Whatever scripture an app worked out that it needs, in one piece: the copy built ahead of time and kept in storage, or the working out itself when there is no such copy.";
  "ONE FILE INSTEAD OF ONE FETCH PER CHAPTER. A page that writes out the passages behind a song names something like sixty chapters, and each of those is a file of its own that has to come down before its verse can be shown - a few at a time, each one a round trip, and the reader watches the page fill in for several seconds. All of it is known before anybody opens the page, so it is worked out once and put in a single file, and the page makes one request.";
  "The working out is still here as the way back, and is what makes the built copy safe to be missing. A new app, a bible nobody has built for yet, and a file that has not been uploaded since the app started naming a new passage all end in the same place: slower, and right. Nothing has to be built before an app will work.";
  "It is remembered for the life of the page under the app's name and the bible's, so a reader moving between screens pays for it once. The name matters - filed under the app alone, two bibles would find each other's verses.";
  "Away from a browser there is nothing to save and nothing to wait on, so it simply works it out. The building is what a command line is asking for anyway - it is the thing that fills the file.";
  arguments_assert(arguments, 3);
  let b = browser_is();
  let n = not(b);
  if (n) {
    let built_here = await build();
    return built_here;
  }
  async function get() {
    async function download() {
      let destination = app_shared_bible_built_destination(
        app_fn,
        bible_folder,
      );
      let project_url = firebase_storage_url_project_jg();
      let downloaded = await firebase_storage_download_json_decompress_cache(
        project_url,
        destination,
      );
      return downloaded;
    }
    let held = await catch_null_async(download);
    let missing = null_is(held);
    if (missing) {
      let built = await build();
      return built;
    }
    return held;
  }
  let app_name = app_shared_name_prefix_without_fn(app_fn);
  let key = list_join_slash_forward([app_name, bible_folder]);
  let value = await global_function_property_initialize_async(
    app_shared_bible_built_get,
    key,
    get,
  );
  return value;
}
