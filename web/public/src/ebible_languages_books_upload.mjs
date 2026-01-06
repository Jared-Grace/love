import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_upload } from "../../../love/public/src/ebible_version_books_upload.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_books_upload() {
  marker("1");
  let languages = ebible_languages();
  let bible_folders = list_map_property(languages, "bible_folder");
  async function lambda(bible_folder) {
    let books = await ebible_version_books_upload(bible_folder);
  }
  let waited = await list_map_unordered_async(bible_folders, lambda);
  return languages;
}
