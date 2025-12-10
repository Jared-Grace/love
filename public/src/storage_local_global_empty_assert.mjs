import { marker } from "../../../love/public/src/marker.mjs";
import { json_equal_assert_empty } from "../../../love/public/src/json_equal_assert_empty.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { global_function_initialize_object } from "../../../love/public/src/global_function_initialize_object.mjs";
export function storage_local_global_empty_assert() {
  marker("1");
  let fn_object2 = global_function_initialize_object(storage_local_set);
  json_equal_assert_empty(fn_object2);
}
