import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_language_en_name } from "./ebible_language_en_name.mjs";
export function ebible_language_english() {
  let v = {
    name: ebible_language_en_name(),
    bible_folder: ebible_folder_english(),
    language_code: ebible_language_en_code(),
  };
  return v;
}
