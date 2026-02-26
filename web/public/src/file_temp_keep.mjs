import { folder_user_join } from "../../../love/public/src/folder_user_join.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
export async function file_temp_keep() {
  let u = await uuid();
  let temp_path = folder_user_join("temp", u);
  return temp_path;
}
