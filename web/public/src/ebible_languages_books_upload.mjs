import { ebible_languages_without_original } from "../../../love/public/src/ebible_languages_without_original.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_upload } from "../../../love/public/src/ebible_version_books_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_books_upload() {
  marker("1");
  let languages = ebible_languages_without_original();
  let bible_folders = list_map_property(languages, "bible_folder");
  await each_async(bible_folders, lambda);
  async function lambda(bible_folder) {
    let books = await ebible_version_books_upload(bible_folder);
  }
}
