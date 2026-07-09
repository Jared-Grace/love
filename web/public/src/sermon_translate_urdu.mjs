import { file_read_folder_user_txt_split_normalize } from "../../../love/public/src/file_read_folder_user_txt_split_normalize.mjs";
import { list_translate_openai } from "../../../love/public/src/list_translate_openai.mjs";
import { integer_odd_is_right } from "../../../love/public/src/integer_odd_is_right.mjs";
import { pair_to_list } from "../../../love/public/src/pair_to_list.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { list_filter_index } from "../../../love/public/src/list_filter_index.mjs";
import { list_split } from "../../../love/public/src/list_split.mjs";
export async function sermon_translate_urdu(file_name) {
  let filtered = await file_read_folder_user_txt_split_normalize(file_name);
  let separator = "---";
  let groups = list_split(filtered, separator);
  let lambda = integer_odd_is_right();
  let value = list_filter_index(groups, lambda);
  let language = "Urdu";
  let value2 = await list_translate_openai(value, language);
  function lambda2(item2, index) {
    let change = lambda(item2, index);
    if (change) {
      let i = floor(index / 2);
      let item3 = list_get(value2, i);
      let mapped2 = list_map_pairs(item3, item2, pair_to_list);
      return mapped2;
    }
    return item2;
  }
  let mapped = list_map_index(groups, lambda2);
  let lines = list_squash(mapped);
  let joined = list_join_newline_2(lines);
  await clipboard_copy(joined);
  return joined;
}
