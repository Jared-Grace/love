import { mod } from "../../../love/public/src/mod.mjs";
import { list_filter_index } from "../../../love/public/src/list_filter_index.mjs";
import { list_split } from "../../../love/public/src/list_split.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_folder_user_split_normalize } from "../../../love/public/src/file_read_folder_user_split_normalize.mjs";
export async function sandbox() {
  const path = "David.txt";
  let r = await file_read_folder_user_split_normalize(path);
  let normalized = property_get(r, "normalized");
  let filtered = list_filter_empty_not_is(normalized);
  let separator = "---";
  let groups = list_split(filtered, separator);
  let m = 2;
  function lambda(item, index) {
    let r2 = mod(index, m);
    return r2;
  }
  let filtered2 = list_filter_index(groups, lambda);
  return filtered2;
}
