import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { object_property_lambda } from "./object_property_lambda.mjs";
export function global_function_property(fn, property_name, lambda) {
  const initial = {};
  let fn_object = global_function_initialize(fn, initial);
  let value = object_property_lambda(fn_object, property_name, lambda);
  return value;
}
