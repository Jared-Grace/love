import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
export async function function_run_output_file_temp_generic(f_name, args) {
  let result = await function_run_unalias(f_name, args);
  async function lambda(temp_path) {
    let json = json_format_to(result);
    await file_overwrite(temp_path, json);
    await file_open(temp_path);
  }
  await file_temp(lambda);
}
