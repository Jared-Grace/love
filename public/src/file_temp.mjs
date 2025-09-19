import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { folder_user_combine } from "./folder_user_combine.mjs";
import { uuid } from "./uuid.mjs";
export async function file_temp(lambda$temp_path) {
  let u = await uuid();
  let temp_path = folder_user_combine("temp", u);
  let result = null;
  try {
    result = await lambda(temp_path);
  } finally {
    await file_delete_if_exists(temp_path);
  }
}
