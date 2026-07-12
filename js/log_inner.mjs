import { global_function_set } from "./global_function_set.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { equal_not } from "./equal_not.mjs";
import { global_function_initialize_null } from "./global_function_initialize_null.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
export function log_inner(f_name, message) {
  let list = [message];
  let value = global_function_initialize_null(log_inner);
  if (equal_not(value, f_name)) {
    global_function_set(log_inner, f_name);
    list_add_first(list, f_name);
  }
  each(list, console.log);
  return;
}
