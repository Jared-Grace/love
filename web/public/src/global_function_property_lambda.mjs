import { global_function_initialize_object } from "../../../love/public/src/global_function_initialize_object.mjs";
import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
export function global_function_property_lambda(fn, property_name, lambda) {
  let fn_object = global_function_initialize_object(fn, initial);
  let value = property_initialize_lambda(fn_object, property_name, lambda);
  return value;
}
