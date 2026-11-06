import { arguments_assert } from "./arguments_assert.mjs";
import { http_json_memoized_failures } from "./http_json_memoized_failures.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function http_json_memoized_failure_add() {
  arguments_assert(arguments, 0);
  ("Count one more fetch through the json memo that came back with nothing.");
  let count = http_json_memoized_failures();
  global_function_property_set(http_json_memoized_failures, "count", count + 1);
}
