import { file_temp_cleanup } from "../../../love/public/src/file_temp_cleanup.mjs";
import { folder_user_join } from "../../../love/public/src/folder_user_join.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
export async function file_temp(lambda$temp_path) {
  let u = await uuid();
  let temp_path = folder_user_join("temp", u);
  let result = await file_temp_cleanup(lambda$temp_path, temp_path);
  return result;
}
