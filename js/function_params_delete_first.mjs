import { list_first_property } from "./list_first_property.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { function_params_delete } from "./function_params_delete.mjs";
export async function function_params_delete_first(f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let params = await function_params_get(unaliased);
  let name2 = list_first_property(params, "name");
  let r = await function_params_delete(f_name, name2);
  return r;
}
