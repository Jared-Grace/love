import { file_temp_json_open } from "../../../love/public/src/file_temp_json_open.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
export async function function_run_output_file_temp_generic(f_name, args) {
  let result = await function_run_unalias(f_name, args);
  await file_temp_json_open(result);
}
