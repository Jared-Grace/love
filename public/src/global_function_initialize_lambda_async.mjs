import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_initialize_lambda } from "../../../love/public/src/object_property_initialize_lambda.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize_lambda_async(fn, lambda) {
  marker("1");
  assert_arguments(arguments, 2);
  let global = global_get();
  let value = object_property_initialize_lambda(global, fn.name, lambda);
  return value;
}
