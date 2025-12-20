import { error } from "../../../love/public/src/error.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put(db_get, store, value) {
  marker("1");
  let db = await db_get();
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  s.put(value);
  let v = tx.complete;
  return v;
  let v4 = await new Promise(function lambda3(resolve, reject) {
    const req = s.get(path);
    req.onsuccess = function lambda() {
      const previous = req.result;
      if (not(previous)) {
        previous = null;
      }
      previous.content = mutateFn(previous.content);
      previous.mtime = Date.now();
      s.put(value);
      resolve(previous.content);
    };
    req.onerror = function lambda2() {
      let v3 = reject(req.error);
      return v3;
    };
  });
  return v4;
}
