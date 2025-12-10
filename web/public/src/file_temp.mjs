import { file_delete_if_exists } from "../../../love/public/src/file_delete_if_exists.mjs";
import { folder_user_combine } from "../../../love/public/src/folder_user_combine.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
export async function file_temp(lambda$temp_path) {
  let u = await uuid();
  let temp_path = folder_user_combine("temp", u);
  let result = null;
  try {
    result = await lambda$temp_path(temp_path);
  } finally {
    if (false) {
    }
    await file_delete_if_exists(temp_path);
  }
  return result;
}
