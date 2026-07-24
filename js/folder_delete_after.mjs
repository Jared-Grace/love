import { folder_delete } from "./folder_delete.mjs";
export async function folder_delete_after(folder_path, lambda$folder_path) {
  let result = null;
  try {
    result = await lambda$folder_path(folder_path);
  } finally {
    await folder_delete(folder_path);
  }
  return result;
}
