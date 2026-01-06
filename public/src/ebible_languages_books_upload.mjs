import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function ebible_languages_books_upload() {
  marker("1");
  let languages = ebible_languages();
  return languages;
}
