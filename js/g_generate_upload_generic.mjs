import { folder_user_storage_function_each } from "./folder_user_storage_function_each.mjs";
import { g_generate_upload_single_recorded } from "./g_generate_upload_single_recorded.mjs";
export async function g_generate_upload_generic(fn, path_get) {
  await folder_user_storage_function_each(fn, file_each);
  async function file_each(file) {
    await g_generate_upload_single_recorded(fn, path_get, file);
  }
}
