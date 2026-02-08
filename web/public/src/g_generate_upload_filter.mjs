import { g_generate_upload_single_generic } from "../../../love/public/src/g_generate_upload_single_generic.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { folder_user_storage_function_each } from "../../../love/public/src/folder_user_storage_function_each.mjs";
export async function g_generate_upload_filter(fn, path_get, search) {
  await folder_user_storage_function_each(fn, file_each);
  async function file_each(file) {
    let i = string_includes(file, search);
    if (not(i)) {
      return;
    }
    await g_generate_upload_single_generic(fn, path_get, file);
  }
}
