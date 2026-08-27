import { arguments_assert } from "./arguments_assert.mjs";
import { webpack_watch_app_deps_get } from "./webpack_watch_app_deps_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { file_read } from "./file_read.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { text_hash } from "./text_hash.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function app_shared_dev_sources_fingerprint(a_name) {
  arguments_assert(arguments, 1);
  ("$plain a_name");
  ("One short word standing for every source one app's dev bundle is built out of, so what a bundle was made from can be written down and compared later without keeping any of it.");
  ("WORKED OUT FROM WHAT THE FILES SAY, NEVER FROM WHEN THEY WERE LAST TOUCHED. A time is only a fact about one disk: a fresh copy of the repository gives every file the same moment, and the gate that has to answer this question runs in exactly such a copy, so a reading built on times comes out of it saying whatever the copying happened to leave behind. What the files say is the same wherever they are read.");
  ("The list of functions is asked of the same place the rebuilding watcher asks, so the repo holds one answer to what an app is built out of rather than two that can quietly come apart.");
  ("The names are put in order first, so the word depends on which sources there are and what each one says and on nothing else. Read back in another order the same sources would otherwise give a different word and every bundle would look stale.");
  ("A source the repo cannot find is written down as absent rather than passed over, because a file going missing is itself a change to what the bundle was built out of, and passing over it would give the same word before and after.");
  let ad = await webpack_watch_app_deps_get(a_name);
  let unknown = null_is(ad);
  if (unknown) {
    return null;
  }
  let deps = property_get(ad, "deps");
  let sorted = list_sort_text(deps);
  async function line_of(dep) {
    let path = function_name_to_path_relative(dep);
    async function read() {
      let text = await file_read(path);
      return text;
    }
    let source = await catch_null_async(read);
    let absent = null_is(source);
    if (absent) {
      let gone = list_join_colon([dep, "absent"]);
      return gone;
    }
    let word = text_hash(source);
    let line = list_join_colon([dep, word]);
    return line;
  }
  let lines = await list_map_async(sorted, line_of);
  let whole = list_join_newline(lines);
  let fingerprint = text_hash(whole);
  return fingerprint;
}
