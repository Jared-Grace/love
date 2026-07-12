import { each_async } from "./each_async.mjs";
import { function_alias_delete } from "./function_alias_delete.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { function_aliases_search } from "./function_aliases_search.mjs";
export async function function_aliases_delete(f_name) {
  let result = await function_aliases_search(f_name);
  let exists = property_exists(result, f_name);
  if (exists) {
    let aliases_old = property_get(result, f_name);
    async function lambda(alias_old) {
      await function_alias_delete(alias_old);
    }
    await each_async(aliases_old, lambda);
  }
}
