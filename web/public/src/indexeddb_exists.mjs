import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_exists(db_get, store, key) {
  marker("1");

  const db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);

  const exists = await new Promise((resolve, reject) => {
    const req = s.count(key);
    req.onsuccess = () => resolve(req.result > 0);
    req.onerror = () => reject(req.error);
  });

  return exists;
}