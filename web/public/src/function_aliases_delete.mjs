import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_alias_delete } from "../../../love/public/src/function_alias_delete.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { function_aliases_search } from "../../../love/public/src/function_aliases_search.mjs";
export async function function_aliases_delete(f_name) {
  let result = await function_aliases_search(f_name);
  let exists2 = property_exists(result, f_name);
  if (exists2) {
    let aliases_old = property_get(result, f_name);
    async function lambda2(alias_old) {
      await function_alias_delete(alias_old);
    }
    await each_async(aliases_old, lambda2);
  }
}
