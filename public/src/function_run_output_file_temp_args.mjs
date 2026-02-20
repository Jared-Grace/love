import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_run_output_file_temp_generic } from "../../../love/public/src/function_run_output_file_temp_generic.mjs";
export async function function_run_output_file_temp_args(f_name, args_comma) {
  arguments_assert(arguments, 2);
  let args = text_split_comma(args_comma);
  await function_run_output_file_temp_generic(f_name, args);
}
