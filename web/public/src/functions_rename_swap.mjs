import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function functions_rename_swap(f_name_a, f_name_b) {
  arguments_assert(arguments, 2);
  await function_rename(f_name_a, f_name_b);
}
