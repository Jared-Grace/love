import { ebible_version_books_count } from "./ebible_version_books_count.mjs";
import { ebible_versions_english_downloadable } from "./ebible_versions_english_downloadable.mjs";
import { list_to_dictionary_unordered_async } from "./list_to_dictionary_unordered_async.mjs";
export async function ebible_versions_english_books_count() {
  let downloadable = await ebible_versions_english_downloadable();
  let dictionary = await list_to_dictionary_unordered_async(
    downloadable,
    ebible_version_books_count,
  );
  return dictionary;
}
