import { json_equal_assert_empty } from "./json_equal_assert_empty.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { global_function_initialize_object } from "./global_function_initialize_object.mjs";
export function storage_local_global_empty_assert() {
  let fn_object = global_function_initialize_object(storage_local_set);
  json_equal_assert_empty(fn_object);
}
