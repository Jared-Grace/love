import { marker } from "../../../love/public/src/marker.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_exists(f_name) {
  marker("1");
  let u = await function_name_to_path_unalias(f_name);
  return u;
}
