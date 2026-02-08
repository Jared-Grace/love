import { g_generate_upload_generic_single } from "../../../love/public/src/g_generate_upload_generic_single.mjs";
import { folder_user_storage_function_each } from "../../../love/public/src/folder_user_storage_function_each.mjs";
export async function g_generate_upload_generic(fn, path_get) {
  await folder_user_storage_function_each(fn, file_each);
  async function file_each(file) {
    await g_generate_upload_generic_single(fn, path_get, file);
  }
}
