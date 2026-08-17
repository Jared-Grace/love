import { arguments_assert } from "./arguments_assert.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { property_get } from "./property_get.mjs";
import { json_decompress } from "./json_decompress.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { each_async } from "./each_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { properties_from_empty } from "./properties_from_empty.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_a_function_upload() {
  arguments_assert(arguments, 0);
  let store = browser_files_store();
  let all = await indexeddb_get_all(browser_files_database_initialize, store);
  async function lambda(item) {
    let compressed = property_get(item, "compressed");
    let f = await json_decompress(compressed);
    let versions = property_get(f, "versions");
    property_set_exists_not(item, "versions", versions);
    let m = list_multiple_is(versions);
    property_set_exists_not(item, "changed", m);
  }
  await each_async(all, lambda);
  let filtered = list_filter_property(all, "changed", true);
  function lambda2(item2) {
    let o = properties_from_empty(item2, ["key", "versions"]);
    return o;
  }
  let deltas = list_map(filtered, lambda2);
  let ne = list_empty_not_is(deltas);
  if (ne) {
    ("The server runs this one, so its name crosses the wire rather than the function itself.");
    ("Importing it to read a name told the import graph a page could reach git and the shell.");
    let r = await app_shared_api({
      f_name: fn_name("app_a_upload"),
      args: [deltas],
    });
  }
}
