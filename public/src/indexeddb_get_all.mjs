import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_get_all(db_get, store) {
  const db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);

  return new Promise((resolve, reject) => {
    const req = s.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
