import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { path_name } from "../../../love/public/src/path_name.mjs";
import { path_base } from "../../../love/public/src/path_base.mjs";
export async function g_generate_upload_generic_single(file, path_get, fn) {
  let fb = path_base(file);
  let chapter_code = path_name(fb);
  let destination = path_get(chapter_code);
  let path = local_function_path_json(chapter_code, fn);
  let data = await file_read_json(path);
  await firebase_upload_object_compressed(destination, data);
}
