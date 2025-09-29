import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function data_function_current_restore(lambda) {
  let f_name_current = await function_current_get();
  await lambda();
  await function_current_set(f_name_current);
}
