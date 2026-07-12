import { file_read_folder_user_txt_split_normalize } from "./file_read_folder_user_txt_split_normalize.mjs";
import { list_translate_openai } from "./list_translate_openai.mjs";
import { integer_odd_is_right } from "./integer_odd_is_right.mjs";
import { pair_to_list } from "./pair_to_list.mjs";
import { list_map_pairs } from "./list_map_pairs.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
import { floor } from "./floor.mjs";
import { list_filter_index } from "./list_filter_index.mjs";
import { list_split } from "./list_split.mjs";
import { divide } from "./divide.mjs";
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
      let i = floor(divide(index, 2));
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
