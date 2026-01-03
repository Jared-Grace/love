import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books() {
  marker("1");
  let bible_folders = await ebible_versions_english();
  async function lambda2(la) {
    async function lambda(bible_folder) {
      let result = null;
      let success = null;
      let error = null;
      try {
        await ebible_version_download(bible_folder);
        la(bible_folder);
        success = true;
      } catch (e) {
        success = false;
        error = e;
      }
    }
    await each_async(bible_folders, lambda);
  }
  let list = await list_adder_async(lambda2);
  let dictionary = await list_to_dictionary_async(v, ebible_version_books);
  return dictionary;
}
