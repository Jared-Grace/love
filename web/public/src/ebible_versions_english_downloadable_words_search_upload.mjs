import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
export async function ebible_versions_english_downloadable_words_search_upload() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  let properties = object_properties(result);
  return properties;
  async function lambda3(value, word) {
    log({
      value,
      word,
    });
    let file_name_with_extension = file_name_json(word);
    let destination = list_join_slash_forward([
      "bible_search",
      file_name_with_extension,
    ]);
    await firebase_upload_object_compressed(destination, value);
  }
  await each_object_async(result, lambda3);
}
