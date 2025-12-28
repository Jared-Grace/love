import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_language_en_name } from "../../../love/public/src/ebible_language_en_name.mjs";
export function ebible_language_en() {
  let v2 = {
    name: ebible_language_en_name(),
    bible_folder: ebible_folder_english(),
    language_code: "en",
  };
  return v2;
}
