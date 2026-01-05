import { function_run_output_file_temp_generic } from "../../../love/public/src/function_run_output_file_temp_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_output_file_temp_args(f_name) {
  marker("1");
  const args = [];
  await function_run_output_file_temp_generic(f_name, args);
}
