import { browser_is } from "./browser_is.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { fn_name } from "./fn_name.mjs";
import { null_is } from "./null_is.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { json_compress } from "./json_compress.mjs";
import { indexeddb_put } from "./indexeddb_put.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
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
      ("THE FIRST WRITE SINCE THE LAST UPLOAD KEEPS WHAT WAS THERE BEFORE IT, and marks the file changed. Uploading then sends only the marked files, and tells the server what each was before, so the server can refuse a file changed on both sides. Finding the changed files by unpacking every stored file and counting its versions stopped finding anything the moment a file kept only one version.");
      ("The earlier copy is kept still packed, so marking costs no unpacking and a write costs what it did.");
      let marked = property_exists(previous, "changed");
      if (not(marked)) {
        let had = property_exists(previous, p);
        if (had) {
          let before = property_get(previous, p);
          property_set(previous, "original", before);
        }
        property_set(previous, "changed", true);
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
  let fn = await function_import_relative(
    fn_name("file_overwrite_uncached_node"),
  );
  await fn(file_path, contents);
}
