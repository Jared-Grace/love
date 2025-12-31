import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_exists(db_get, store, key) {
  marker("1");
  let all = await indexeddb_get_all(db_get, store);
  let f = list_filter_property(all, "key", key);
  let s1 = list_size_1(f);
  return s1;
  const db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);
  const exists = await new Promise(function lambda3(resolve, reject) {
    const req = s.count(key);
    req.onsuccess = function lambda() {
      let v = resolve(req.result > 0);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return exists;
}
