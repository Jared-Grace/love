import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { app_shared_bible_built_destination } from "./app_shared_bible_built_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
export async function app_shared_bible_built_get(
  built_name,
  bible_folder,
  build,
) {
  "$plain built_name";
  "$plain bible_folder";
  "Whatever scripture something worked out that it needs, in one piece: the copy built ahead of time and kept in storage under the name it is filed by, or the working out itself when there is no such copy.";
  "ONE FILE INSTEAD OF ONE FETCH PER CHAPTER. A page that writes out the passages behind a song names something like sixty chapters, and each of those is a file of its own that has to come down before its verse can be shown - a few at a time, each one a round trip, and the reader watches the page fill in for several seconds. All of it is known before anybody opens the page, so it is worked out once and put in a single file, and the page makes one request.";
  "THE NAME IS HANDED IN RATHER THAN TAKEN OFF AN APP, which is what lets one app keep several of these. It used to be given the app itself, and that said in the shape of the code that an app has one such file; the music page has one per song, because two songs may quote the same verse out of different bibles and a file keyed by the verse can only hold one of the two.";
  "The working out is still here as the way back, and is what makes the built copy safe to be missing. A new page, a bible nobody has built for yet, and a file that has not been uploaded since the asker started naming a new passage all end in the same place: slower, and right. Nothing has to be built before a page will work.";
  "It is remembered for the life of the page under that name and the bible's, so a reader moving between screens pays for it once. The name matters - filed under the asker alone, two bibles would find each other's verses.";
  "Away from a browser there is nothing to save and nothing to wait on, so it simply works it out. The building is what a command line is asking for anyway - it is the thing that fills the file.";
  "IN A BROWSER, A WORKING OUT THAT FAILS HANDS BACK NOTHING RATHER THAN FAILING THE PAGE. The way back is sixty separate requests, so it is far likelier to meet a bad network than the one request it stands in for - and it is only ever reached because that one request already failed, which is itself a sign the network is unwell. A refusal nobody catches leaves the page holding a rejected promise, and the shared error box listens for exactly that, so a reader who had already been given the whole page gets a full-screen apology laid over it. Nothing here is what the reader came for: it is what fills the passages in underneath. So a failure leaves the places empty and the page stands.";
  "AWAY FROM A BROWSER THE SAME FAILURE IS STILL LOUD, because there the working out is not a way back from anything - it is the answer, and the caller is usually the command that fills the file. Somewhere to carry on quietly and somewhere to stop are two different places, and this is both of them.";
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
        built_name,
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
      let built = await catch_null_async(build);
      let unbuilt = null_is(built);
      if (unbuilt) {
        let r = {};
        return r;
      }
      return built;
    }
    return held;
  }
  let key = list_join_slash_forward([built_name, bible_folder]);
  let value = await global_function_property_initialize_async(
    app_shared_bible_built_get,
    key,
    get,
  );
  return value;
}
