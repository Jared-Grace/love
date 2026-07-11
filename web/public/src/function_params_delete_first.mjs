import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { function_params_get } from "../../../love/public/src/function_params_get.mjs";
import { function_params_delete } from "../../../love/public/src/function_params_delete.mjs";
export async function function_params_delete_first(f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let params = await function_params_get(unaliased);
  let first = list_first(params);
  let name2 = property_get(first, "name");
  log(function_params_delete_first.name, {
    first,
  });
  let r = await function_params_delete(f_name, name2);
  return r;
}
