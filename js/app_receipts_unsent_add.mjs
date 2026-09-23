import { app_receipts_store } from "./app_receipts_store.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
import { app_receipts_database } from "./app_receipts_database.mjs";
export async function app_receipts_unsent_add(path, file) {
  "$plain path";
  "$plain file";
  "Keep one photo on this phone under the storage address it is going to, so it survives having no internet, and the app being closed, until it is sent.";
  let store = app_receipts_store();
  let record = {
    key: path,
    file,
  };
  await indexeddb_put_backend(app_receipts_database, store, path, record);
}
