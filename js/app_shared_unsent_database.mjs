import { app_shared_unsent_database_name } from "./app_shared_unsent_database_name.mjs";
import { app_shared_unsent_store } from "./app_shared_unsent_store.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function app_shared_unsent_database() {
  "the browser database where receipt photos wait on this phone until they are sent";
  let name = app_shared_unsent_database_name();
  let store = app_shared_unsent_store();
  let database = await indexeddb_database_open(name, store);
  return database;
}
