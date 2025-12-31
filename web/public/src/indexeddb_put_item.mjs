import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put_item(key, s) {
  let previous = await new Promise(async function lambda3(resolve, reject) {
    const req = s.get(key);
    req.onsuccess = function lambda() {
      let v = resolve(req.result ?? null);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return previous;
}
