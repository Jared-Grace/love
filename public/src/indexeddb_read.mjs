import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_read(db_get, store,path) {
  marker("1");
  let db = await db_get();
const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);

  return await new Promise((resolve, reject) => {
    const req = s.get(path);
    req.onsuccess = () => resolve(req.result?.content ?? null);
    req.onerror = () => reject(req.error);
  });
}
