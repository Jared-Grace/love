import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { file_read_folder_user_split_normalize } from "./file_read_folder_user_split_normalize.mjs";
import { file_name_txt } from "./file_name_txt.mjs";
export async function file_read_folder_user_txt_split_normalize(file_name) {
  let path = file_name_txt(file_name);
  let r = await file_read_folder_user_split_normalize(path);
  let normalized = property_get(r, "normalized");
  let filtered = list_filter_text_empty_not_is(normalized);
  return filtered;
}
