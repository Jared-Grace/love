import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function function_delete_if_exists(f_name) {
  const { exists } = await function_exists_unalias(f_name);
  if (exists) {
    await function_delete(f_name);
  }
}
