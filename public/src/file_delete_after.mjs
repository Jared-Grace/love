import { file_delete_if_exists } from "../../../love/public/src/file_delete_if_exists.mjs";
export async function file_delete_after(temp_path, lambda$temp_path) {
  let result = null;
  try {
    result = await lambda$temp_path(temp_path);
  } finally {
    await file_delete_if_exists(temp_path);
  }
  return result;
}
