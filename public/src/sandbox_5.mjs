import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { file_read_folder_user_txt_split_normalize } from "../../../love/public/src/file_read_folder_user_txt_split_normalize.mjs";
import { list_translate_openai } from "../../../love/public/src/list_translate_openai.mjs";
export async function sandbox_5() {
  let file_name = "1CO03_second_half";
  let language = "Urdu";
  let filtered = await file_read_folder_user_txt_split_normalize(file_name);
  let translated = await list_translate_openai(filtered, language);
  function lambda(a, b) {}
  each_pair(filtered, translated, lambda);
  return translated;
}
