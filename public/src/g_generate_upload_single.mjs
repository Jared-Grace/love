import { g_generate_upload_generic_single } from "../../../love/public/src/g_generate_upload_generic_single.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { folder_user_storage_function_each } from "../../../love/public/src/folder_user_storage_function_each.mjs";
export async function g_generate_upload_single(fn, path_get, fragment) {
  await folder_user_storage_function_each(fn, file_each);
  async function file_each(file) {
    let i = string_includes(file, fragment);
    if (not(i)) {
      return;
    }
    await g_generate_upload_generic_single(fn, path_get, file);
  }
}
