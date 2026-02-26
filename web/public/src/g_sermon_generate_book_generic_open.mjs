import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
export async function g_sermon_generate_book_generic_open(
  f_name,
  chapter_code,
) {
  let imported_fn = await function_import(f_name);
  let path = local_function_path_json(chapter_code, imported_fn);
  let data = await file_read_json(path);
  await file_open(path);
}
