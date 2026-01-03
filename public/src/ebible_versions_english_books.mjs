import { list_filter_try_async } from "../../../love/public/src/list_filter_try_async.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books() {
  marker("1");
  let bible_folders = await ebible_versions_english();
  let list = await list_filter_try_async(
    bible_folders,
    ebible_version_download,
  );
  let dictionary = await list_to_dictionary_async(list, ebible_version_books);
  return dictionary;
}
