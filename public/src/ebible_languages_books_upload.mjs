import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_upload } from "../../../love/public/src/ebible_version_books_upload.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_books_upload() {
  marker("1");
  let languages = ebible_languages();
  let mapped = list_map_property(list, property_name);
  let books = await ebible_version_books_upload(bible_folder);
  return languages;
}
