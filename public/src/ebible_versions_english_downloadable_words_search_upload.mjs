import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_downloadable_words_search_upload() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  async function lambda3(value, word) {
    let destination = app_bible_search_word_path(word);
    function lambda(verses_obj, chapter_code) {
      let properties = object_properties(verses_obj);
      return properties;
    }
    let m = object_values_map(value, lambda);
    log({
      word,
      m,
    });
    exit();
    await firebase_upload_object_compressed(destination, m);
  }
  function lambda3(value, word) {
    let v = {
      value,
      word,
    };
    return v;
  }
  let result2 = object_values_map(object, lambda3);
  let cs = list_chunk(result2, 20);
  await each_async(list, async function lambda2(item) {});
}
