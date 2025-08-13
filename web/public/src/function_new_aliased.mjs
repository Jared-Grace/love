import { function_alias_add } from "./function_alias_add.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_aliased(f_name, alias) {
  await function_new(f_name);
  await function_alias_add(alias, f_name);
}
