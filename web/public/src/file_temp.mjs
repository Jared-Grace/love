import { file_temp_keep } from "../../../love/public/src/file_temp_keep.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function file_temp(lambda$temp_path) {
  let temp_path = await file_temp_keep();
  let result = await file_delete_after(temp_path, lambda$temp_path);
  return result;
}
