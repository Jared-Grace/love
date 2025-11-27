import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { folder_files_names_transform } from "../../../love/public/src/folder_files_names_transform.mjs";
export async function folder_files_names_lower(joined) {
  let list2 = await folder_files_names_transform(joined, string_lower_to);
  return list2;
}
