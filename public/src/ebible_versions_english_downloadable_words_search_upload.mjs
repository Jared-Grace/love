import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_downloadable_words_search_upload() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  let v2 = object_to_list(result);
  let cs = list_chunk(v2, 20);
  async function lambda2(c) {
    async function lambda4(i) {
      let v4 = get(i);
      let value = object_property_get(v4, "value");
      let destination = object_property_get(v4, "destination");
      await firebase_upload_object_compressed(destination, value);
    }
    await each_unordered_async(c, lambda4);
    await sleep(2000);
  }
  await each_async(cs, lambda2);
  function get({ value: v, key }) {
    let destination = app_bible_search_word_path(key);
    function lambda(verses_obj, chapter_code) {
      let properties = object_properties(verses_obj);
      return properties;
    }
    let m = object_values_map(v, lambda);
    let v3 = {
      destination,
      value,
    };
    return v3;
  }
}
