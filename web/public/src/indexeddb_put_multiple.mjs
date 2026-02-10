import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_remove_multiple } from "../../../love/public/src/list_remove_multiple.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { indexeddb_put_multiple_backend } from "../../../love/public/src/indexeddb_put_multiple_backend.mjs";
import { indexeddb_next } from "../../../love/public/src/indexeddb_next.mjs";
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
  let filtered = list_filter(existing, lambda);
  list_remove_multiple(existing, filtered);
  list_add_multiple(existing, v);
  async function lambda_async() {
    await indexeddb_put_multiple_backend(db_get, store, lookup);
  }
  indexeddb_next(lambda_async);
}
