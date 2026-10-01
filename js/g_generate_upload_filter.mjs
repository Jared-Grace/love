import { folder_user_storage_function_each } from "./folder_user_storage_function_each.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { g_generate_upload_single_recorded } from "./g_generate_upload_single_recorded.mjs";
export async function g_generate_upload_filter(fn, path_get, search) {
  await folder_user_storage_function_each(fn, file_each);
  async function file_each(file) {
    let i = text_includes(file, search);
    if (not(i)) {
      return;
    }
    await g_generate_upload_single_recorded(fn, path_get, file);
  }
}
