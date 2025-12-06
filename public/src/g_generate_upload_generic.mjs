import { not } from "../../../love/public/src/not.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { folder_user_storage_function_each } from "../../../love/public/src/folder_user_storage_function_each.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { path_name } from "../../../love/public/src/path_name.mjs";
import { path_base } from "../../../love/public/src/path_base.mjs";
export async function g_generate_upload_generic(path_get, fn) {
  await folder_user_storage_function_each(fn, file_each);
  async function file_each(file) {
    let fragment = "JAS01";
    let i = string_includes(file, fragment);
    if (not(i)) {
      return;
    }
    log(file);
    let fb = path_base(file);
    let chapter_code = path_name(fb);
    let destination = path_get(chapter_code);
    let path = local_function_path_json(chapter_code, fn);
    let data = await file_read_json(path);
    await firebase_upload_object(data, destination);
  }
}
