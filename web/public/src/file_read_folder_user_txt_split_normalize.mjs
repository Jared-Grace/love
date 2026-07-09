import { list_filter_text_empty_not_is } from "../../../love/public/src/list_filter_text_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_folder_user_split_normalize } from "../../../love/public/src/file_read_folder_user_split_normalize.mjs";
import { file_name_txt } from "../../../love/public/src/file_name_txt.mjs";
export async function file_read_folder_user_txt_split_normalize(file_name) {
  const path = file_name_txt(file_name);
  let r = await file_read_folder_user_split_normalize(path);
  let normalized = property_get(r, "normalized");
  let filtered = list_filter_text_empty_not_is(normalized);
  return filtered;
}
