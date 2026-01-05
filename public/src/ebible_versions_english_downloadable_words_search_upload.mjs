import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
export async function ebible_versions_english_downloadable_words_search_upload() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  async function lambda3(value, word) {
    log({
      word,
    });
    let destination = app_bible_search_word_path(word);
    await firebase_upload_object_compressed(destination, value);
  }
  await each_object_async(result, lambda3);
}
