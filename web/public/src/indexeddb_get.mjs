import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_get(db_get, store, key) {
  marker("1");
  let all = await indexeddb_get_all(db_get, store);
  let f = list_find_property(all, "key", key);
  return f;
}
