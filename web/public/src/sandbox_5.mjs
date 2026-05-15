import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { file_read_folder_user_txt_split_normalize } from "../../../love/public/src/file_read_folder_user_txt_split_normalize.mjs";
import { list_translate_openai } from "../../../love/public/src/list_translate_openai.mjs";
export async function sandbox_5() {
  let file_name = "1CO03_second_half";
  let language = "Urdu";
  let filtered = await file_read_folder_user_txt_split_normalize(file_name);
  let translated = await list_translate_openai(filtered, language);
  function lambda2(la) {
    function lambda(a, b) {
      function lambda3(item) {}
      each(list2, lambda3);
    }
    each_pair(filtered, translated, lambda);
  }
  let list = list_adder(lambda2);
  return translated;
}
