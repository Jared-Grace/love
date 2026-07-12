import { list_filter_remove } from "./list_filter_remove.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { object_values } from "./object_values.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
import { indexeddb_put_multiple_backend } from "./indexeddb_put_multiple_backend.mjs";
import { indexeddb_next } from "./indexeddb_next.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  'at time of writing, indexeddb code only uses key value of "key" therefore this function could be made general to receive key name as param';
  let key = "key";
  let v = object_values(lookup);
  let keys = list_map_property(v, key);
  let existing = await indexeddb_get_all(db_get, store);
  function lambda(item) {
    let k = property_get(item, key);
    let includes = list_includes(keys, k);
    return includes;
  }
  list_filter_remove(existing, lambda);
  list_add_multiple(existing, v);
  async function lambda_async() {
    await indexeddb_put_multiple_backend(db_get, store, lookup);
  }
  indexeddb_next(lambda_async);
}
