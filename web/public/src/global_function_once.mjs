import { global_function_initialize_lambda } from "../../../love/public/src/global_function_initialize_lambda.mjs";
export function global_function_once(lambda, fn) {
  function value_get() {
    lambda();
    return true;
  }
  global_function_initialize_lambda(fn, value_get);
}
