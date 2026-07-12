import { function_unalias_exists_only } from "./function_unalias_exists_only.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_delete_if_exists(f_name) {
  let exists = await function_unalias_exists_only(f_name);
  if (exists) {
    await function_delete(f_name);
  }
}
