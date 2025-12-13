import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_cache(f_name) {
  let f_name_cache = function_name_combine(f_name, "cache");
  marker("1");
  async function lambda(ast) {}
  let v = await function_new_transform(f_name2, lambda);
}
