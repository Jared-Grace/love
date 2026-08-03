import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_unalias_exists(f_name) {
  "A second name for resolving an alias and finding the file behind it, adding nothing of its own to the one it calls.";
  let u = await function_name_to_path_unalias(f_name);
  return u;
}
