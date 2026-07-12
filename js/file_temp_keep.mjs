import { folder_user_join } from "./folder_user_join.mjs";
import { uuid } from "./uuid.mjs";
export async function file_temp_keep() {
  let u = await uuid();
  let temp_path = folder_user_join("temp", u);
  return temp_path;
}
