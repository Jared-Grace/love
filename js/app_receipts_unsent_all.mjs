import { app_receipts_store } from "./app_receipts_store.mjs";
import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { app_receipts_database } from "./app_receipts_database.mjs";
export async function app_receipts_unsent_all() {
  "Every photo kept on this phone that has not been sent yet, each as {key, file} where the key is where it is going.";
  let store = app_receipts_store();
  let all = await indexeddb_get_all_backend(app_receipts_database, store);
  return all;
}
