import { function_param_new } from "../../../love/public/src/function_param_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_param_new(param_name, default_value) {
  marker("1");
  let v = await function_param_new(param_name, default_value);
  return v;
}
