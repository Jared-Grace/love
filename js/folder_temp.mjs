import { folder_temp_keep } from "./folder_temp_keep.mjs";
import { folder_delete_after } from "./folder_delete_after.mjs";
export async function folder_temp(lambda$folder_path) {
  let folder_path = await folder_temp_keep();
  let result = await folder_delete_after(folder_path, lambda$folder_path);
  return result;
}
