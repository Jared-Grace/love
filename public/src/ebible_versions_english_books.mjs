import { ebible_versions_english_downloadable } from "../../../love/public/src/ebible_versions_english_downloadable.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books() {
  marker("1");
  let list = await ebible_versions_english_downloadable();
  let dictionary = await list_to_dictionary_async(list, ebible_version_books);
  return dictionary;
}
