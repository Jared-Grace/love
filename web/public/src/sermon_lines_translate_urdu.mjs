import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { list_join_newline_ } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_pair_weave } from "../../../love/public/src/list_pair_weave.mjs";
import { list_translate_openai } from "../../../love/public/src/list_translate_openai.mjs";
import { file_read_folder_user_txt_split_normalize } from "../../../love/public/src/file_read_folder_user_txt_split_normalize.mjs";
export async function sermon_lines_translate_urdu(file_name) {
  let language = "Urdu";
  let filtered = await file_read_folder_user_txt_split_normalize(file_name);
  let translated = await list_translate_openai(filtered, language);
  let list = list_pair_weave(filtered, translated);
  if (10) {
    list = translated;
  }
  let joined = list_join_newline_(list);
  await clipboard_copy(joined);
  return joined;
}
