import { function_alias_replace } from "./function_alias_replace.mjs";
export async function marker_assign_replace_string(alias_old, f_name) {
  return await function_alias_replace(alias_old, f_name);
}
