import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function function_delete_if_exists(f_name) {
  const { exists } = await function_exists(f_name);
  if (exists) {
    await function_delete(f_name);
  }
}
