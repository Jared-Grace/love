import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_stale_words_forget } from "./bible_search_stale_words_forget.mjs";
import { bible_search_language_word_path } from "./bible_search_language_word_path.mjs";
import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
import { identity } from "./identity.mjs";
export async function bible_search_language_word_download(language_code, word) {
  "$plain language_code";
  "$plain word";
  "Read back the index of every chapter and verse holding one word of one language, held for the rest of the visit the same way an English word is.";
  "Held under its whole address rather than under the word, because the same letters are a different word in another language - Spanish and Portuguese both write 'que' - and a visit searching both must not hand one the other's verses.";
  arguments_assert(arguments, 2);
  await bible_search_stale_words_forget();
  let path = bible_search_language_word_path(language_code, word);
  let fn = bible_search_language_word_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    identity,
    path,
  );
  return value;
}
