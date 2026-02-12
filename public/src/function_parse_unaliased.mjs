import { function_parse_unaliased_second } from "../../../love/public/src/function_parse_unaliased_second.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
export async function function_parse_unaliased(f_name) {
  const u = await function_name_to_path_unalias(f_name);
  let to = await function_parse_unaliased_second(u);
  return to;
}
