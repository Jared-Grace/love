import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_exists(f_name) {
  marker("1");
  let u = await function_name_to_path(f_name);
  return u;
}
