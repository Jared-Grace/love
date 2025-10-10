import { data_save } from "../../../love/public/src/data_save.mjs";
import { function_alias_add_generic } from "../../../love/public/src/function_alias_add_generic.mjs";
export async function function_alias_generic(alias, lambda) {
  let a = await function_alias_add_generic(alias);
  lambda(a);
  await data_save(a);
}
