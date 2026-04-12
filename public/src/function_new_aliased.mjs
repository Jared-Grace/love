import { function_alias_add } from "../../../love/public/src/function_alias_add.mjs";
import { function_new_open } from "../../../love/public/src/function_new_open.mjs";
export async function function_new_aliased(f_name, alias) {
  await function_new_open(f_name);
  await function_alias_add(alias, f_name);
}
