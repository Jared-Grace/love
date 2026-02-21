import { indexeddb_put_multiple_backend } from "../../../love/public/src/indexeddb_put_multiple_backend.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { indexeddb_put_item } from "../../../love/public/src/indexeddb_put_item.mjs";
export async function indexeddb_put_multiple_backend_transform(
  db_get,
  store,
  lookup,
) {
  const db = await db_get();
  let previouses = null;
  {
    const tx = db.transaction(store, "readonly");
    const s = tx.objectStore(store);
    async function lambda(value, key) {
      let p = await indexeddb_put_item(key, s);
      return p;
    }
    previouses = await object_values_map_async(lookup, lambda);
  }
  async function lambda3(previous, key) {
    let value_get = property_get(lookup, key);
    const next = await value_get(previous);
    return next;
  }
  let nexts = await object_values_map_async(previouses, lambda3);
  {
    await indexeddb_put_multiple_backend(db, store, nexts);
  }
  return nexts;
}
