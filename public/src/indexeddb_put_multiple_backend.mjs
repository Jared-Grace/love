import { error } from "../../../love/public/src/error.mjs";
import { each_object_values } from "../../../love/public/src/each_object_values.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { indexeddb_put_item } from "../../../love/public/src/indexeddb_put_item.mjs";
export async function indexeddb_put_multiple_backend(db_get, store, lookup) {
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
    let value_get = object_property_get(lookup, key);
    const next = await value_get(previous);
    return next;
  }
  let nexts = await object_values_map_async(previouses, lambda3);
  {
    const tx = db.transaction(store, "readwrite");
    const s = tx.objectStore(store);
    function lambda2(n) {
      s.put(n);
    }
    each_object_values(nexts, lambda2);
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
  }
  return nexts;
}
