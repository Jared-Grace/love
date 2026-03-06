import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_folder_user_split_normalize } from "../../../love/public/src/file_read_folder_user_split_normalize.mjs";
export async function sandbox() {
  const path = "David.txt";
  let r = await file_read_folder_user_split_normalize(path);
  let split = property_get(r, "split");
  let normalized = property_get(r, "normalized");$r,split
}
