import { list_remove_multiple } from "../../../love/public/src/list_remove_multiple.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { global_function_property_initialize } from "../../../love/public/src/global_function_property_initialize.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { indexeddb_put_multiple_backend } from "../../../love/public/src/indexeddb_put_multiple_backend.mjs";
import { indexeddb_next } from "../../../love/public/src/indexeddb_next.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  let key = "key";
  let v = object_values(lookup);
  let keys = list_map_property(v, key);
  let existing = global_function_property_initialize(
    indexeddb_get_all,
    store,
    [],
  );
  function lambda(item) {
    let k = object_property_get(item, key);
    let includes = list_includes(keys, k);
    return includes;
  }
  let filtered = list_filter(existing, lambda);
  list_remove_multiple(removals, list);
  global_function_property_set(indexeddb_get_all, store, v);
  marker("1");
  async function lambda_async() {
    await indexeddb_put_multiple_backend(db_get, store, lookup);
  }
  indexeddb_next(lambda_async);
}
