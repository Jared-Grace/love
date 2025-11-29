import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_param_delete(param_name) {
  marker("1");
  return await function_param_delete(param_name);
}
