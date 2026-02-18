import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
export async function function_move_open(f_name_before, f_name_after) {
  await function_copy_open(f_name_before, f_name_after);
  await function_delete(f_name_before);
}
