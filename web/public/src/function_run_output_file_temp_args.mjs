import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { function_run_output_file_temp_generic } from "../../../love/public/src/function_run_output_file_temp_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_output_file_temp_args(f_name, args_comma) {
  assert_arguments(arguments, 2);
  marker("1");
  let args = string_split_comma(args_comma);
  await function_run_output_file_temp_generic(f_name, args);
}
