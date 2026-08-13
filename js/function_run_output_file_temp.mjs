import { function_run_output_file_temp_generic } from "./function_run_output_file_temp_generic.mjs";
export async function function_run_output_file_temp(f_name) {
  let args = [];
  let temp_path = await function_run_output_file_temp_generic(f_name, args);
  return temp_path;
}
