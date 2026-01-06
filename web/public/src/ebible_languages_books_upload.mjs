import { list_remove_property_multiple } from "../../../love/public/src/list_remove_property_multiple.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_upload } from "../../../love/public/src/ebible_version_books_upload.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_books_upload() {
  marker("1");
  let languages = ebible_languages();
  let original = bible_interlinear_verses_upload_folder();
  list_remove_property_multiple(languages, "language_code", original);
  let bible_folders = list_map_property(languages, "bible_folder");
  async function lambda(bible_folder) {
    let books = await ebible_version_books_upload(bible_folder);
  }
  let waited = await list_map_unordered_async(bible_folders, lambda);
}
