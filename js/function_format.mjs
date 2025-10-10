import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { js_format } from "../../../love/public/src/js_format.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
export async function function_format(f_name) {
  const { f_path } = await function_name_to_path_unalias(f_name);
  let r = await file_read(f_path);
  let formatted = await js_format(r);
  await file_overwrite(f_path, formatted);
}
