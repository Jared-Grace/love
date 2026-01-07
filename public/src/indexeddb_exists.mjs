import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { indexeddb_exists_backend } from "../../../love/public/src/indexeddb_exists_backend.mjs";
import { list_find_property_exists } from "../../../love/public/src/list_find_property_exists.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_exists(db_get, store, key) {
  marker("1");
  let all = await indexeddb_get_all(db_get, store);
  let filtered = list_filter(list, function lambda(item) {});
  const property = "key";
  let s1 = list_find_property_exists(all, property, key);
  return s1;
  let exists = await indexeddb_exists_backend(db_get, store, key);
  return exists;
}
