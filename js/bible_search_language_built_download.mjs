import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_language_built_path } from "./bible_search_language_built_path.mjs";
import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
import { identity } from "./identity.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function bible_search_language_built_download(language_code) {
  "$plain language_code";
  "When one language's search index was built, or nothing when storage holds no index for it.";
  "Asked of storage rather than of a list in the code, because the upload is what makes a language searchable, and a list would have to be remembered by hand every time one went up. A list was the other choice: it needs no request and works offline, but it can claim a language whose words are not up there yet, and then every word reads as nowhere in the Bible.";
  "Nothing also comes back when the connection drops. That reader's words would not have come back either, so the page has nothing better to say about that language.";
  arguments_assert(arguments, 1);
  let fn = bible_search_language_built_download;
  let path = bible_search_language_built_path(language_code);
  async function get() {
    let built = await firebase_storage_download_json_decompress_project_jg(
      fn,
      identity,
      path,
    );
    return built;
  }
  let built = await catch_null_async(get);
  return built;
}
