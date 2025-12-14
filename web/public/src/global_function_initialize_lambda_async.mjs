import { object_property_initialize_lambda_async } from "../../../love/public/src/object_property_initialize_lambda_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { global_get } from "./global_get.mjs";
export async function global_function_initialize_lambda_async(fn, lambda) {
  marker("1");
  assert_arguments(arguments, 2);
  let global = global_get();
  let value = await object_property_initialize_lambda_async(
    global,
    fn.name,
    lambda,
  );
  return value;
}
