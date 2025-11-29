import { function_multiple_param_new } from "../../../love/public/src/function_multiple_param_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_param_new_double(param_name) {
  marker("1");
  let v = await function_multiple_param_new(
    param_name,
    param_name,
    f_names_comma,
  );
  return v;
}
