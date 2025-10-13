import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new(param_name, default_value) {
  assert_arguments(arguments, 2);
  marker("1");
  await function_params_new(param_name, default_value);
}
