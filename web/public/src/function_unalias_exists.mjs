import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
export async function function_unalias_exists(f_name) {
  let u = await function_name_to_path_unalias(f_name);
  return u;
}
