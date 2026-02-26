import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { file_temp_keep } from "../../../love/public/src/file_temp_keep.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
export async function function_run_output_file_temp_generic(f_name, args) {
  let result = await function_run_unalias(f_name, args);
  let temp_path = await file_temp_keep();
  let json = json_format_to(result);
  await file_overwrite(temp_path, json);
  await file_open(temp_path);
}
