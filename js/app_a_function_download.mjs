import { arguments_assert } from "./arguments_assert.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { indexeddb_store_clear } from "./indexeddb_store_clear.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { app_a_file_system_initialize_download } from "./app_a_file_system_initialize_download.mjs";
export async function app_a_function_download() {
  arguments_assert(arguments, 0);
  let store = browser_files_store();
  await indexeddb_store_clear(browser_files_database_initialize, store);
  await app_a_file_system_initialize_download();
}
