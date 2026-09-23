import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_purchases_store } from "./app_receipts_purchases_store.mjs";
import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { app_receipts_purchases_database } from "./app_receipts_purchases_database.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { list_reverse } from "./list_reverse.mjs";
export async function app_receipts_purchases_of(folder_code) {
  "$plain folder_code";
  "The purchases kept on this phone for one folder, the latest first by the date and time they carry.";
  arguments_assert(arguments, 1);
  let store = app_receipts_purchases_store();
  let all = await indexeddb_get_all_backend(
    app_receipts_purchases_database,
    store,
  );
  function of_folder(purchase) {
    let left = property_get(purchase, "folder_code");
    let r = equal(left, folder_code);
    return r;
  }
  let mine = list_filter(all, of_folder);
  function when(purchase) {
    let r =
      property_get(purchase, "date") + " " + property_get(purchase, "time");
    return r;
  }
  list_sort_text_mapper(mine, when);
  list_reverse(mine);
  return mine;
}
