import { text_lower_to } from "./text_lower_to.mjs";
import { folder_files_names_transform } from "./folder_files_names_transform.mjs";
export async function folder_files_names_lower(joined) {
  let list = await folder_files_names_transform(joined, text_lower_to);
  return list;
}
