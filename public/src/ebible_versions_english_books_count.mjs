import { ebible_version_books_count } from "../../../love/public/src/ebible_version_books_count.mjs";
import { ebible_versions_english_downloadable } from "../../../love/public/src/ebible_versions_english_downloadable.mjs";
import { list_to_dictionary_unordered_async } from "../../../love/public/src/list_to_dictionary_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books_count() {
  marker("1");
  let downloadable = await ebible_versions_english_downloadable();
  let dictionary = await list_to_dictionary_unordered_async(
    downloadable,
    ebible_version_books_count,
  );
  return dictionary;
}
