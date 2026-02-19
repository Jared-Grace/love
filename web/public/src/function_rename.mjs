import { function_rename_inner } from "../../../love/public/src/function_rename_inner.mjs";
import { function_rename_check } from "../../../love/public/src/function_rename_check.mjs";
import { equal_not_assert } from "../../../love/public/src/equal_not_assert.mjs";
export async function function_rename(f_name_before, f_name_after) {
  equal_not_assert(f_name_before, f_name_after);
  await function_rename_check(f_name_after);
  f_name_before = await function_rename_inner(f_name_before, f_name_after);
  return f_name_before;
}
