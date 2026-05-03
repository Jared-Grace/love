import { function_new } from "../../../love/public/src/function_new.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_unalias_exists_only } from "../../../love/public/src/function_unalias_exists_only.mjs";
export async function function_new_if_exists(f_name) {
  let exists = await function_unalias_exists_only(f_name);
  if (not(exists)) {
    await function_new(f_name);
  }
}
