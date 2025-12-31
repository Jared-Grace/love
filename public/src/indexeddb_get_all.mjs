import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_get_all(db_get, store) {
  let exists = global_function_property_exists(indexeddb_get_all, store);
  if (not(exists)) {
    const db = await db_get();
    const tx = db.transaction(store, "readonly");
    const s = tx.objectStore(store);
    let all = new Promise(function lambda3(resolve, reject) {
      const req = s.getAll();
      req.onsuccess = function lambda() {
        let v = resolve(req.result);
        return v;
      };
      req.onerror = function lambda2() {
        let v2 = reject(req.error);
        return v2;
      };
    });
    global_function_property_set(indexeddb_get_all, store, all);
  }
  let dictionary = global_function_property_get(indexeddb_get_all, store);
  return dictionary;
}
