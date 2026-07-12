import { function_new } from "./function_new.mjs";
import { not } from "./not.mjs";
import { function_unalias_exists_only } from "./function_unalias_exists_only.mjs";
export async function function_new_if_exists_not(f_name) {
  let exists = await function_unalias_exists_only(f_name);
  if (not(exists)) {
    await function_new(f_name);
  }
}
