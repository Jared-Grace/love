import { object_values } from "./object_values.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_filter_remove } from "./list_filter_remove.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { indexeddb_put_multiple_backend } from "./indexeddb_put_multiple_backend.mjs";
import { indexeddb_next } from "./indexeddb_next.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  'at time of writing, indexeddb code only uses key value of "key" therefore this function could be made general to receive key name as param';
  let key = "key";
  let v = object_values(lookup);
  let keys = list_map_property(v, key);
  let existing = await indexeddb_get_all(db_get, store);
  function lambda(item) {
    let includes = property_in_list(item, key, keys);
    return includes;
  }
  list_filter_remove(existing, lambda);
  list_add_multiple(existing, v);
  async function lambda_async() {
    await indexeddb_put_multiple_backend(db_get, store, lookup);
  }
  ("Reads see the new values at once; the write that keeps them goes on in the background, and is handed back for a caller that must know when it has landed.");
  let written = indexeddb_next(lambda_async);
  let r = {
    written,
  };
  return r;
}
