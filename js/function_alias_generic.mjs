import { data_save } from "./data_save.mjs";
import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_alias_generic(alias, lambda) {
  let a = await function_alias_add_generic(alias);
  lambda(a);
  await data_save(a);
}
