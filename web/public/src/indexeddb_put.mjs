import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put(db_get, store, key, value_get) {
  const db = await db_get();
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  const value = await new Promise(function lambda7(resolve, reject) {
    const req = s.get(key);
    req.onsuccess = function lambda2() {
      let previous = req.result ?? null;
      function lambda(next) {
        s.put(next, key);
        resolve(next);
      }
      let v6 = value_get(previous);
      Promise.resolve(v6).then(lambda).catch(reject);
    };
    req.onerror = function lambda3() {
      let v = reject(req.error);
      return v;
    };
    tx.oncomplete = function lambda4() {};
    tx.onerror = function lambda5() {
      let v2 = reject(tx.error);
      return v2;
    };
    tx.onabort = function lambda6() {
      let v3 = reject(tx.error);
      return v3;
    };
  });
  await new Promise(function lambda10(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda8() {
      let v4 = reject(tx.error);
      return v4;
    };
    tx.onabort = function lambda9() {
      let v5 = reject(tx.error);
      return v5;
    };
  });
  return value;
}
