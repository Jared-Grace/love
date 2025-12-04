import { marker } from "../../../love/public/src/marker.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { object_property_lambda } from "./object_property_lambda.mjs";
export function global_function_property_lambda(fn, property_name, lambda) {
  marker("1");
  const initial = {};
  let fn_object = global_function_initialize(fn, initial);
  let value = object_property_lambda(fn_object, property_name, lambda);
  return value;
}
