import { firebase_upload_object_compressed_chunked } from "./firebase_upload_object_compressed_chunked.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { properties_get } from "./properties_get.mjs";
import { object_values_map } from "./object_values_map.mjs";
import { app_bible_search_word_path } from "./app_bible_search_word_path.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "./ebible_versions_english_downloadable_words_lookup_cache.mjs";
export async function ebible_versions_english_downloadable_words_search_upload() {
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  let v2 = object_to_list(result);
  await firebase_upload_object_compressed_chunked(v2, get);
  function get({ value: v, key }) {
    let destination = app_bible_search_word_path(key);
    function lambda(verses_obj, chapter_code) {
      let properties = properties_get(verses_obj);
      return properties;
    }
    let value = object_values_map(v, lambda);
    let v3 = {
      destination,
      value,
    };
    return v3;
  }
}
