import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books() {
  marker("1");
  async function lambda(bible_folder) {
    try {
      let file_path = null;
      file_path = await ebible_version_download(bible_folder);
    } catch (e) {}
  }
  let mapped = await list_map_async(bible_folders, lambda);
  let v = await ebible_versions_english();
  let dictionary = await list_to_dictionary_async(v, ebible_version_books);
  return dictionary;
}
