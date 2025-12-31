import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { indexeddb_put_item } from "../../../love/public/src/indexeddb_put_item.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  marker("1");
  const db = await db_get();
  let previouses = null;
  {
    const tx = db.transaction(store, "readonly");
    const s = tx.objectStore(store);
    async function lambda(value, key) {
      let v = await indexeddb_put_item(key, s);
      return v;
    }
    previouses = await object_values_map_async(lookup, lambda);
  }
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  async function lambda2(previous) {
    const next = await value_get(previous);
    s.put(next);
  }
  let result = await object_values_map_async(previouses, lambda2);
  await new Promise(function lambda6(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda4() {
      let v3 = reject(tx.error);
      return v3;
    };
    tx.onabort = function lambda5() {
      let v4 = reject(tx.error);
      return v4;
    };
  });
  return next;
}
