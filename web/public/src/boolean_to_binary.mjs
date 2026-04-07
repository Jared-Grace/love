import { global_function_initialize_lambda } from "../../../love/public/src/global_function_initialize_lambda.mjs";
import { js_boolean_values_false_first } from "../../../love/public/src/js_boolean_values_false_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function boolean_to_binary(b) {
  let value = global_function_initialize_lambda(
    boolean_to_binary,
    js_boolean_values_false_first,
  );
  let binary = list_index_of(value, b);
  return binary;
}
