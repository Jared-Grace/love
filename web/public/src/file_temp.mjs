import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
import { folder_user_join } from "../../../love/public/src/folder_user_join.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
export async function file_temp(lambda$temp_path) {
  let u = await uuid();
  let temp_path = folder_user_join("temp", u);
  let result = await file_delete_after(temp_path, lambda$temp_path);
  return result;
}
