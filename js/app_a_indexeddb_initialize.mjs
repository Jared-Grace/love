import { app_a_indexeddb_database_name } from "./app_a_indexeddb_database_name.mjs";
import { app_a_file_system_store } from "./app_a_file_system_store.mjs";
import { app_a_indexeddb_path_key } from "./app_a_indexeddb_path_key.mjs";
import { not } from "./not.mjs";
export async function app_a_indexeddb_initialize() {
  "Every name here comes from its own getter, and none of them from the app entry point.";
  "That distinction is the whole point rather than a style: measured 2026-07-26, a name-only";
  "import of the app itself costs the g bundle 410 KiB, because reading any file reaches here.";
  "A getter holding one word costs nothing, so the database name and the store name are";
  "imported while the app is not.";
  "The database is not called after the app by coincidence and must not follow it. Both names";
  "are frozen, since a browser that already holds a user's files finds them under these two";
  "words and under no others.";
  let db_name = app_a_indexeddb_database_name();
  let store_files = app_a_file_system_store();
  let version = 1;
  let db = await new Promise(function lambda4(resolve, reject) {
    let req = indexedDB.open(db_name, version);
    req.onupgradeneeded = function lambda() {
      let db = req.result;
      let b = db.objectStoreNames.contains(store_files);
      if (not(b)) {
        db.createObjectStore(store_files, {
          keyPath: app_a_indexeddb_path_key(),
        });
      }
    };
    req.onsuccess = function lambda2() {
      let v = resolve(req.result);
      return v;
    };
    req.onerror = function lambda3() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return db;
}
