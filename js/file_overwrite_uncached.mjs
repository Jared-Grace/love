import { fn_name } from "./fn_name.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
import { promise_catch_ignore } from "./promise_catch_ignore.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { property_set } from "./property_set.mjs";
import { json_compress } from "./json_compress.mjs";
import { indexeddb_put } from "./indexeddb_put.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { browser_is } from "./browser_is.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
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
  } else {
    await file_parent_exists_ensure(file_path);
    let fs = await import("fs");
    let temp_path = file_path_temp(file_path);
    try {
      await fs.promises.writeFile(temp_path, contents, "utf-8");
      await fs.promises.rename(temp_path, file_path);
    } catch (e) {
      let promise = fs.promises.unlink(temp_path);
      await promise_catch_ignore(promise);
      throw e;
    }
    ("noted only once the file is actually on disk, and only on this side of the branch: a browser keeps its files in its own store, where there is no commit for a note to serve");
    await file_to_commit_add_try(file_path);
  }
  await data_file_update(file_path);
}
