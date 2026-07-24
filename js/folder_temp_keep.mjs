import { folder_user_join } from "./folder_user_join.mjs";
import { uuid } from "./uuid.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
export async function folder_temp_keep() {
  let u = await uuid();
  let temp_path = folder_user_join("temp", u);
  await folder_exists_ensure(temp_path);
  return temp_path;
}
