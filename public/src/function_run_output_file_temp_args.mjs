import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { function_run_output_file_temp_generic } from "../../../love/public/src/function_run_output_file_temp_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_output_file_temp_args(f_name, args_comma) {
  marker("1");
  let split = string_split_comma(f_names);
  const args = [];
  await function_run_output_file_temp_generic(f_name, args);
}
