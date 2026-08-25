import { function_import_relative } from "./function_import_relative.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { json_compress } from "./json_compress.mjs";
import { indexeddb_put } from "./indexeddb_put.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { browser_is } from "./browser_is.mjs";
export async function file_overwrite_uncached(file_path, contents) {
  if (browser_is()) {
    file_path = file_path_normalize(file_path);
    let store = browser_files_store();
    async function value_get(previous) {
      ("a browser file stores ONE version — the current contents — and the record keeps the `versions` list shape because ",
        fn_name("file_read"),
        " reads the last entry of it.");
      ("it used to APPEND, keeping every version ever written. nothing ever read one: the only reader takes the last. and the cost was paid on every single write, because the whole history had to be decompressed, grown by one full copy, and recompressed. MEASURED on a real g save (12 KB of json per version, lz-string): 1 version = 8 ms per write, 50 = 171 ms, 100 = 348 ms, 200 = 1055 ms, 400 = 3322 ms — it gets slower the longer the game is played, forever. the game writes twice per tap, which is why praying for the next conversation took half a second on a save that had reached 68 KB. keeping only the current version makes every write cost the same 8 ms no matter how long the game has been played, and drops the decompress entirely, since the previous contents are no longer needed.");
      let p = "compressed";
      let nn = null_is(previous);
      if (nn) {
        previous = {
          key: file_path,
        };
      }
      let e = text_empty_is(contents);
      if (e) {
        property_set(previous, "deleted", true);
      } else {
        property_delete_if_exists(previous, "deleted");
      }
      let f = {
        ["versions"]: [contents],
      };
      let compressed_after = await json_compress(f);
      property_set(previous, p, compressed_after);
      return previous;
    }
    await indexeddb_put(
      browser_files_database_initialize,
      store,
      file_path,
      value_get,
    );
    return;
  }
  ("★ THE DISK HALF IS ASKED FOR BY NAME AND NOT IMPORTED, and that is about weight rather than about tidiness. The check above decides which machine RUNS it and settles nothing about which machine DOWNLOADS it - a bundler follows a plain import whether the branch is walked or not, so every page that saved anything at all carried the whole of a build machine's file writing in order never to run a line of it. A name joined into a path at the moment it is wanted is something a bundler cannot see through.");
  let f_name = fn_name("file_overwrite_uncached_node");
  let fn = await function_import_relative(f_name);
  await fn(file_path, contents);
}
