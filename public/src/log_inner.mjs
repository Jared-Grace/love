import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { global_function_initialize_null } from "../../../love/public/src/global_function_initialize_null.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function log_inner(f_name, message) {
  const list = [message];
  console.log('log_inner')
  let value = global_function_initialize_null(log_inner);
  if (equal_not(value, f_name)) {
    global_function_set(log_inner, f_name);
    list_add_first(list, f_name);
  }
  each(list, console.log);
  return;
}
