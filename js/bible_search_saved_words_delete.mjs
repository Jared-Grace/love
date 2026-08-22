import { bible_search_folder } from "./bible_search_folder.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { download_cache_database } from "./download_cache_database.mjs";
import { download_cache_store } from "./download_cache_store.mjs";
import { indexeddb_delete_list_backend } from "./indexeddb_delete_list_backend.mjs";
import { indexeddb_keys_backend } from "./indexeddb_keys_backend.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { text_includes } from "./text_includes.mjs";
export async function bible_search_saved_words_delete() {
  "Throw away every saved copy of a search index word this device is holding, and say how many that was.";
  "The offline bibles and the uploaded verses live in the same store and are left alone, because they are not rebuilt - what is up there for them is what was up there when they were saved. Only the index is written again from the beginning, and only its words can therefore be out of date.";
  "It fails quietly, the same as saving does: a device refusing browser storage has no saved copies to be wrong about, and a reader who cannot delete must still be allowed to search.";
  async function delete_all() {
    let store = download_cache_store();
    let keys = await indexeddb_keys_backend(download_cache_database, store);
    let folder = bible_search_folder();
    function of_the_index(key) {
      let mine = text_includes(key, folder);
      return mine;
    }
    let words = list_filter(keys, of_the_index);
    await indexeddb_delete_list_backend(download_cache_database, store, words);
    let count = list_size(words);
    return count;
  }
  let deleted = await catch_null_async(delete_all);
  return deleted;
}
