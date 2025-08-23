import {function_current_set} from "./function_current_set.mjs";
import {data_function_current_get} from "./data_function_current_get.mjs";
export async function data_function_current_restore(lambda2) {
  let f_name_current = await data_function_current_get();
  await lambda2();
  await function_current_set(f_name_current);
}
