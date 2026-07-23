import { ebible_offline_database } from "./ebible_offline_database.mjs";
import { ebible_offline_key } from "./ebible_offline_key.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { indexeddb_put_list_backend } from "./indexeddb_put_list_backend.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_offline_put_list(bible_folder, entries) {
  let store = ebible_offline_store();
  function to_item(entry) {
    let name = property_get(entry, "name");
    let value = property_get(entry, "value");
    let key = ebible_offline_key(bible_folder, name);
    let item = {
      key,
      value,
    };
    return item;
  }
  let items = list_map(entries, to_item);
  await indexeddb_put_list_backend(ebible_offline_database, store, items);
}
