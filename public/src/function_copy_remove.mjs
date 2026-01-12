import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_remove(f_name_old, f_name_new) {
  marker("1");
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
