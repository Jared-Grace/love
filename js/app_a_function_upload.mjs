import { arguments_assert } from "./arguments_assert.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { json_decompress } from "./json_decompress.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { indexeddb_put } from "./indexeddb_put.mjs";
import { each_async } from "./each_async.mjs";
export async function app_a_function_upload() {
  arguments_assert(arguments, 0);
  ("Sends the server only the files marked changed since the last upload, each as what it was before and what it is now, then clears the marks. Only the marked files are unpacked; the rest are never opened.");
  let store = browser_files_store();
  let all = await indexeddb_get_all(browser_files_database_initialize, store);
  let filtered = list_filter_property(all, "changed", true);
  async function contents_get(compressed) {
    let f = await json_decompress(compressed);
    let versions = property_get(f, "versions");
    let last = list_last(versions);
    return last;
  }
  async function lambda(item) {
    let key = property_get(item, "key");
    let value = property_get(item, "compressed");
    let after = await contents_get(value);
    ("A file made in the browser has nothing before it, which the server reads as a file that must not already be there.");
    let before = "";
    let had = property_exists(item, "original");
    if (had) {
      let value2 = property_get(item, "original");
      before = await contents_get(value2);
    }
    let delta = {
      key,
      versions: [before, after],
    };
    return delta;
  }
  let deltas = await list_map_async(filtered, lambda);
  let ne = list_empty_not_is(deltas);
  if (ne) {
    ("The server runs this one, so its name crosses the wire rather than the function itself.");
    ("Importing it to read a name told the import graph a page could reach git and the shell.");
    await app_shared_api({
      f_name: fn_name("app_a_upload"),
      args: [deltas],
    });
  }
  ("The marks are cleared only after the server has taken the files, so an upload that fails leaves them marked for the next try.");
  async function unmark(item) {
    let key = property_get(item, "key");
    function value_get(previous) {
      property_delete_if_exists(previous, "changed");
      property_delete_if_exists(previous, "original");
      return previous;
    }
    await indexeddb_put(
      browser_files_database_initialize,
      store,
      key,
      value_get,
    );
  }
  await each_async(filtered, unmark);
}
