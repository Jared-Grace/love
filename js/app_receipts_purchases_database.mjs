import { app_receipts_purchases_database_name } from "./app_receipts_purchases_database_name.mjs";
import { app_receipts_purchases_store } from "./app_receipts_purchases_store.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function app_receipts_purchases_database() {
  "the browser database where the purchases added on this phone are kept";
  let name = app_receipts_purchases_database_name();
  let store = app_receipts_purchases_store();
  let database = await indexeddb_database_open(name, store);
  return database;
}
