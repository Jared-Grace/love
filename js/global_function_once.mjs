import { global_function_initialize_lambda } from "./global_function_initialize_lambda.mjs";
export function global_function_once(fn, lambda) {
  function value_get() {
    lambda();
    return true;
  }
  global_function_initialize_lambda(fn, value_get);
}
