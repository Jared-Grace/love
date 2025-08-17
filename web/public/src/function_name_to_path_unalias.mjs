import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { log } from "./log.mjs";
export async function function_name_to_path_unalias(f_name) {
  log(f_name);
  let { unaliased } = await function_name_unalias(f_name);
  const f_path = function_name_to_path(unaliased);
  let v = {
    f_path,
    unaliased,
  };
  return v;
}
