import { integer_odd_is_right } from "../../../love/public/src/integer_odd_is_right.mjs";
import { pair_to_list } from "../../../love/public/src/pair_to_list.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_filter_index } from "../../../love/public/src/list_filter_index.mjs";
import { list_split } from "../../../love/public/src/list_split.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_folder_user_split_normalize } from "../../../love/public/src/file_read_folder_user_split_normalize.mjs";
import { file_name_txt } from "../../../love/public/src/file_name_txt.mjs";
export async function sermon_translate_urdu(file_name) {
  const path = file_name_txt(file_name);
  let language = "Urdu";
  let separator = "---";
  let r = await file_read_folder_user_split_normalize(path);
  let normalized = property_get(r, "normalized");
  let filtered = list_filter_empty_not_is(normalized);
  let groups = list_split(filtered, separator);
  let lambda = integer_odd_is_right();
  let value = list_filter_index(groups, lambda);
  let json = json_to({
    value,
  });
  let r3 = await openai_responses_cache(
    "Translate the text inside the JSON object to " +
      language +
      ". Do not change any object keys.",
    json,
  );
  let v = json_from(r3);
  let value2 = property_get(v, "value");
  function lambda2(item2, index2) {
    let change = lambda(item2, index2);
    if (change) {
      let i = floor(index2 / 2);
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
