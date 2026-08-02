import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
import { bible_search_word_path } from "./bible_search_word_path.mjs";
export async function app_bible_search_word_download(word) {
  "read back the index of every chapter and verse holding one word. it is held for the rest of the visit under this function's own name, so a second search reuses what the first one fetched - the reader who searches 'even death on a cross' and then 'even death cross' waits on the network once, not twice, and firebase storage answers these with no-cache, so every re-ask really is another round trip";
  let destination_get = bible_search_word_path;
  let fn = app_bible_search_word_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    destination_get,
    word,
  );
  return value;
}
