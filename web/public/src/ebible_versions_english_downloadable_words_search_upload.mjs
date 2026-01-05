import { object_values } from "../../../love/public/src/object_values.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_downloadable_words_search_upload() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  function lambda3(value, key) {
    let v = {
      value,
      key,
    };
    return v;
  }
  let result2 = object_values_map(result, lambda3);
  let v2 = object_values(result2);
  let cs = list_chunk(v2, 20);
  let size = list_size(cs);
  return size;
  async function lambda2(c) {
    async function lambda4({ value, key }) {
      let destination = app_bible_search_word_path(key);
      function lambda(verses_obj, chapter_code) {
        let properties = object_properties(verses_obj);
        return properties;
      }
      let m = object_values_map(value, lambda);
      log({
        word,
        m,
      });
      return;
      await firebase_upload_object_compressed(destination, m);
    }
    await each_unordered_async(c, lambda4);
  }
  await each_async(cs, lambda2);
}
