import { download_cache_database_name } from "./download_cache_database_name.mjs";
import { download_cache_store } from "./download_cache_store.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function download_cache_database() {
  "both words come from their own getter and neither from an app, because everything that downloads anything reaches here - a name-only import of an app entry point was measured at 410 KiB on one bundle, and a getter holding one word costs nothing";
  let name = download_cache_database_name();
  let store = download_cache_store();
  let database = await indexeddb_database_open(name, store);
  return database;
}
